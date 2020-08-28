package com.huji.couchmirage

import android.annotation.SuppressLint
import android.app.Activity
import android.app.ActivityManager
import android.content.Context
import android.os.Build
import android.os.Bundle
import android.os.VibrationEffect
import android.os.Vibrator
import android.util.Log
import android.view.View
import android.widget.SeekBar
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.ar.core.HitResult
import com.google.ar.sceneform.AnchorNode
import com.google.ar.sceneform.Camera
import com.google.ar.sceneform.Sun
import com.google.ar.sceneform.rendering.*
import com.google.ar.sceneform.ux.ArFragment
import com.warkiz.widget.IndicatorSeekBar
import com.warkiz.widget.OnSeekChangeListener
import com.warkiz.widget.SeekParams
import java.util.*

class OpenCameraActivity : AppCompatActivity() {

    //
    val TAG = OpenCameraActivity::class.simpleName
    val MIN_OPENGL_VERSION: Double = 3.0

    //
    var measureSelected: Boolean = false

    //
    var lastAnchorNode: AnchorNode? = null

    // renderable
    var cubeRenderable: ModelRenderable? = null


    // renderable constants
    val CUBE_RENDABLE_RADIUS = 0.0075f
    val CUBE_RENDABLE_COLOR = Color(0F, 255F, 0F)
    val CUBE_RENDABLE_SQUARE_COLOR = Color(0F, 0F, 0F, 0F)

    // square related

    lateinit var arFragment: ArFragment

    val box = Box(
        CUBE_RENDABLE_RADIUS,
        CUBE_RENDABLE_COLOR,
        CUBE_RENDABLE_COLOR,
        CUBE_RENDABLE_SQUARE_COLOR,
        R.layout.distance_card_layout,
        this
    )


    companion object {

    }


    var photoSaver = PhotoSaver(this)
    var videoSaver = VideoRecorder(this)


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.open_camera)

        if (!checkIsSupportedDeviceOrFinish(this)) {
            return
        }

        box.setUI()
        setBottomPanel()
        setSeekBar()
        setARFragment()

    }

    lateinit var seekBar: IndicatorSeekBar

    private fun setSeekBar() {
        seekBar = findViewById<IndicatorSeekBar>(R.id.slider)
        seekBar.setIndicatorTextFormat("\${PROGRESS} cm")

        //
        seekBar.visibility = View.GONE

        seekBar.onSeekChangeListener = (object : SeekBar.OnSeekBarChangeListener,
            OnSeekChangeListener {


            override fun onSeeking(seekParams: SeekParams?) {
                box.setBoxHeight(seekParams!!.progress.toFloat())
                //   TODO("Not yet implemented")
            }

            override fun onStartTrackingTouch(seekBar: IndicatorSeekBar?) {
//                TODO("Not yet implemented")

            }

            override fun onStopTrackingTouch(seekBar: IndicatorSeekBar?) {
                //    TODO("Not yet implemented")

            }

            override fun onProgressChanged(seekBar: SeekBar?, progress: Int, fromUser: Boolean) {
                //   TODO("Not yet implemented")

            }

            override fun onStartTrackingTouch(seekBar: SeekBar?) {

                //  TODO("Not yet implemented")
            }

            override fun onStopTrackingTouch(seekBar: SeekBar?) {

                //    TODO("Not yet implemented")
            }

        })


    }

    private fun changeIconAnimated(measurement: FloatingActionButton, rotation: Float, icon: Int) {
        //Rise
        measurement.animate()
            .rotationBy(rotation)
            .setDuration(100)
            .scaleX(1.1f) //Scaling to 110%
            .scaleY(1.1f)
            .withEndAction(Runnable {
                measurement.setImageResource(icon)

                //Shrink Animation
                measurement.animate()
                    .rotationBy(rotation)
                    .setDuration(100)
                    .scaleX(1f) //Scaling back to what it was
                    .scaleY(1f)
                    .start()

            })
            .start()


    }

    private fun vibrate() {

        // vibrate phone
        val vibrator: Vibrator =
            getSystemService(Context.VIBRATOR_SERVICE) as Vibrator
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            vibrator.vibrate(
                VibrationEffect.createOneShot(
                    500,
                    VibrationEffect.DEFAULT_AMPLITUDE
                )
            )
        } else {
            vibrator.vibrate(500)
        }

    }

    private fun setBottomPanel() {
        var rotation = 180f

        val measurement: FloatingActionButton = findViewById(R.id.fab_measurement)
        measurement.setOnClickListener { view ->
            vibrate()

            // todo
            if (!measureSelected) {
                measureSelected = true
                onClear()

                if (box.getMeasurementStage() == MeasurementStage.HEIGHT) {
                    vibrate()

                }
                changeIconAnimated(measurement, 180f, R.drawable.done_green_32)

            } else if (measureSelected && box.getMeasurementStage() == MeasurementStage.HEIGHT) {
                measureSelected = false
                onClear()

                vibrate()
                changeIconAnimated(measurement, 180f, R.drawable.ruler_green_32)

            }


        }


        val search: View = findViewById(R.id.fab_search)
        search.setOnClickListener { view ->
        }

        val camera: View = findViewById(R.id.fab_camera)
        camera.setOnClickListener { view ->


            photoSaver.takePhoto(arFragment.arSceneView)
        }

        camera.setOnLongClickListener() { view ->
            videoSaver.toggleRecordingState()

            true
        }


        search.isEnabled = false


    }

    internal fun onClear() {
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
        lastAnchorNode = null
        box.clear()
        seekBar.visibility = View.GONE
    }


    private fun setARFragment() {

        arFragment = supportFragmentManager.findFragmentById(R.id.fragment) as ArFragment
        arFragment.setOnTapArPlaneListener { hitResult, plane, motionEvent ->


            if (measureSelected && box.getMeasurementStage() < MeasurementStage.LENGTH) {

                val anchorNode = createAnchorNode(hitResult)
                box.addAnchorNode(anchorNode, arFragment.transformationSystem)

                if (box.getAnchorListSize() < 3) {
                    box.addVertex(anchorNode)
                }

                if (box.getMeasurementStage() == MeasurementStage.WIDTH) {
                    box.drawLine(box.getAnchorNode(box.PT_1), box.getAnchorNode(box.PT_2))
                }

                if (box.getAnchorListSize() == 3) {
                    // TODO:: delete line
                    box.drawSquare()



                    seekBar.visibility = View.VISIBLE
                }

            }


        }

    }

    private fun createAnchorNode(hitResult: HitResult): AnchorNode {
        val anchor = hitResult.createAnchor()
        val anchorNode = AnchorNode(anchor)
        anchorNode.setParent(arFragment.arSceneView.scene)

        return anchorNode

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


}