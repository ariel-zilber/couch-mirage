package com.huji.couchmirage

import android.Manifest
import android.annotation.SuppressLint
import android.app.Activity
import android.app.ActivityManager
import android.content.*
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
import com.google.ar.sceneform.Sun
import com.google.ar.sceneform.assets.RenderableSource
import com.google.ar.sceneform.collision.Box
import com.google.ar.sceneform.math.Vector3
import com.google.ar.sceneform.rendering.Color
import com.google.ar.sceneform.rendering.ModelRenderable
import com.google.ar.sceneform.rendering.Renderable
import com.google.ar.sceneform.ux.TransformableNode
import com.google.firebase.FirebaseApp
import com.huji.couchmirage.Help.HelpActivity
import com.huji.couchmirage.ar.MyArFragment
import com.huji.couchmirage.catalog.CatalogFrontActivity
import com.huji.couchmirage.greetings.GreetingActivity
import com.huji.couchmirage.greetings.SquareImageButton
import com.huji.couchmirage.utils.PhotoSaver
import com.huji.couchmirage.utils.VideoRecorder
import com.warkiz.widget.IndicatorSeekBar
import com.warkiz.widget.IndicatorStayLayout
import com.warkiz.widget.OnSeekChangeListener
import com.warkiz.widget.SeekParams
import es.dmoral.toasty.Toasty
import java.io.File
import java.util.*

/**
 * Camera activity
 */
class OpenCameraActivity : AppCompatActivity() {
    val PREFS_FILE = "CouchMirageMeasurmentFile"
    var prefs: SharedPreferences? = null

    //
    val TAG = OpenCameraActivity::class.simpleName
    val MIN_OPENGL_VERSION: Double = 3.0


    // renderable constants
    val CUBE_RENDABLE_RADIUS = 0.01f
    val CUBE_RENDABLE_COLOR = Color(0F, 255F, 0F, 0F)
    val CUBE_RENDABLE_SQUARE_COLOR = Color(0F, 0.05F, 0F, 0.9F)

    /* Represents whenever currently measuring the box */
    var measureSelected: Boolean = false

    /* Represents whenever a 3d model was found */
    private var isModelFound = false

    // ar fragment related
    lateinit var arFragment: MyArFragment

    // seekbar related
    private var isSeeking = false
    lateinit var seekBar: IndicatorSeekBar
    lateinit var minusButton: ImageView
    lateinit var plusButton: ImageView

    // measurement related
    private lateinit var box: MeasurementBox
    private var userMeasurements: BoxMeasurements? = null

    // furniture module related
    private var furnitureRenderable: Renderable? = null
    var furnitureAnchor: Anchor? = null
    var modelLength: Float = 0f
    var modelWidth: Float = 0f
    var modelHeight: Float = 0f
    var file: File? = null

    // media saves

    /** Used to save photo of the ar scene **/
    var photoSaver = PhotoSaver(this)

    /** Used to save video of the ar scene **/
    var videoSaver = VideoRecorder()

    // recievers

