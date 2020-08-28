package com.huji.couchmirage

import android.content.Context
import android.util.Log
import android.widget.TextView
import com.google.ar.core.Pose
import com.google.ar.sceneform.AnchorNode
import com.google.ar.sceneform.Node
import com.google.ar.sceneform.math.Quaternion
import com.google.ar.sceneform.math.Vector3
import com.google.ar.sceneform.rendering.*
import com.google.ar.sceneform.ux.TransformableNode
import com.google.ar.sceneform.ux.TransformationSystem
import java.text.FieldPosition

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
    private var vertices: ArrayList<Node> = ArrayList()
    private var verticalVertices: ArrayList<Node> = ArrayList()
    private var anchorNodeList: ArrayList<AnchorNode> = ArrayList()
    private var upperFrameVertices: ArrayList<Node> = ArrayList()


    private var areaCenterNode: Node? = null
    private var centerRealScale: Vector3? = null
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

            renderLine(
                .005f,
                .01f,
                difference.length(),
                rotationFromAToB,
                Vector3.add(point1, point2).scaled(.5f),
                anchorNodeSecond,
                getDistanceMeters(pose1!!, pose2!!).toFloat()
            )


        }

    }


    private fun addTextBox(
        node: Node, dist: Float,
        position: Vector3 = Vector3(0f, 0.02f, 0f),
        rotation: Quaternion = Quaternion.axisAngle(Vector3(0f, 1f, 0f), 90f)

    ) {
        ViewRenderable.builder()
            .setView(applicationContext, cardLayout)
            .build()
            .thenAccept { it ->
                (it.view as TextView).text =
                    "${String.format("%.1f", dist * 100)} CM"
                it.isShadowCaster = false
                it.isShadowReceiver = false

                CameraFacingNode().apply {
                    setParent(node)
                    localRotation = rotation
                    localPosition = position
                    renderable = it
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

    private fun renderLine(
        modelX: Float,
        modelY: Float,
        modelZ: Float,
        worldRotation: Quaternion,
        worldPosition: Vector3,
        parentAnchorNode: AnchorNode,
        dist: Float
    ) {
        // add line
        MaterialFactory.makeOpaqueWithColor(applicationContext, pointRenderableColor)
            .thenAccept { material ->

                val modelRenderable = ShapeFactory.makeCube(
                    Vector3(modelX, modelY, modelZ),
                    Vector3.zero(),
                    material
                )

                val node = Node()
                node.setParent(parentAnchorNode)
                node.renderable = modelRenderable
                node.worldPosition = worldPosition
                node.worldRotation = worldRotation

                addTextBox(node, dist)
            }

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

            // add area
            MaterialFactory.makeTransparentWithColor(
                applicationContext,
                areaRenderableColor
            )
                .thenAccept { material ->


                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(boxWidth, .01f, boxLen),
                        toAdd,
                        material
                    ).apply {
                        isShadowCaster = true
                        isShadowReceiver = true
                    }

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation
                    areaCenterNode = node
                    centerRealScale = midPoint


                }
            /////////////////////////////////////////////////////////////

            // point 1
            MaterialFactory.makeTransparentWithColor(
                applicationContext,
                Color(0F, 255F, 0F)
            )
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(.005f, .005f, pointRenderableRadius),
                        Vector3(boxWidth / 2, 0f, Math.abs(r.length())),
                        material
                    ).apply {
                        isShadowCaster = true
                        isShadowReceiver = true
                    }

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation

                    vertices.add(node)
                }

            // point 2
            MaterialFactory.makeTransparentWithColor(
                applicationContext,
                Color(0F, 255F, 0F)
            )
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(.005f, .005f, pointRenderableRadius),
                        Vector3(-boxWidth / 2, 0f, Math.abs(r.length())),
                        material
                    ).apply {
                        isShadowCaster = true
                        isShadowReceiver = true
                    }

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation

                    vertices.add(node)

                }

            // double existing vertex from 4 to 8
            multipleNodeArrayList(vertices)

            // add lower frame --------------------------------------------------------------------------
            // add line
            MaterialFactory.makeOpaqueWithColor(applicationContext, lineRenderableColor)
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(
                            p2ToPt1.length(),
                            .01f,
                            .005f
                        ),
                        Vector3(0f, 0f, Math.abs(r.length())),

                        material
                    )

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation


                    var dist = getDistanceMeters(
                        anchorNodeList[PT_1].anchor!!.pose,
                        anchorNodeList[PT_2].anchor!!.pose
                    ).toFloat()

                    addTextBox(node, dist, position = Vector3(0f, 0.02f, Math.abs(r.length())))

                }

            // add line
            MaterialFactory.makeOpaqueWithColor(applicationContext, lineRenderableColor)
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(
                            .005f,
                            .01f,
                            r.length()
                        ),
                        Vector3(-p2ToPt1.length() / 2, 0f, Math.abs(r.length() / 2)),

                        material
                    )

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation

                    var dist = r.length()
                    addTextBox(
                        node,
                        dist,
                        position = Vector3(-p2ToPt1.length() / 2, 0f, Math.abs(r.length() / 2))
                    )

                }

            // add line
            MaterialFactory.makeOpaqueWithColor(applicationContext, lineRenderableColor)
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(
                            .005f,
                            .01f,
                            r.length()
                        ),
                        Vector3(p2ToPt1.length() / 2, 0f, Math.abs(r.length() / 2)),

                        material
                    )

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation

                    var dist = r.length()
                    addTextBox(
                        node,
                        dist,
                        position = Vector3(p2ToPt1.length() / 2, 0f, Math.abs(r.length() / 2))
                    )


                }

            // add horizontal lines ---------------------------------------------------------------

            // line 1
            MaterialFactory.makeTransparentWithColor(
                applicationContext,
                lineRenderableColor
            )
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(.005f, .01f, .01f),
                        Vector3(p2ToPt1.length() / 2, 0f, 0f),
                        material
                    ).apply {
                        isShadowCaster = true
                        isShadowReceiver = true
                    }

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation

                    verticalVertices.add(node)
                }

            // line 2
            MaterialFactory.makeTransparentWithColor(
                applicationContext,
                lineRenderableColor
            )
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(.005f, .01f, .01f),
                        Vector3(-p2ToPt1.length() / 2, 0f, 0f),
                        material
                    ).apply {
                        isShadowCaster = true
                        isShadowReceiver = true
                    }

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation

                    verticalVertices.add(node)
                }


            // line 3
            MaterialFactory.makeTransparentWithColor(
                applicationContext,
                lineRenderableColor
            ).thenAccept { material ->

                val modelRenderable = ShapeFactory.makeCube(
                    Vector3(.005f, .01f, .01f),
                    Vector3(boxWidth / 2, 0f, Math.abs(r.length())),
                    material
                ).apply {
                    isShadowCaster = true
                    isShadowReceiver = true
                }

                val node = Node()
                node.setParent(anchorNodeList[2])
                node.renderable = modelRenderable
                node.worldPosition = midPoint
                node.worldRotation = rotation

                verticalVertices.add(node)
            }

            // line 4
            MaterialFactory.makeTransparentWithColor(
                applicationContext,
                lineRenderableColor
            )
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(.005f, .01f, .01f),
                        Vector3(-boxWidth / 2, 0f, Math.abs(r.length())),
                        material
                    ).apply {
                        isShadowCaster = true
                        isShadowReceiver = true
                    }

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation

                    verticalVertices.add(node)

                }


            // add upper frame --------------------------------------------------------------------------

            // add line
            MaterialFactory.makeOpaqueWithColor(applicationContext, lineRenderableColor)
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(
                            p2ToPt1.length(),
                            .01f,
                            .005f
                        ),
                        Vector3(0f, 0f, 0f),

                        material
                    )

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation
                    upperFrameVertices.add(node)
                    //  addTextBox(node, dist)
                }

            // add line
            MaterialFactory.makeOpaqueWithColor(applicationContext, lineRenderableColor)
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(
                            p2ToPt1.length(),
                            .01f,
                            .005f
                        ),
                        Vector3(0f, 0f, Math.abs(r.length())),

                        material
                    )

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation
                    upperFrameVertices.add(node)

                    //  addTextBox(node, dist)
                }

            // add line
            MaterialFactory.makeOpaqueWithColor(applicationContext, lineRenderableColor)
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(
                            .005f,
                            .01f,
                            r.length()
                        ),
                        Vector3(-p2ToPt1.length() / 2, 0f, Math.abs(r.length() / 2)),

                        material
                    )

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation
                    upperFrameVertices.add(node)

                    //  addTextBox(node, dist)
                }

            // add line
            MaterialFactory.makeOpaqueWithColor(applicationContext, lineRenderableColor)
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(
                            .005f,
                            .01f,
                            r.length()
                        ),
                        Vector3(p2ToPt1.length() / 2, 0f, Math.abs(r.length() / 2)),

                        material
                    )

                    val node = Node()
                    node.setParent(anchorNodeList[2])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation
                    upperFrameVertices.add(node)

                    //  addTextBox(node, dist)
                }

        }

    }

    fun multipleNodeArrayList(arrayListNode: ArrayList<Node>) {
        // add a copy of existing nodes
        var tempArrayList = arrayListNode
        for (i in 1..arrayListNode.size) {

            var tempVertex = Node()
            tempVertex.worldPosition = vertices[i].worldPosition
            tempVertex.worldRotation = vertices[i].worldRotation
            tempVertex.renderable = vertices[i].renderable
            tempVertex.setParent(vertices[i].parent)

            tempArrayList.add(tempVertex)


        }

        for (i in 1..tempArrayList.size) {

            arrayListNode.add(tempArrayList[i])
        }

    }

    fun clear() {

        vertices.clear()
        verticalVertices.clear()
        anchorNodeList.clear()
        upperFrameVertices.clear()
        centerRealScale = null
        areaCenterNode = null
        // xxx


    }

    private fun setNodeHeight(height: Float, node: Node, scale: Vector3) {

        node.localScale = Vector3(1f, height, 1f)
        node.worldPosition = Vector3(
            scale.x,
            scale.y + height / 200,
            scale.z
        )
    }

    private fun ascendNode(height: Float, node: Node, scale: Vector3) {

        node.worldPosition = Vector3(
            scale.x,
            scale.y + height / 200,
            scale.z
        )
    }


    fun setBoxHeight(height: Float) {

        // move area
        setNodeHeight(height, areaCenterNode!!, centerRealScale!!)


        // move vertical lines
        setNodeHeight(height, verticalVertices[0], centerRealScale!!)
        setNodeHeight(height, verticalVertices[1], centerRealScale!!)
        setNodeHeight(height, verticalVertices[2], centerRealScale!!)
        setNodeHeight(height, verticalVertices[3], centerRealScale!!)

        // move upper frame
        ascendNode(height * 2, upperFrameVertices[0], centerRealScale!!)
        ascendNode(height * 2, upperFrameVertices[1], centerRealScale!!)
        ascendNode(height * 2, upperFrameVertices[2], centerRealScale!!)
        ascendNode(height * 2, upperFrameVertices[3], centerRealScale!!)


    }


}