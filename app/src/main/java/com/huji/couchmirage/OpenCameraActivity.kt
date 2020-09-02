package com.huji.couchmirage

import android.Manifest
import android.annotation.SuppressLint
import android.app.Activity
import android.app.ActivityManager
import android.content.ContentValues
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.media.CamcorderProfile
import android.net.Uri
import android.os.*
import android.provider.MediaStore
import android.provider.Settings
import android.util.Log
import android.view.View
import android.widget.SeekBar
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.ar.core.HitResult
import com.google.ar.sceneform.AnchorNode
import com.google.ar.sceneform.Camera
import com.google.ar.sceneform.Sun
import com.google.ar.sceneform.rendering.Color
import com.google.ar.sceneform.rendering.ModelRenderable
import com.google.ar.sceneform.ux.ArFragment
import com.warkiz.widget.IndicatorSeekBar
import com.warkiz.widget.OnSeekChangeListener
import com.warkiz.widget.SeekParams
import java.text.SimpleDateFormat
import java.util.*

class OpenCameraActivity : AppCompatActivity() {

    //
    val TAG = OpenCameraActivity::class.simpleName
    val MIN_OPENGL_VERSION: Double = 3.0

    //
    var measureSelected: Boolean = false

    //


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

    var photoSaver = PhotoSaver(this)
    var videoSaver = VideoRecorder()    // todo fix video recorder

    lateinit var seekBar: IndicatorSeekBar

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.open_camera)

        if (!checkIsSupportedDeviceOrFinish(this)) {
            return
        }

        box.setUI()
        setARFragment()

        setBottomPanel()
        setSeekBar()

    }


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

    // todo:: model loader


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


        setupRulerButton()
        setupClearButton()
        setupSearchButton()

        setupCameraButton()


    }

    private fun setupCameraButton() {

        val camera: View = findViewById(R.id.fab_camera)

        // take picture
        camera.setOnClickListener { view ->

            // https://github.com/owahltinez/androidx-camera-activity/tree/master/sample/src/main
            if (!videoSaver.isRecording) {
                photoSaver.takePhoto(arFragment.arSceneView)
            } else {
                toggleRecording()

            }
        }

        // take video
        // Initialize the VideoRecorder.

        // Initialize the VideoRecorder.
        videoSaver = VideoRecorder(this)
        val orientation = resources.configuration.orientation
        videoSaver.setVideoQuality(CamcorderProfile.QUALITY_2160P, orientation)
        videoSaver.setSceneView(arFragment.arSceneView)

        camera.setOnLongClickListener() { view ->
            toggleRecording()
            true

        }

    }

    fun hasWritePermission(): Boolean {
        return (ActivityCompat.checkSelfPermission(
            arFragment.requireActivity(), Manifest.permission.WRITE_EXTERNAL_STORAGE
        )
                === PackageManager.PERMISSION_GRANTED)
    }

    /** Launch Application Setting to grant permissions.  */
    fun launchPermissionSettings() {
        val intent = Intent()
        intent.action = Settings.ACTION_APPLICATION_DETAILS_SETTINGS
        intent.data = Uri.fromParts(
            "package",
            arFragment.requireActivity().getPackageName(),
            null
        )
        arFragment.requireActivity().startActivity(intent)
    }

    /*
   * Used as a handler for onClick, so the signature must match onClickListener.
   */
    private fun toggleRecording() {
        val recordButton: FloatingActionButton =
            findViewById(R.id.fab_camera) as FloatingActionButton

        if (!hasWritePermission()) {

            Toast.makeText(
                this,
                "Video recording requires the WRITE_EXTERNAL_STORAGE permission",
                Toast.LENGTH_LONG
            )
                .show()
            launchPermissionSettings()
            return
        }
        val recording: Boolean = videoSaver.onToggleRecord()
        if (recording) {

            recordButton.setImageResource(R.drawable.ic_videocam)
        } else {
            recordButton.setImageResource(R.drawable.ic_camera)
            vibrate()

            val videoPath: String = videoSaver.getVideoPath().getAbsolutePath()
            Toast.makeText(this, "Video saved: $videoPath", Toast.LENGTH_SHORT).show()


            // Send  notification of updated content.


            val date = SimpleDateFormat("yyyyMMddHHmmss", Locale.getDefault()).format(Date())

            var name = getExternalFilesDir(Environment.DIRECTORY_PICTURES)?.absolutePath +
                    "/${date}_screenshot.jpg"

            val values = ContentValues()
            values.put(MediaStore.Video.Media.TITLE, "Sceneform Video")
            values.put(MediaStore.Video.Media.MIME_TYPE, "video/mp4")
            values.put(MediaStore.Video.Media.DATA, videoPath)
            contentResolver.insert(MediaStore.Video.Media.EXTERNAL_CONTENT_URI, values)
        }
    }

    private fun setupRulerButton() {
        val clear: View = findViewById(R.id.clear)

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
                clear.visibility = View.VISIBLE

            } else if (measureSelected && box.getMeasurementStage() == MeasurementStage.HEIGHT) {
                measureSelected = false
                onClear()

                vibrate()
                changeIconAnimated(measurement, 180f, R.drawable.ruler_green_32)
                clear.visibility = View.GONE


            }


        }

    }

    private fun setupSearchButton() {
        val search: View = findViewById(R.id.fab_search)
        search.setOnClickListener { view ->
        }

        search.isEnabled = false

    }

    private fun setupClearButton() {
        val clear: View = findViewById(R.id.clear)
        val measurement: FloatingActionButton = findViewById(R.id.fab_measurement)

        clear.setOnClickListener { view ->
            onClear()

            if (measureSelected) {
                measureSelected = false
                changeIconAnimated(measurement, 180f, R.drawable.ruler_green_32)
                clear.visibility = View.GONE

            }


        }

        clear.visibility = View.GONE

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