package com.huji.couchmirage

import android.content.Context
import android.util.Log
import android.widget.TextView
import com.google.ar.core.Pose
import com.google.ar.sceneform.AnchorNode
import com.google.ar.sceneform.FrameTime
import com.google.ar.sceneform.Node
import com.google.ar.sceneform.math.Quaternion
import com.google.ar.sceneform.math.Vector3
import com.google.ar.sceneform.rendering.*
import com.google.ar.sceneform.ux.ArFragment
import com.google.ar.sceneform.ux.TransformableNode
import com.google.ar.sceneform.ux.TransformationSystem

enum class MeasurementStage {
    NONE, ORIGIN, WIDTH, LENGTH, HEIGHT
}

class Box(
    var pointRenderableRadius: Float,
    var pointRenderableColor: Color,
    var lineRenderableColor: Color,
    var areaRenderableColor: Color,
    var cardLayout: Int,
    var applicationContext: Context

) {
    private var vertices: ArrayList<AnchorNode> = ArrayList()
    private var anchorNodeList: ArrayList<AnchorNode> = ArrayList()

    private var areaCenterNode: Node? = null
    private var realScale: Vector3? = null
    private var cubeRenderable: ModelRenderable? = null
    private var distanceCardViewRenderable: ViewRenderable? = null


    val PT_1: Int = 0
    val PT_2: Int = 1
    val PT_3: Int = 2
    val PT_4: Int = 3
    val PT_5: Int = 4
    val PT_6: Int = 5
    val PT_7: Int = 6
    val PT_8: Int = 7
    private val NUM_OF_VERTICIES: Int = 8

    private val TAG = Box::class.simpleName


    fun addAnchorNode(anchorNode: AnchorNode, transformationSystem: TransformationSystem) {

        val transformableNode =
            TransformableNode(transformationSystem).apply {
                renderable = null
                setParent(anchorNode)
            }

        if (anchorNodeList.size != 2) {
            transformableNode.renderable = cubeRenderable
        }
        transformableNode.select()
        anchorNodeList.add(anchorNode)


    }

    fun addVertex(anchorNode: AnchorNode) {
        vertices.add(anchorNode)
    }

    fun setUI() {

        MaterialFactory.makeTransparentWithColor(applicationContext, pointRenderableColor)
            .thenAccept { material ->
                cubeRenderable =
                    ShapeFactory.makeSphere(pointRenderableRadius, Vector3.zero(), material)
                cubeRenderable?.isShadowReceiver = false
                cubeRenderable?.isShadowCaster = false
            }


        ViewRenderable
            .builder()
            .setView(applicationContext, cardLayout)
            .build()
            .thenAccept {
                distanceCardViewRenderable = it
                distanceCardViewRenderable!!.isShadowCaster = false
                distanceCardViewRenderable!!.isShadowReceiver = false
            }
    }

    private fun getDistanceMeters(pose1: Pose, pose2: Pose): Double {

        val distanceX = pose1.tx() - pose2.tx()
        val distanceY = pose1.ty() - pose2.ty()
        val distanceZ = pose1.tz() - pose2.tz()
        return Math.sqrt(
            (distanceX * distanceX +
                    distanceY * distanceY +
                    distanceZ * distanceZ).toDouble()
        )
    }

    fun getVerticesCount(): Int {
        return vertices.size
    }

    fun getVertex(index: Int): Node {
        return vertices[index]
    }

    fun getAnchorNode(index: Int): AnchorNode {
        return anchorNodeList[index]
    }

    fun getAnchorListSize(): Int {
        return anchorNodeList.size
    }

    fun getMeasurementStage(): MeasurementStage {
        when (vertices.size) {
            PT_1 -> return MeasurementStage.NONE
            PT_2 -> return MeasurementStage.ORIGIN
            PT_3 -> return MeasurementStage.WIDTH
            PT_4, PT_5 -> return MeasurementStage.LENGTH
            else -> return MeasurementStage.HEIGHT
        }
    }


    fun drawLine(
        anchorNodeFirst: AnchorNode,
        anchorNodeSecond: AnchorNode
    ) {

        val point1: Vector3 = anchorNodeFirst.worldPosition
        val point2: Vector3 = anchorNodeSecond.worldPosition

        val pose1 = anchorNodeFirst.anchor?.pose
        val pose2 = anchorNodeSecond.anchor?.pose

        val difference = Vector3.subtract(point1, point2)
        if (difference != Vector3.zero()) {
            val directionFromTopToBottom = difference.normalized()
            val rotationFromAToB =
                Quaternion.lookRotation(directionFromTopToBottom, Vector3.up())

            // add line
            MaterialFactory.makeOpaqueWithColor(applicationContext, pointRenderableColor)
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(.005f, .01f, difference.length()),
                        Vector3.zero(),

                        material
                    )
                    val node = Node()
                    node.setParent(anchorNodeSecond)
                    node.renderable = modelRenderable
                    node.worldPosition = Vector3.add(point1, point2).scaled(.5f)
                    node.worldRotation = rotationFromAToB

                    val dist = getDistanceMeters(pose1!!, pose2!!)


                    // add textbox
                    ViewRenderable.builder()
                        .setView(applicationContext, R.layout.distance_card_layout)
                        .build()
                        .thenAccept { it ->
                            (it.view as TextView).text =
                                "${String.format("%.1f", dist * 100)} CM"
                            it.isShadowCaster = false
                            it.isShadowReceiver = false

                            CameraFacingNode().apply {
                                setParent(node)
                                localRotation = Quaternion.axisAngle(Vector3(0f, 1f, 0f), 90f)
                                localPosition = Vector3(0f, 0.02f, 0f)
                                renderable = it
                            }
                        }

                }


        }

    }

    private fun midPointVector(point1: Vector3, point2: Vector3): Vector3 {
        var avgX = (point1.x + point2.x) / 2
        var avgY = (point1.y + point2.y) / 2
        var avgZ = (point1.z + point2.z) / 2

        return Vector3(avgX, avgY, avgZ)
    }

    private fun rejections(A: Vector3, B: Vector3): Vector3 {
        var c = Vector3.dot(A, B.normalized())
        var projection = B.normalized().scaled(Vector3.dot(A, B.normalized()))
        return Vector3.subtract(A, projection)
    }

    fun drawSquare() {

        var pt1 = anchorNodeList[PT_1].worldPosition
        var pt2 = anchorNodeList[PT_2].worldPosition
        var tracker = anchorNodeList[PT_3].worldPosition
        var p2ToPt1 = Vector3.subtract(pt2, pt1)
        var p2ToTracker = Vector3.subtract(pt2, tracker)
        var r = rejections(p2ToTracker, p2ToPt1)
        var boxLen = r.length()
        var boxWidth = p2ToPt1.length()

        var midPoint = midPointVector(pt1, pt2)
        var toAdd = Vector3(0f, 0f, Math.abs(r.length()) / 2 + 0f)


        val difference = Vector3.subtract(midPoint, tracker)
        if (difference != Vector3.zero()) {
            val directionFromTopToBottom = r.normalized()
            val rotation = Quaternion.lookRotation(directionFromTopToBottom, Vector3.up())

            // add line
            MaterialFactory.makeTransparentWithColor(
                applicationContext,
                areaRenderableColor
            )
                .thenAccept { material ->


                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(boxWidth, .01f, boxLen),
                        toAdd,

                        material
                    )
                    modelRenderable.isShadowCaster = true
                    modelRenderable.isShadowReceiver = true

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation
                    areaCenterNode = node
                    realScale = midPoint
                }


        }

    }

    fun clear() {

        vertices.clear()
        anchorNodeList.clear()
        areaCenterNode = null


    }


    fun setHeight(height: Float) {

        areaCenterNode!!.localScale = Vector3(1f, height, 1f)
        areaCenterNode!!.worldPosition = Vector3(
            realScale!!.x,
            realScale!!.y + height / 200,
            realScale!!.z
        )
    }


}