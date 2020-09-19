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
import android.widget.ImageView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.ar.core.Anchor
import com.google.ar.core.HitResult
import com.google.ar.sceneform.AnchorNode
import com.google.ar.sceneform.Camera
import com.google.ar.sceneform.Node
import com.google.ar.sceneform.Sun
import com.google.ar.sceneform.assets.RenderableSource
import com.google.ar.sceneform.collision.Box
import com.google.ar.sceneform.math.Vector3
import com.google.ar.sceneform.rendering.*
import com.google.ar.sceneform.ux.TransformableNode
import com.google.firebase.FirebaseApp
import com.google.firebase.storage.FirebaseStorage
import com.google.firebase.storage.StorageReference
import com.warkiz.widget.IndicatorSeekBar
import com.warkiz.widget.IndicatorStayLayout
import com.warkiz.widget.OnSeekChangeListener
import com.warkiz.widget.SeekParams
import es.dmoral.toasty.Toasty
import java.io.File
import java.io.IOException
import java.text.SimpleDateFormat
import java.util.*

class OpenCameraActivity : AppCompatActivity() {

    //
    val TAG = OpenCameraActivity::class.simpleName
    val MIN_OPENGL_VERSION: Double = 3.0

    //
    var measureSelected: Boolean = false


    private var renderable: Renderable? = null
    private var isSearching = false


    // renderable constants
    val CUBE_RENDABLE_RADIUS = 0.01f
    val CUBE_RENDABLE_COLOR = Color(0F, 255F, 0F, 0F)
    val CUBE_RENDABLE_SQUARE_COLOR = Color(0F, 0.05F, 0F, 0.9F)

    // square related

    lateinit var arFragment: MyArFragment


    private lateinit var box: MeasurmentBox
    private var userMeasurements: BoxMeasurements? = null

    var photoSaver = PhotoSaver(this)
    var videoSaver = VideoRecorder()    // todo fix video recorder

