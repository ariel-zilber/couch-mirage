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
import com.google.ar.sceneform.ux.ArFragment
import com.google.ar.sceneform.ux.TransformableNode
import com.google.ar.sceneform.ux.TransformationSystem

data class BoxRenderData(
    val pointRenderableRadius: Float,
    var pointRenderableColor: Color,
    var lineRenderableColor: Color,
    var areaRenderableColor: Color
)

data class BoxInfoCardLayouts(
    val cardLayout: Int,
    val heightCardLayout: Int
)

data class BoxMeasurements(
    var boxWidth: Float,
    var boxLength: Float,
    var boxHeight: Float
)


enum class MeasurementStage {
    NONE, ORIGIN, WIDTH, LENGTH, HEIGHT
}


class Box(
    var boxRenderData: BoxRenderData,
    var boxInfoCardLayouts: BoxInfoCardLayouts,
    var applicationContext: Context,
    var arFragment: ArFragment

) {
    // Data class ------------------------------------------------------------------------------

    // Data memebers ------------------------------------------------------------------------------

    private var vertices: ArrayList<Node> = ArrayList()
    private var verticalVertices: ArrayList<Node> = ArrayList()
    private var anchorNodeList: ArrayList<AnchorNode> = ArrayList()
    private var upperFrameVertices: ArrayList<Node> = ArrayList()
    private var lowerFrameVertices: ArrayList<Node> = ArrayList()


    private var areaCenterNode: Node? = null
    private var centerRealScale: Vector3? = null
    private var heightNode: Node? = null
    private var cubeRenderable: ModelRenderable? = null
    private var distanceCardViewRenderable: ViewRenderable? = null

    private val boxMeasurements = BoxMeasurements(0f, 0f, 0f)

    private companion object {
        private val NUM_OF_VERTICIES: Int = 8
        private val MIN_HEIGHT_INDICATOR = 10
        private val TAG = Box::class.simpleName
        private val LINE_DEFAULT = 0.005f

    }

    val PT_1: Int = 0
    val PT_2: Int = 1
    val PT_3: Int = 2
    val PT_4: Int = 3
    val PT_5: Int = 4
    val PT_6: Int = 5
    val PT_7: Int = 6
    val PT_8: Int = 7


    // Public methods -----------------------------------------------------------------------------

    fun addAnchorNode(anchorNode: AnchorNode) {

        val transformableNode =
            TransformableNode(arFragment.transformationSystem).apply {
                renderable = null
                setParent(anchorNode)
            }
        transformableNode.scaleController.isEnabled = false
        transformableNode.getTranslationController().setEnabled(false);

        if (anchorNodeList.size != 2) {
            transformableNode.renderable = cubeRenderable
        }
        anchorNodeList.add(anchorNode)

    }


    fun addVertex(anchorNode: AnchorNode) {
        vertices.add(anchorNode)
    }

    fun setUI() {

        MaterialFactory.makeTransparentWithColor(
            applicationContext,
            boxRenderData.pointRenderableColor
        )
            .thenAccept { material ->
                cubeRenderable =
                    ShapeFactory.makeSphere(
                        boxRenderData.pointRenderableRadius,
                        Vector3.zero(),
                        material
                    )
                cubeRenderable?.isShadowReceiver = false
                cubeRenderable?.isShadowCaster = false
            }

        ViewRenderable
            .builder()
            .setView(applicationContext, boxInfoCardLayouts.cardLayout)
            .build()
            .thenAccept {
                distanceCardViewRenderable = it
                distanceCardViewRenderable!!.isShadowCaster = false
                distanceCardViewRenderable!!.isShadowReceiver = false
            }
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
            MaterialFactory.makeOpaqueWithColor(
                applicationContext,
                boxRenderData.pointRenderableColor
            )
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(LINE_DEFAULT, LINE_DEFAULT, difference.length()),
                        Vector3.zero(),
                        material
                    )

                    val node = Node()
                    node.setParent(anchorNodeSecond)
                    node.renderable = modelRenderable
                    node.worldPosition = Vector3.add(point1, point2).scaled(.5f)
                    node.worldRotation = rotationFromAToB

                    addTextBox(node, getDistanceMeters(pose1!!, pose2!!).toFloat())
                }


        }

    }

    private fun drawFrame(position: Vector3, rotation: Quaternion, dist1: Float, dist2: Float) {
        // add horizontal lines ---------------------------------------------------------------

        // line 1
        renderVerticalLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, LINE_DEFAULT, LINE_DEFAULT),
            offset = Vector3(boxMeasurements.boxWidth / 2, 0f, 0f),
            parentAnchorNode = anchorNodeList[PT_3],
            position = position,
            rotation = rotation
        )

        // line 2
        renderVerticalLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, LINE_DEFAULT, LINE_DEFAULT),
            offset = Vector3(-boxMeasurements.boxWidth / 2, 0f, 0f),
            parentAnchorNode = anchorNodeList[PT_3],
            position = position,
            rotation = rotation
        )


        // line 3
        renderVerticalLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, LINE_DEFAULT, LINE_DEFAULT),
            offset = Vector3(
                boxMeasurements.boxWidth / 2,
                0f,
                Math.abs(boxMeasurements.boxLength)
            ),
            parentAnchorNode = anchorNodeList[PT_3],
            position = position,
            rotation = rotation
        )

        // line 4
        renderVerticalLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, LINE_DEFAULT, LINE_DEFAULT),
            offset = Vector3(
                -boxMeasurements.boxWidth / 2,
                0f,
                Math.abs(boxMeasurements.boxLength)
            ),
            parentAnchorNode = anchorNodeList[PT_3],
            position = position,
            rotation = rotation
        )

        // add lower frame--------------------------------------------------------------------
        // add line
        renderLowerFrameLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(boxMeasurements.boxWidth, LINE_DEFAULT, LINE_DEFAULT),
            offset = Vector3.zero(),
            parentAnchorNode = anchorNodeList[1],
            position = position,
            rotation = rotation
        )

        // add line
        renderLowerFrameLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(boxMeasurements.boxWidth, LINE_DEFAULT, LINE_DEFAULT),
            offset = Vector3(0f, 0f, Math.abs(boxMeasurements.boxLength)),
            parentAnchorNode = anchorNodeList[1],
            position = position,
            rotation = rotation
        )

        // add line
        renderLowerFrameLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, LINE_DEFAULT, boxMeasurements.boxLength),
            offset = Vector3(
                -boxMeasurements.boxWidth / 2,
                0f,
                Math.abs(boxMeasurements.boxLength / 2)
            ),
            parentAnchorNode = anchorNodeList[1],
            position = position,
            rotation = rotation
        )

        // add line
        renderLowerFrameLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, LINE_DEFAULT, boxMeasurements.boxLength),
            offset = Vector3(
                boxMeasurements.boxWidth / 2,
                0f,
                Math.abs(boxMeasurements.boxLength / 2)
            ),
            parentAnchorNode = anchorNodeList[1],
            position = position,
            rotation = rotation
        )
        // add upper frame --------------------------------------------------------------------------

        // add line
        renderUpperFrameLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(boxMeasurements.boxWidth, LINE_DEFAULT, LINE_DEFAULT),
            offset = Vector3.zero(),
            parentAnchorNode = anchorNodeList[PT_3],
            position = position,
            rotation = rotation,
            dist = dist1
        )

        // add line
        renderUpperFrameLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(boxMeasurements.boxWidth, LINE_DEFAULT, LINE_DEFAULT),
            offset = Vector3(0f, 0f, Math.abs(boxMeasurements.boxLength)),
            parentAnchorNode = anchorNodeList[PT_3],
            position = position,
            rotation = rotation
        )

        // add line
        renderUpperFrameLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, LINE_DEFAULT, boxMeasurements.boxLength),
            offset = Vector3(
                -boxMeasurements.boxWidth / 2,
                0f,
                Math.abs(boxMeasurements.boxLength / 2)
            ),
            parentAnchorNode = anchorNodeList[PT_3],
            position = position,
            rotation = rotation,
            dist = dist2
        )

        // add line
        renderUpperFrameLine(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, LINE_DEFAULT, boxMeasurements.boxLength),
            offset = Vector3(
                boxMeasurements.boxWidth / 2,
                0f,
                Math.abs(boxMeasurements.boxLength / 2)
            ),
            parentAnchorNode = anchorNodeList[PT_3],
            position = position,
            rotation = rotation
        )

    }

    fun drawSquare() {

        val pt1 = anchorNodeList[PT_1].worldPosition
        val pt2 = anchorNodeList[PT_2].worldPosition
        val tracker = anchorNodeList[PT_3].worldPosition
        val p2ToPt1 = Vector3.subtract(pt2, pt1)
        val p2ToTracker = Vector3.subtract(pt2, tracker)
        val r = rejections(p2ToTracker, p2ToPt1)
        val midPoint = midPointVector(pt1, pt2)
        val toAdd = Vector3(0f, 0f, Math.abs(r.length()) / 2 + 0f)

        // set the box length and width
        boxMeasurements.boxLength = r.length()
        boxMeasurements.boxWidth = p2ToPt1.length()

        // real distance
        val dist1 = getDistanceMeters(
            anchorNodeList[PT_1].anchor!!.pose,
            anchorNodeList[PT_2].anchor!!.pose
        ).toFloat()
        val dist2 = r.length()


        val difference = Vector3.subtract(midPoint, tracker)
        if (difference != Vector3.zero()) {
            val directionFromTopToBottom = r.normalized()
            val rotation = Quaternion.lookRotation(directionFromTopToBottom, Vector3.up())

            // add area
            MaterialFactory.makeTransparentWithColor(
                applicationContext,
                boxRenderData.areaRenderableColor
            )
                .thenAccept { material ->

                    material.setFloat("reflectance", 0F)
                    material.setFloat("roughness", 1F)
                    material.setFloat("metallic", 1F)

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(boxMeasurements.boxWidth, LINE_DEFAULT, boxMeasurements.boxLength),
                        toAdd,
                        material
                    ).apply {
                        isShadowCaster = false
                        isShadowReceiver = false
                    }

                    val node = TransformableNode(arFragment.transformationSystem)
                    node.scaleController.isEnabled = false
                    node.getTranslationController().setEnabled(false);

                    node.setParent(anchorNodeList[PT_3])
                    node.renderable = modelRenderable
                    node.worldPosition = midPoint
                    node.worldRotation = rotation

                    val node2 = Node()
                    node2.setParent(anchorNodeList[PT_3])
                    node2.worldPosition = midPoint
                    node2.worldRotation = rotation

                    //
                    addTextBox(
                        node2,
                        0f,
                        position = Vector3.add(
                            toAdd, Vector3(LINE_DEFAULT, LINE_DEFAULT * 16, LINE_DEFAULT)
                        ),
                        measurement = "cm",
                        startUnit = "H=",
                        view = boxInfoCardLayouts.heightCardLayout
                    )

                    addTextBox(
                        node2,
                        dist1 * dist2,
                        position = Vector3.add(
                            toAdd, Vector3(LINE_DEFAULT, 0f, LINE_DEFAULT)
                        ),
                        measurement = "cm^2",
                        startUnit = "S=",
                        view = boxInfoCardLayouts.heightCardLayout
                    )

                    //
                    areaCenterNode = node
                    centerRealScale = midPoint
                    heightNode = node2

                }


            // double existing vertex from 4 to 8
            multipleNodeArrayList(vertices)

            // remove line
            while (anchorNodeList[0].children.size > 0) {
                anchorNodeList[0].removeChild(anchorNodeList[0].children[0])
            }

            while (anchorNodeList[1].children.size > 0) {
                anchorNodeList[1].removeChild(anchorNodeList[1].children[0])
            }


            // draw surrounded  lines
            drawFrame(
                position = midPoint, rotation = rotation,
                dist1 = dist1, dist2 = dist2
            )


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
        lowerFrameVertices.clear()
        centerRealScale = null
        areaCenterNode = null
        heightNode = null
        boxMeasurements.boxWidth = 0f
        boxMeasurements.boxHeight = 0f
        boxMeasurements.boxLength = 0f

    }

    fun setBoxHeight(foundHeight: Float) {

        var height = foundHeight

        if (height <= 1f) {
            height = 1f
        }

        var diffrence = height - boxMeasurements.boxHeight

        boxMeasurements.boxHeight = height

        updateBoxHeight(height)
        updateVerticalFrameHeight(height)

        // move upper frame
        for (i in 0..3) {

            upperFrameVertices[i].localPosition = Vector3(
                upperFrameVertices[i].localPosition.x,
                upperFrameVertices[i].localPosition.y + 2 * LINE_DEFAULT * diffrence,
                upperFrameVertices[i].localPosition.z
            )
            heightNode!!.localPosition = Vector3(
                heightNode!!.localPosition.x,
                heightNode!!.localPosition.y + LINE_DEFAULT / 2 * diffrence,
                heightNode!!.localPosition.z
            )
        }

        //
        var it: ViewRenderable = heightNode!!.children[0].renderable as ViewRenderable
        (it.view as TextView).text = "H= ${String.format("%.1f", height)} cm"

    }

    // Private methods ----------------------------------------------------------------------------


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


    private fun addTextBox(
        node: Node,
        dist: Float,
        position: Vector3 = Vector3(0f, 0.02f, 0f),
        rotation: Quaternion = Quaternion.axisAngle(Vector3(0f, 1f, 0f), 90f),
        measurement: String = "cm",
        startUnit: String = "",
        view: Int = boxInfoCardLayouts.cardLayout

    ) {


        ViewRenderable.builder()
            .setView(applicationContext, view)
            .build()
            .thenAccept { it ->
                (it.view as TextView).text =
                    "${startUnit}${String.format(" % .1f", dist * 100)} ${measurement}"

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
        var projection = B.normalized().scaled(Vector3.dot(A, B.normalized()))
        return Vector3.subtract(A, projection)
    }


    private fun setNodeHeight(height: Float, node: Node, scale: Vector3, offset: Float) {

        node.localScale = Vector3(1f, height, 1f)
        node.worldPosition = Vector3(
            scale.x,
            scale.y + offset / 100,
            scale.z
        )
    }


    private fun updateBoxHeight(height: Float) {

        var toAdd = Vector3(0f, 0f + height * LINE_DEFAULT, Math.abs(boxMeasurements.boxLength) / 2)
        // add area

        MaterialFactory.makeTransparentWithColor(
            applicationContext,
            boxRenderData.areaRenderableColor
        )

            .thenAccept { material ->

                material.setFloat("reflectance", 0F)
                material.setFloat("roughness", 1F)
                material.setFloat("metallic", 1F)

                val modelRenderable = ShapeFactory.makeCube(
                    Vector3(
                        boxMeasurements.boxWidth,
                        2 * height * LINE_DEFAULT,
                        boxMeasurements.boxLength
                    ),
                    toAdd,
                    material
                ).apply {
                    isShadowCaster = false
                    isShadowReceiver = false
                }

                areaCenterNode!!.renderable = modelRenderable

            }

    }

    private fun updateUpperFrameHeight(height: Float) {


        // add line
        upperFrameVertices[0].renderable = getLineModelRendable(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(boxMeasurements.boxWidth, LINE_DEFAULT, LINE_DEFAULT),
            offset = Vector3(0f, 0f + height / 100, 0f)
        )

        // add line
        upperFrameVertices[1].renderable = getLineModelRendable(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(boxMeasurements.boxWidth, LINE_DEFAULT, LINE_DEFAULT),
            offset = Vector3(0f, 0f + height / 100, Math.abs(boxMeasurements.boxLength))
        )

        // add line
        upperFrameVertices[2].renderable = getLineModelRendable(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, LINE_DEFAULT, boxMeasurements.boxLength),
            offset = Vector3(
                -boxMeasurements.boxWidth / 2,
                0f + height / 100,
                Math.abs(boxMeasurements.boxLength / 2)
            )
        )

        // add line
        upperFrameVertices[3].renderable = getLineModelRendable(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, LINE_DEFAULT, boxMeasurements.boxLength),
            offset = Vector3(
                boxMeasurements.boxWidth / 2,
                0f + height / 100,
                Math.abs(boxMeasurements.boxLength / 2)
            )
        )


    }

    private fun updateVerticalFrameHeight(height: Float) {


        // line 1
        verticalVertices[0].renderable = getLineModelRendable(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, 2 * LINE_DEFAULT * height, LINE_DEFAULT),
            offset = Vector3(boxMeasurements.boxWidth / 2, 0f + height / 200, 0f)
        )

        // line 2
        verticalVertices[1].renderable = getLineModelRendable(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, 2 * LINE_DEFAULT * height, LINE_DEFAULT),
            offset = Vector3(-boxMeasurements.boxWidth / 2, 0f + height / 200, 0f)
        )


        // line 3
        verticalVertices[2].renderable = getLineModelRendable(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, 2 * LINE_DEFAULT * height, LINE_DEFAULT),
            offset = Vector3(
                boxMeasurements.boxWidth / 2,
                0f + height / 200,
                Math.abs(boxMeasurements.boxLength)
            )
        )

        // line 4
        verticalVertices[3].renderable = getLineModelRendable(
            context = applicationContext,
            color = boxRenderData.lineRenderableColor,
            modeSize = Vector3(LINE_DEFAULT, 2 * LINE_DEFAULT * height, LINE_DEFAULT),
            offset = Vector3(
                -boxMeasurements.boxWidth / 2,
                0f + height / 200,
                Math.abs(boxMeasurements.boxLength)
            )
        )


    }


    private fun renderUpperFrameLine(
        context: Context, color: Color,
        modeSize: Vector3,
        offset: Vector3,
        parentAnchorNode: AnchorNode,
        position: Vector3,
        rotation: Quaternion, dist: Float? = null
    ) {

        var node = renderLine(
            context, color,
            modeSize, offset,
            parentAnchorNode,
            position, rotation
        )

        if (dist != null) {

            addTextBox(
                node,
                dist,
                position = Vector3.add(
                    offset,
                    Vector3(0f, 0.01f, 0f)
                ),
                measurement = "cm"
            )
        }


        upperFrameVertices.add(node)


    }


    private fun renderLowerFrameLine(
        context: Context, color: Color,
        modeSize: Vector3,
        offset: Vector3,
        parentAnchorNode: AnchorNode,
        position: Vector3,
        rotation: Quaternion, dist: Float? = null
    ) {

        var node = renderLine(
            context, color,
            modeSize, offset,
            parentAnchorNode,
            position, rotation
        )

        if (dist != null) {

            addTextBox(
                node,
                dist,
                position = Vector3.add(
                    offset,
                    Vector3(0f, 0.01f, 0f)
                ),
                measurement = "cm"
            )
        }


        lowerFrameVertices.add(node)


    }

    private fun renderVerticalLine(
        context: Context, color: Color,
        modeSize: Vector3,
        offset: Vector3,
        parentAnchorNode: AnchorNode,
        position: Vector3,
        rotation: Quaternion
    ) {

        var node = renderLine(
            context, color,
            modeSize, offset,
            parentAnchorNode,
            position, rotation
        )

        verticalVertices.add(node)

    }

    private fun getLineModelRendable(
        context: Context,
        color: Color,
        modeSize: Vector3,
        offset: Vector3
    ): ModelRenderable? {
        var modelRenderable: ModelRenderable? = null

        // add line
        MaterialFactory.makeOpaqueWithColor(context, color)
            .thenAccept { material ->

                modelRenderable = ShapeFactory.makeCube(
                    modeSize,
                    offset,
                    material
                ).apply {
                    isShadowCaster = false
                    isShadowReceiver = false
                }
            }

        return modelRenderable
    }

    private fun renderLine(
        context: Context,
        color: Color,
        modeSize: Vector3,
        offset: Vector3,
        parentAnchorNode: AnchorNode,
        position: Vector3,
        rotation: Quaternion
    ): Node {

        var modelRenderable: ModelRenderable? = getLineModelRendable(
            context,
            color,
            modeSize,
            offset
        )


        var node = Node().apply {
            setParent(parentAnchorNode)
            renderable = modelRenderable
            worldPosition = position
            worldRotation = rotation
        }
        return node
    }


}