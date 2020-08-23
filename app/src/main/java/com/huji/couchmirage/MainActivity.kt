package com.huji.couchmirage

import android.annotation.SuppressLint
import android.app.Activity
import android.app.ActivityManager
import android.content.Context
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.MotionEvent
import android.widget.Button
import android.widget.Toast
import com.google.ar.sceneform.AnchorNode
import com.google.ar.sceneform.Camera
import com.google.ar.sceneform.Node
import com.google.ar.sceneform.Sun
import com.google.ar.sceneform.math.Quaternion
import com.google.ar.sceneform.math.Vector3
import com.google.ar.sceneform.rendering.Color
import com.google.ar.sceneform.rendering.MaterialFactory
import com.google.ar.sceneform.rendering.ModelRenderable
import com.google.ar.sceneform.rendering.ShapeFactory
import com.google.ar.sceneform.ux.ArFragment
import com.google.ar.sceneform.ux.TransformableNode
import java.util.ArrayList

@SuppressLint("Registered")
class MainActivity : AppCompatActivity() {

    //
    val TAG = MainActivity::class.simpleName
    val MIN_OPENGL_VERSION: Double = 3.0

    //
    var pose1 = ArrayList<Float>()
    var pose2 = ArrayList<Float>()

    // TODO
    var btnRulerSelected: Boolean = false

    //
    var lastAnchorNode: AnchorNode? = null

    // renderable
    var cubeRenderable: ModelRenderable? = null

    var heightRenderable: ModelRenderable? = null

    // renderable constants
    val CUBE_RENDABLE_RADIUS = 0.01f
    val CUBE_RENDABLE_COLOR = Color(0F, 219F, 0F)


    //
    lateinit var arFragment: ArFragment

    // measurement points
    var point1: Vector3? = null;
    var point2: Vector3? = null;


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        if (!checkIsSupportedDeviceOrFinish(this)) {
            return
        }

        // set buttons
        setMeasureBtn()