    private val receiver: BroadcastReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context, intent: Intent) {
            val action = intent.getAction()

            if (action == "show_model") {
                modelLength = intent.extras!!.get("model_length") as Float
                modelWidth = intent.extras!!.get("model_width") as Float
                modelHeight = intent.extras!!.get("model_height") as Float
                file = intent.extras!!.get("file") as File
                isModelFound = true

                // rescale
                modelLength = modelLength / 100f
                modelWidth = modelWidth / 100f
                modelHeight = modelHeight / 100f
                onClear()

                //
                buildModel(file!!)


            }
        }
    }

    /***
     * Init the preference file
     */
    private fun setupSharedPrefs() {
        prefs = getSharedPreferences(PREFS_FILE, 0)

    }

    /***
     * When starting the app for the first time shows the user information abot the app
     */
    private fun startGreetingActivity() {

        var previouslyStarted =
            prefs!!.getBoolean("first_time", false)

        val intent = Intent(application, GreetingActivity::class.java)


        if (!previouslyStarted) {
            val edit = prefs!!.edit()
            edit.putBoolean("first_time", java.lang.Boolean.TRUE)

            overridePendingTransition(R.anim.fade_in, R.anim.fade_out);

            startActivity(intent)

            edit.commit()
        }
    }

    /***
     * Initialzie the help button
     */
    private fun setupHelpButton() {
        val help: SquareImageButton = findViewById(R.id.help_btn)
        help.setOnClickListener { view ->

            val intent = Intent(this, HelpActivity::class.java)

            startActivity(intent)

        }
    }


    // lifecycle methods

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.open_camera)
        setupSharedPrefs()
        startGreetingActivity()

        if (!checkIsSupportedDeviceOrFinish(this)) {
            return
        }

        // setup
        setupToast()
        setupFireBase()
        setARFragment()
        configureReceiver()

        setupBox()
        setARFragmentAction()
        setupRulerButton()
        setupClearButton()
        setupSearchButton()
        setupCameraButton()
        setupUpInfoButton()
        setupHelpButton()
        setupSeekBar()
    }

    override fun onResume() {
        super.onResume()

    }

    override fun onDestroy() {
        super.onDestroy()

        unregisterReceiver(receiver)
    }


    //


    // setup methods


    /***
     * Inits the info button
     */
    private fun setupUpInfoButton() {
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

    /***
     * Init's the setup box
     */
    private fun setupBox() {
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

        box = MeasurementBox(
            boxRenderData = boxRenderData,
            boxInfoCardLayouts = boxInfoCardLayouts,
            applicationContext = this,
            arFragment = arFragment
        )

        box.setUI()
    }

    /**
     * Init's the seekbar
     */
    private fun setupSeekBar() {


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

    /**
     * Inits the camera button
     */
    private fun setupCameraButton() {

        val camera: View = findViewById(R.id.fab_camera)

        // take picture
        camera.setOnClickListener { view ->

            if (!videoSaver.isRecording) {
                photoSaver.takePhoto(arFragment.arSceneView)
            } else {
                toggleRecording()

            }
        }

        // take video

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

    /*
   * Used as a handler for onClick, so the signature must match onClickListener.
   */
    private fun setupRulerButton() {
        val clear: View = findViewById(R.id.clear)

        val measurement: FloatingActionButton = findViewById(R.id.fab_measurement)
        measurement.setOnClickListener { view ->
            vibrate()
            var infoFab = findViewById<InfoFAB>(R.id.fab_info)


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

                vibrate()
                changeIconAnimated(measurement, 180f, R.drawable.ruler_green_32)
                // clear.visibility = View.GONE

                userMeasurements = box.getBoxMeasurements()
                showShapedMeasuredDialog()

                //
                seekBar.visibility = View.GONE
                minusButton.visibility = View.GONE
                plusButton.visibility = View.GONE

                findViewById<IndicatorStayLayout>(R.id.indicator_container).visibility =
                    View.GONE

                changeInfoStageToGreen()
            }


        }

    }

    /***
     * Inits hte search button
     */
    private fun setupSearchButton() {

        val search: FloatingActionButton = findViewById(R.id.fab_search)
        search.setOnClickListener { view ->
            var INFINITY = 1000000000f

            //
            if (!measureSelected) {


                if (userMeasurements == null) {
                    userMeasurements = BoxMeasurements(INFINITY, INFINITY, INFINITY)
                }

                //

                openSearchDialog()
            } else {
                showErrorMeasuredDialog()
            }


        }
    }

    /**
     * Inits the clear button
     */
    private fun setupClearButton() {
        val clear: View = findViewById(R.id.clear)
        val measurement: FloatingActionButton = findViewById(R.id.fab_measurement)

        clear.setOnClickListener { view ->
            onClear()

            if (measureSelected) {
                measureSelected = false
                changeIconAnimated(measurement, 180f, R.drawable.ruler_green_32)
            }
            clear.visibility = View.GONE
        }

        clear.visibility = View.GONE

    }

    /**
     * Inits firebase
     */
    private fun setupFireBase() {
        FirebaseApp.initializeApp(this);
    }

    /**
     * inits toast
     */
    private fun setupToast() {
        Toasty.Config.getInstance()
            .allowQueue(false) // optional (prevents several Toastys from queuing)
            .apply();
    }

    /***
     * Inits the ar fragment
     */
    private fun setARFragment() {
        arFragment = supportFragmentManager.findFragmentById(R.id.fragment) as MyArFragment
        arFragment.cameraActivity = this
        arFragment.animationLayout = this.findViewById(R.id.animation)

    }

    /**
     * Inits the user actions on the arfragment
     */
    private fun setARFragmentAction() {
        minusButton = findViewById<ImageView>(R.id.dec_height)
        plusButton = findViewById<ImageView>(R.id.inc_height)

        // test

        arFragment.setOnTapArPlaneListener { hitResult, plane, motionEvent ->

            if (!isModelFound) {
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
                        box.drawLine(
                            box.getAnchorNode(MeasurementBox.PT_1),
                            box.getAnchorNode(MeasurementBox.PT_2)
                        )
                    }

                    if (box.getAnchorListSize() == 3) {
                        // TODO:: delete line
                        box.drawSquare()



                        seekBar.visibility = View.VISIBLE
                        minusButton.visibility = View.VISIBLE
                        plusButton.visibility = View.VISIBLE
                        findViewById<IndicatorStayLayout>(R.id.indicator_container).visibility =
                            View.VISIBLE


                    }

                }
            } else {

                // create anchor node
                val anchorNode = AnchorNode(hitResult.createAnchor())

                // create node
                val node = TransformableNode(arFragment.transformationSystem)
                node.scaleController.isEnabled = false

                node.getTranslationController().setEnabled(true);
                node.rotationController.setEnabled(true);

                node.setParent(anchorNode)
                node.renderable = furnitureRenderable


                val boundingBox: Box = furnitureRenderable!!.getCollisionShape() as Box
                val renderableSize: Vector3 = boundingBox.getSize()

                // update world scale
                node.worldScale = Vector3(
                    modelWidth * 1 / renderableSize.x,
                    modelHeight * 1 / renderableSize.y,
                    modelLength * 1 / renderableSize.z
                )

                arFragment.arSceneView.scene.addChild(anchorNode)
                isModelFound = false

                // clear button
                val clear: View = findViewById(R.id.clear)
                clear.visibility = View.VISIBLE

                //
                changeInfoStageToGreen()
            }

        }

        box.arFragment = arFragment

    }


    /**
     * Setups the receiver
     */
    private fun configureReceiver() {

        registerReceiver(
            receiver, IntentFilter("show_model")
        );
    }


    /***
     * Vibeates the phone
     */
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

    /***
     * Changes the icon
     */
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

    /***
     * Toggles recording mode
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


            val values = ContentValues()
            values.put(MediaStore.Video.Media.TITLE, "Sceneform Video")
            values.put(MediaStore.Video.Media.MIME_TYPE, "video/mp4")
            values.put(MediaStore.Video.Media.DATA, videoPath)
            contentResolver.insert(MediaStore.Video.Media.EXTERNAL_CONTENT_URI, values)
        }
    }

    /***
     * Displays message to user
     */
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

    /***
     * Cheks writing permission
     */
    fun hasWritePermission(): Boolean {
        return (ActivityCompat.checkSelfPermission(
            arFragment.requireActivity(), Manifest.permission.WRITE_EXTERNAL_STORAGE
        )
                === PackageManager.PERMISSION_GRANTED)
    }

    /**
     *  Launch Application Setting to grant permissions.
     */
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

    /**
     * Info button is found in 3 stages(red,yellow,green)
     * Changes mode to red stage
     */
    @SuppressLint("ResourceAsColor")
    fun changeInfoStageToRed() {
        var infoFab = findViewById<InfoFAB>(R.id.fab_info)


        infoFab.setStage(InfoStage.RED)
        infoFab.setRippleColor(R.color.info_ripple_red)
        infoFab.setBackgroundColor(R.color.info_background_red)
        infoFab.setBackgroundTintList(getResources().getColorStateList(R.color.info_background_red));

        infoFab.setImageResource(R.drawable.ic_info_first_stage)


    }

    /**
     * Displays message in red stage
     */
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

    /**
     * Info button is found in 3 stages(red,yellow,green)
     * Changes mode to yellow stage
     */
    @SuppressLint("ResourceAsColor")
    fun changeInfoStageToYellow() {
        var infoFab = findViewById<InfoFAB>(R.id.fab_info)


        infoFab.setStage(InfoStage.YELLOW)
        infoFab.setRippleColor(R.color.info_ripple_yellow)
        infoFab.setBackgroundColor(R.color.info_background_yellow)
        infoFab.setBackgroundTintList(getResources().getColorStateList(R.color.info_background_yellow));
        infoFab.setImageResource(R.drawable.ic_info_second_stage)


    }

    /**
     * Displays message in yellow stage
     */
    private fun messageInfoButtonYellowStage() {
        val handler = Handler()

        val MESSAGE_1 = "1. " + resources.getString(R.string.yellow_advise_1)
        val MESSAGE_2 = "2. " + resources.getString(R.string.yellow_advise_2)
        val MESSAGE_3 = "3. " + resources.getString(R.string.yellow_advise_3)
        val MESSAGE_4 = "4. " + resources.getString(R.string.yellow_advise_4)
        val MESSAGE_5 = "5. " + resources.getString(R.string.yellow_advise_5)

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

        handler.postDelayed({
            infoMessage(MESSAGE_5, Toast.LENGTH_SHORT)
            infoFab.isEnabled = true

        }, 8000)


    }

    /**
     * Info button is found in 3 stages(red,yellow,green)
     * Changes mode to green stage
     */
    @SuppressLint("ResourceAsColor")
    private fun changeInfoStageToGreen() {
        var infoFab = findViewById<InfoFAB>(R.id.fab_info)


        infoFab.setStage(InfoStage.GREEN)
        infoFab.setRippleColor(R.color.info_ripple_green)
        infoFab.setBackgroundColor(R.color.info_background_green)
        infoFab.setBackgroundTintList(getResources().getColorStateList(R.color.info_background_green));

        infoFab.setImageResource(R.drawable.ic_info_third_stage)


    }

    /**
     * Displays message in green stage
     */
    private fun messageInfoButtonGreenStage() {
        val MESSAGE_1 = resources.getString(R.string.green_advise_1)
        val MESSAGE_2 = resources.getString(R.string.green_advise_2)

        if (furnitureRenderable == null) {
            infoMessage(MESSAGE_1, Toast.LENGTH_SHORT)

        } else {
            infoMessage(MESSAGE_2, Toast.LENGTH_SHORT)

        }
    }

    /**
     * Displays   message when no shape was measured
     */
    private fun showShapedMeasuredDialog() {
        var toast = Toasty.success(this, "Shape was measured!", Toast.LENGTH_SHORT, true)

        toast.setGravity(toast.gravity, toast.xOffset, toast.yOffset + 70)
        toast.show();
    }

    /***
     *  Displays an error message
     */
    private fun showErrorMeasuredDialog() {
        var toast = Toasty.error(
            this, "Error:please finish measure",
            Toast.LENGTH_SHORT, true
        )

        toast.setGravity(toast.gravity, toast.xOffset, toast.yOffset + 70)
        toast.show();
    }

    // item catalog related methods

    /**
     * Open furniture catalog
     */
    private fun openSearchDialog() {
        val intent = Intent(this, CatalogFrontActivity::class.java)
        //

        var measurement = BoxMeasurements(
            boxWidth = userMeasurements!!.boxWidth * 100f,
            boxLength = userMeasurements!!.boxLength * 100f,
            boxHeight = userMeasurements!!.boxHeight


        )

        intent.putExtra("USER_MEASUREMENTS", measurement);

        startActivity(intent)
    }

    // clear methods

    /***
     * Clears all the nodes appearing on the screen
     *
     */
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
        box.clear()
        findViewById<IndicatorStayLayout>(R.id.indicator_container).visibility = View.GONE
        seekBar.setProgress(0f)

        //
        changeInfoStageToYellow()

        //
        seekBar.visibility = View.GONE
        minusButton.visibility = View.GONE
        plusButton.visibility = View.GONE
        userMeasurements = null
    }

    /***
     *
     */
    private fun onClearMeasurementBox() {
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
        minusButton.visibility = View.GONE
        plusButton.visibility = View.GONE
    }

    // arcore plane related methods

    /**
     * Creates achor node
     */
    private fun createAnchorNode(hitResult: HitResult): AnchorNode {
        val anchor = hitResult.createAnchor()
        val anchorNode = AnchorNode(anchor)
        anchorNode.setParent(arFragment.arSceneView.scene)

        return anchorNode

    }

    // fire base related

    /***
     * Builds the model
     */
    private fun buildModel(file: File) {
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
                furnitureRenderable = modelRenderable
                onClearMeasurementBox()

                infoMessage("Please place the model", Toast.LENGTH_SHORT)

//
            }


    }

    // dependency check
    @SuppressLint("ObsoleteSdkInt")
    private fun checkIsSupportedDeviceOrFinish(activity: Activity): Boolean {
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