    lateinit var seekBar: IndicatorSeekBar
    lateinit var minus: ImageView
    lateinit var plus: ImageView


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.open_camera)

        if (!checkIsSupportedDeviceOrFinish(this)) {
            return
        }
        configToast()
        setupFireBase()
        setARFragment()

        setBox()
        setARFragmentAction()
        setBottomPanel()
        setUpInfoButton()
        setSeekBar()
    }

    private var isSeeking = false

    private fun configToast() {
        Toasty.Config.getInstance()
            .allowQueue(false) // optional (prevents several Toastys from queuing)
            .apply();
    }

    private fun setUpInfoButton() {
        val infoBtn = findViewById<InfoFAB>(R.id.fab_info)

        findViewById<InfoFAB>(R.id.fab_info).setOnClickListener() {


            when (infoBtn.getStage()) {
                InfoStage.RED -> {
                    messageInfoButtonRedStage()
                }
                InfoStage.YELLOW -> {
                    messageInfoButtonYellowStage()
                }
                InfoStage.GREEN -> {
                    messageInfoButtonGreenStage()
                }
            }

        }

    }

    private fun messageInfoButtonRedStage() {
        val handler = Handler()

        var infoFab = findViewById<InfoFAB>(R.id.fab_info)
        val MESSAGE_1 = "1. " + resources.getString(R.string.red_advise_1)
        val MESSAGE_2 = "2. " + resources.getString(R.string.red_advise_2)
        val MESSAGE_3 = "3. " + resources.getString(R.string.red_advise_3)
        val MESSAGE_4 = "4. " + resources.getString(R.string.red_advise_4)
        val MESSAGE_5 = "5. " + resources.getString(R.string.red_advise_5)
        infoFab.isEnabled = false

        infoMessage(MESSAGE_1, Toast.LENGTH_SHORT)

        handler.postDelayed({
            // xxx
        }, 2000)



        handler.postDelayed({
            infoMessage(MESSAGE_2, Toast.LENGTH_SHORT)
        }, 2000)

        handler.postDelayed({
            infoMessage(MESSAGE_3, Toast.LENGTH_SHORT)
        }, 4000)

        handler.postDelayed({
            infoMessage(MESSAGE_4, Toast.LENGTH_SHORT)
        }, 6000)

        handler.postDelayed({
            infoMessage(MESSAGE_5, Toast.LENGTH_SHORT)
            infoFab.isEnabled = true

        }, 8000)


    }

    private fun messageInfoButtonYellowStage() {
        val handler = Handler()

        val MESSAGE_1 = "1. " + resources.getString(R.string.yellow_advise_1)
        val MESSAGE_2 = "2. " + resources.getString(R.string.yellow_advise_2)
        val MESSAGE_3 = "3. " + resources.getString(R.string.yellow_advise_3)
        val MESSAGE_4 = "4. " + resources.getString(R.string.yellow_advise_4)
        var infoFab = findViewById<InfoFAB>(R.id.fab_info)
        infoFab.isEnabled = false

        infoMessage(MESSAGE_1, Toast.LENGTH_SHORT)

        handler.postDelayed({
            infoMessage(MESSAGE_2, Toast.LENGTH_SHORT)
        }, 2000)

        handler.postDelayed({
            infoMessage(MESSAGE_3, Toast.LENGTH_SHORT)
        }, 4000)

        handler.postDelayed({
            infoMessage(MESSAGE_4, Toast.LENGTH_SHORT)
            infoFab.isEnabled = true

        }, 6000)


    }

    private fun messageInfoButtonGreenStage() {

        val MESSAGE_1 = resources.getString(R.string.yellow_advise_1)

        infoMessage(MESSAGE_1, Toast.LENGTH_SHORT)


    }

    private fun infoMessage(message: String, length: Int) {
        var toast = Toasty.info(
            this,
            message,
            length,
            true
        )

        toast.setGravity(toast.gravity, toast.xOffset, toast.yOffset + 80)
        toast.show()


    }


    private fun setBox() {
        //
        var boxRenderData = BoxRenderData(
            pointRenderableRadius = CUBE_RENDABLE_RADIUS,
            pointRenderableColor = CUBE_RENDABLE_COLOR,
            lineRenderableColor = CUBE_RENDABLE_COLOR,
            areaRenderableColor = CUBE_RENDABLE_SQUARE_COLOR
        )

        //
        var boxInfoCardLayouts = BoxInfoCardLayouts(
            cardLayout = R.layout.distance_card_layout,
            heightCardLayout = R.layout.height_distance_card_layout
        )

        box = MeasurmentBox(
            boxRenderData = boxRenderData,
            boxInfoCardLayouts = boxInfoCardLayouts,
            applicationContext = this,
            arFragment = arFragment
        )

        box.setUI()
    }


    private fun setSeekBar() {


        seekBar = findViewById<IndicatorSeekBar>(R.id.slider)
        seekBar.setIndicatorTextFormat("\${PROGRESS} cm")

        //
        seekBar.visibility = View.GONE

        seekBar.onSeekChangeListener = (object : OnSeekChangeListener {


            override fun onSeeking(seekParams: SeekParams?) {
                if (isSeeking) {
                    box.setBoxHeight(seekParams!!.progress.toFloat())

                }
            }

            override fun onStartTrackingTouch(seekBar: IndicatorSeekBar?) {
                isSeeking = true

            }

            override fun onStopTrackingTouch(seekBar: IndicatorSeekBar?) {
                isSeeking = false

            }


        })


        var minus = findViewById<ImageView>(R.id.dec_height)
        var plus = findViewById<ImageView>(R.id.inc_height)

        minus.visibility = View.GONE
        plus.visibility = View.GONE


        minus.setOnClickListener {
            box.setBoxHeight(seekBar.progress.toFloat() - 1)
            this.seekBar.setProgress((seekBar.progress - 1).toFloat())

        }
        minus.setOnLongClickListener {
            box.setBoxHeight(seekBar.progress.toFloat() - 1)
            this.seekBar.setProgress((seekBar.progress - 1).toFloat())
            true
        }

        plus.setOnClickListener {
            box.setBoxHeight(seekBar.progress.toFloat() + 1)
            this.seekBar.setProgress((seekBar.progress + 1).toFloat())

        }
        plus.setOnLongClickListener {
            box.setBoxHeight(seekBar.progress.toFloat() + 1)
            this.seekBar.setProgress((seekBar.progress + 1).toFloat())
            true
        }

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

                //


            } else if (measureSelected && box.getMeasurementStage() == MeasurementStage.HEIGHT) {
                measureSelected = false
                //  onClear()

                vibrate()
                changeIconAnimated(measurement, 180f, R.drawable.ruler_green_32)
                clear.visibility = View.GONE

                userMeasurements = box.getBoxMeasurements()
                showShapedMeasuredDialog()


                // xxx
                // xxx
                var infoBtn = findViewById<InfoFAB>(R.id.fab_info)
                changeInfoStageToGreen()
            }


        }

    }


    @SuppressLint("ResourceAsColor")
    fun changeInfoStageToRed() {
        var infoFab = findViewById<InfoFAB>(R.id.fab_info)


        infoFab.setStage(InfoStage.RED)
        infoFab.setRippleColor(R.color.info_ripple_red)
        infoFab.setBackgroundColor(R.color.info_background_red)
        infoFab.setBackgroundTintList(getResources().getColorStateList(R.color.info_background_red));

        infoFab.setImageResource(R.drawable.ic_info_first_stage)


    }

    @SuppressLint("ResourceAsColor")
    fun changeInfoStageToYellow() {
        var infoFab = findViewById<InfoFAB>(R.id.fab_info)


        infoFab.setStage(InfoStage.YELLOW)
        infoFab.setRippleColor(R.color.info_ripple_yellow)
        infoFab.setBackgroundColor(R.color.info_background_yellow)
        infoFab.setBackgroundTintList(getResources().getColorStateList(R.color.info_background_yellow));
        infoFab.setImageResource(R.drawable.ic_info_second_stage)


    }

    @SuppressLint("ResourceAsColor")
    private fun changeInfoStageToGreen() {
        var infoFab = findViewById<InfoFAB>(R.id.fab_info)


        infoFab.setStage(InfoStage.GREEN)
        infoFab.setRippleColor(R.color.info_ripple_green)
        infoFab.setBackgroundColor(R.color.info_background_green)
        infoFab.setBackgroundTintList(getResources().getColorStateList(R.color.info_background_green));

        infoFab.setImageResource(R.drawable.ic_info_third_stage)


    }

    private fun showShapedMeasuredDialog() {
        var toast = Toasty.success(this, "Shape was measured!", Toast.LENGTH_SHORT, true)

        toast.setGravity(toast.gravity, toast.xOffset, toast.yOffset + 70)

        toast.show();
    }

    private fun showNoShapeWashMeasuredDialog() {
        var toast = Toasty.error(this, "Error:no shape was measured", Toast.LENGTH_SHORT, true)
        Log.d("toast.yOffset", toast.yOffset.toString())
        toast.setGravity(toast.gravity, toast.xOffset, toast.yOffset + 70)
        toast.show()

    }


    // TODO:: finish it
    private fun searchItem() {
        // search
        //TODO:


        isSearching = true


        // open activity


        // close activity
        var modelPath = "models/desk_1_1.glb"

        getFireBaseModel(
            pathString = modelPath,
            modelWidth = userMeasurements!!.boxWidth,
            modelLength = userMeasurements!!.boxLength,
            modelHeight = (userMeasurements!!.boxHeight / 100f)
        )


        isSearching = false

    }

    private fun setupSearchButton() {

        val search: FloatingActionButton = findViewById(R.id.fab_search)
        search.setOnClickListener { view ->

            if (userMeasurements == null) {
                showNoShapeWashMeasuredDialog()
            } else {
                searchItem()
            }


        }


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
        findViewById<IndicatorStayLayout>(R.id.indicator_container).visibility = View.GONE
        seekBar.setProgress(0f)

        seekBar.visibility = View.GONE
        minus.visibility = View.GONE
        plus.visibility = View.GONE
    }

    internal fun onClear2() {
        val children = ArrayList(arFragment.arSceneView.scene.children)

        for (node in children) {
            if (node.parent != furnitureAnchor) {

                if (node is AnchorNode) {
                    if (node.anchor != null) {
                        node.anchor!!.detach()
                    }

                }
                if (node !is Camera && node !is Sun) {
                    node.setParent(null)
                }
            } else {
                Log.d("wtf", "")
            }
        }
        box.clear()
        findViewById<IndicatorStayLayout>(R.id.indicator_container).visibility = View.GONE
        seekBar.setProgress(0f)

        seekBar.visibility = View.GONE
        minus.visibility = View.GONE
        plus.visibility = View.GONE
    }

    private fun setARFragment() {
        arFragment = supportFragmentManager.findFragmentById(R.id.fragment) as MyArFragment
        arFragment.activity = this
        arFragment.animationLayout = this.findViewById(R.id.animation)

    }


    var furnitureAnchor: Anchor? = null

    private fun setARFragmentAction() {
        minus = findViewById<ImageView>(R.id.dec_height)
        plus = findViewById<ImageView>(R.id.inc_height)

        // test

        arFragment.setOnTapArPlaneListener { hitResult, plane, motionEvent ->

            if (!isSearching) {
                if (measureSelected && box.getMeasurementStage() < MeasurementStage.LENGTH) {

                    val anchorNode = createAnchorNode(hitResult)


                    if (box.getAnchorListSize() == 0) {
                        furnitureAnchor = hitResult.createAnchor()
                    }


                    box.addAnchorNode(anchorNode)

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
                        minus.visibility = View.VISIBLE
                        plus.visibility = View.VISIBLE
                        findViewById<IndicatorStayLayout>(R.id.indicator_container).visibility =
                            View.VISIBLE


                    }

                }
            }

        }

        box.arFragment = arFragment

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


    private fun setupFireBase() {
        FirebaseApp.initializeApp(this);
    }


    private fun getFireBaseModel(
        pathString: String,
        modelLength: Float,
        modelWidth: Float,
        modelHeight: Float
    ) {

        val storage: FirebaseStorage = FirebaseStorage.getInstance()
        val modelRef: StorageReference = storage.getReference().child(pathString)
        try {
            val file = File.createTempFile("out", "glb")
            modelRef.getFile(file).addOnSuccessListener {

                buildModel(file, modelLength, modelWidth, modelHeight)

            }
        } catch (e: IOException) {
            e.printStackTrace()
        }

    }

    private fun buildModel(file: File, modelLength: Float, modelWidth: Float, modelHeight: Float) {
        val renderableSource = RenderableSource
            .builder()
            .setSource(this, Uri.parse(file.path), RenderableSource.SourceType.GLB)
            .setRecenterMode(RenderableSource.RecenterMode.ROOT)

            .build()


        ModelRenderable
            .builder()
            .setSource(this, renderableSource)
            .setRegistryId(file.path)

            .build()
            .thenAccept { modelRenderable: ModelRenderable ->
                renderable = modelRenderable

                Toast.makeText(this, "Model built", Toast.LENGTH_SHORT).show()

                // create anchor node
                val anchorNode = AnchorNode(furnitureAnchor)

                // create node
                val node = TransformableNode(arFragment.transformationSystem)
                node.scaleController.isEnabled = false
                node.getTranslationController().setEnabled(false);
                node.setParent(anchorNode)
                node.renderable = modelRenderable
                node.worldPosition = box.worldLocation()
                node.worldRotation = box.getRotation()


                val boundingBox: Box = modelRenderable.getCollisionShape() as Box
                val renderableSize: Vector3 = boundingBox.getSize()

                // update world scale
                node.worldScale = Vector3(
                    modelWidth * 1 / renderableSize.x,
                    modelHeight * 1 / renderableSize.y,
                    modelLength * 1 / renderableSize.z
                )
                onClear2()

                arFragment.arSceneView.scene.addChild(anchorNode)
            }


    }

}