        setDrawUI()
        setARFragment()


    }

    private fun setMeasureBtn() {

        // ruler button
        var rulerBtn = findViewById<Button>(R.id.measure)
        rulerBtn.setOnClickListener {
            if (btnRulerSelected) {
                btnRulerSelected = false
                onClear()
            } else {
                btnRulerSelected = true

            }

        }


    }

    private fun setARFragment() {
        arFragment = supportFragmentManager.findFragmentById(R.id.fragment) as ArFragment
        arFragment.setOnTapArPlaneListener { hitResult, plane, motionEvent ->

            if (cubeRenderable == null) {
                return@setOnTapArPlaneListener
            }


            if (btnRulerSelected) {
                if (lastAnchorNode == null) {


                    // fixed location and orientation in the real world
                    val anchor = hitResult.createAnchor()

                    // sticks to anchor.can attach renderable
                    val anchorNode = AnchorNode(anchor)
                    anchorNode.setParent(arFragment.arSceneView.scene)

                    // the
                    val pose = anchor.pose
                    if (pose1.isEmpty()) {
                        pose1.add(pose.tx())
                        pose1.add(pose.ty())
                        pose1.add(pose.tz())
                    }

                    val transformableNode = TransformableNode(arFragment.transformationSystem)
                    transformableNode.setParent(anchorNode)
                    transformableNode.renderable = cubeRenderable
                    transformableNode.select()
                    lastAnchorNode = anchorNode
                    transformableNode.setOnTapListener { _, _ ->

                        if (lastAnchorNode != null) {
                            drawLine(lastAnchorNode!!, anchorNode)
                            lastAnchorNode = anchorNode
                        }

                        transformableNode.select()

                    }

                } else {
                    // todo
                    val value = motionEvent.actionMasked
                    val axisVal = motionEvent.getAxisValue(
                        MotionEvent.AXIS_X,
                        motionEvent.getPointerId(motionEvent.pointerCount - 1)
                    )
                    Log.e("Values:", value.toString() + axisVal.toString())


                    val anchor = hitResult.createAnchor()
                    val anchorNode = AnchorNode(anchor)
                    anchorNode.setParent(arFragment.arSceneView.scene)

                    val pose = anchor.pose
                    if (pose2.isEmpty()) {
                        pose2.add(pose.tx())
                        pose2.add(pose.ty())
                        pose2.add(pose.tz())
                        val d = getDistanceMeters(pose1, pose2)
                    } else {
                        pose1.clear()
                        pose1.addAll(pose2)
                        pose2.clear()
                        pose2.add(pose.tx())
                        pose2.add(pose.ty())
                        pose2.add(pose.tz())
                        val d = getDistanceMeters(pose1, pose2)
                    }

                    //
                    val transformableNode =
                        TransformableNode(arFragment.transformationSystem).apply {
                            renderable = cubeRenderable
                            setParent(anchorNode)
                            select()
                        }

                    transformableNode.setOnTapListener { _, _ ->

                        if (lastAnchorNode != null) {
                            drawLine(lastAnchorNode!!, anchorNode)
                            lastAnchorNode = anchorNode
                        }

                        transformableNode.select()

                    }

                    drawLine(lastAnchorNode!!, anchorNode)
                    lastAnchorNode = anchorNode

                }
            }

        }

    }

    private fun onClear() {
        val children = ArrayList(arFragment.arSceneView.scene.children)
        for (node in children) {
            if (node is AnchorNode) {
                if (node.anchor != null) {
                    node.anchor!!.detach()
                }
            }
            if (node !is Camera && node !is Sun) {
                node.setParent(null)
            }
        }
        pose1.clear()
        pose2.clear()
        lastAnchorNode = null
        point1 = null
        point2 = null

    }



    private fun getDistanceMeters(pose1: ArrayList<Float>, pose2: ArrayList<Float>): Any {
        val distanceX = pose1[0] - pose2[0]
        val distanceY = pose1[1] - pose2[1]
        val distanceZ = pose1[2] - pose2[2]
        return Math.sqrt(
            (distanceX * distanceX +
                    distanceY * distanceY +
                    distanceZ * distanceZ).toDouble()
        )
    }


    private fun setDrawUI() {
        MaterialFactory.makeTransparentWithColor(this, CUBE_RENDABLE_COLOR)
            .thenAccept { material ->
                cubeRenderable = ShapeFactory.makeSphere(0.015f, Vector3.zero(), material)
                cubeRenderable?.isShadowReceiver = false
                cubeRenderable?.isShadowCaster = false
            }

    }


    @SuppressLint("ObsoleteSdkInt")
    fun checkIsSupportedDeviceOrFinish(activity: Activity): Boolean {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.N) {
            Log.e(TAG, "Sceneform requires Android N or later")
            Toast.makeText(activity, "Sceneform requires Android N or later", Toast.LENGTH_LONG)
                .show()
            activity.finish()
            return false
        }
        val openGlVersionString =
            (activity.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager)
                .deviceConfigurationInfo
                .glEsVersion
        if (java.lang.Double.parseDouble(openGlVersionString) < MIN_OPENGL_VERSION) {
            Log.e(TAG, "Sceneform requires OpenGL ES 3.0 later")
            Toast.makeText(
                applicationContext,
                "Sceneform requires OpenGL ES 3.0 or later",
                Toast.LENGTH_LONG
            ).show()
            activity.finish()
            return false
        }
        return true
    }


    private fun drawLine(
        anchorNodeFirst: AnchorNode,
        anchorNodeSecond: AnchorNode
    ) {

        val point1: Vector3 = anchorNodeFirst.worldPosition
        val point2: Vector3 = anchorNodeSecond.worldPosition

        val difference = Vector3.subtract(point1, point2).scaled(-1F)
        if (difference != Vector3.zero()) {
            val directionFromTopToBottom = difference.normalized()
            val rotationFromAToB = Quaternion.lookRotation(directionFromTopToBottom, Vector3.up())

            // add line
            MaterialFactory.makeOpaqueWithColor(applicationContext, CUBE_RENDABLE_COLOR)
                .thenAccept { material ->

                    val modelRenderable = ShapeFactory.makeCube(
                        Vector3(.01f, .01f, difference.length()),
                        Vector3.zero(),

                        material
                    )


                    val node = Node()
                    node.setParent(anchorNodeSecond)
                    node.renderable = modelRenderable

                    node.worldPosition = Vector3.add(point1, point2).scaled(.5f)
                    node.worldRotation = rotationFromAToB
                }


        }


    }


}