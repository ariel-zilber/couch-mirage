package com.huji.couchmirage.catalog

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.text.Html
import android.transition.AutoTransition
import android.transition.TransitionManager
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.constraintlayout.widget.ConstraintLayout
import com.denzcoskun.imageslider.ImageSlider
import com.denzcoskun.imageslider.models.SlideModel
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.firebase.storage.FirebaseStorage
import com.google.firebase.storage.StorageReference
import com.huji.couchmirage.R
import kotlinx.android.synthetic.main.item_details_activity.*
import java.io.File
import java.io.IOException


/***
 * Activity showing information about a selected furniture item
 *
 */
class ItemDetailsActivity : AppCompatActivity() {

    // Create image list
    private val selectedItemImageList = ArrayList<SlideModel>()

    // current selected item
    lateinit var selectedItem: Furniture
    private val loadingDialogFragment by lazy { LoadingDialogFragment() }

    //
    private var isLoading = false


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.item_details_activity)

        //
        val bundle = intent.extras
        val departmentItems = bundle!!.getSerializable("ITEM LIST") as ArrayList<Furniture>

        // init selected item
        selectedItem = departmentItems[bundle.get("CLICKED ITEM") as Int]
        selectedItem.details["description"]?.let { Log.d("CHECK DETAILS", it) }

        // Init adapter
        DepartmentActivity.itemAdapter.setItemList(departmentItems)


        // Init UI components
        setupDescriptionToggle()
        setupGoodToKnowToggle()
        setUpItemCategory()
        setUpItemPrice()
        setUpItemDescription()
        setUpItemGoodToKnow()
        setUpItemSizes()
        setUpItemModel()
        setUpItemColor()
        loadSelectedItemImages()
        setupSlider()
        setUpURLSourceButton()
        setupDisplay3DModelButton()
    }

    private fun setupDescriptionToggle() {

        var description = findViewById<TextView>(R.id.description)
        var arrowBtn = findViewById<Button>(R.id.show_description)
        var description_view = findViewById<ConstraintLayout>(R.id.descrption_view)

        arrowBtn.setOnClickListener {
            if (description.getVisibility() == View.GONE) {
                TransitionManager.beginDelayedTransition(
                    description_view,
                    AutoTransition()
                )
                description.setVisibility(View.VISIBLE)
                arrowBtn.setBackgroundResource(R.drawable.ic_keyboard_arrow_up_black_24dp)
            } else {
                TransitionManager.beginDelayedTransition(
                    description_view,
                    AutoTransition()
                )
                description.setVisibility(View.GONE)
                arrowBtn.setBackgroundResource(R.drawable.ic_keyboard_arrow_down_black_24dp)
            }
        }
    }

    private fun setupGoodToKnowToggle() {

        var goodToKnow = findViewById<TextView>(R.id.good_to_know)
        var arrowBtn = findViewById<Button>(R.id.show_good_to_know)
        var goodToKnow_view = findViewById<ConstraintLayout>(R.id.good_to_know_view)

        arrowBtn.setOnClickListener {
            if (goodToKnow.getVisibility() == View.GONE) {
                TransitionManager.beginDelayedTransition(
                    goodToKnow_view,
                    AutoTransition()
                )
                goodToKnow.setVisibility(View.VISIBLE)
                arrowBtn.setBackgroundResource(R.drawable.ic_keyboard_arrow_up_black_24dp)
            } else {
                TransitionManager.beginDelayedTransition(
                    goodToKnow_view,
                    AutoTransition()
                )
                goodToKnow.setVisibility(View.GONE)
                arrowBtn.setBackgroundResource(R.drawable.ic_keyboard_arrow_down_black_24dp)
            }
        }
    }


    private fun setUpItemCategory() {
        val itemDescription: TextView = findViewById(R.id.item_category)
        itemDescription.setText(selectedItem.category)
    }

    private fun setUpItemPrice() {
        val itemDescription: TextView = findViewById(R.id.price_text)
        itemDescription.setText(selectedItem.price.toString() + " ₪")
    }

    private fun setUpItemDescription() {
        val itemDescription: TextView = findViewById(R.id.description)
        itemDescription.setText(selectedItem.details["description"])
    }

    private fun setUpItemGoodToKnow() {
        val itemDescription: TextView = findViewById(R.id.good_to_know)
        var goodToKnow_view = findViewById<ConstraintLayout>(R.id.good_to_know_view)

        if (selectedItem.details["good_to_know"] == null) {
            goodToKnow_view.visibility = View.GONE
        } else {
            itemDescription.setText(selectedItem.details["good_to_know"])

        }

    }

    private fun setUpItemSizes() {
        val itemSizes: TextView = findViewById(R.id.item_sizes)
        itemSizes.setText(Html.fromHtml("${selectedItem.sizes[0]} x ${selectedItem.sizes[1]} x ${selectedItem.sizes[2]} [cm <sup>3</sup>]"))

    }

    private fun setUpItemColor() {
        val itemDescription: TextView = findViewById(R.id.item_color)
        itemDescription.setText(selectedItem.color)
    }

    private fun setUpItemModel() {
        val itemDescription: TextView = findViewById(R.id.model_title)
        itemDescription.setText(selectedItem.model)
    }

    /**
     *
     */
    private fun loadSelectedItemImages() {

        for (s in selectedItem.images) {
            selectedItemImageList.add(SlideModel(s))
        }
    }

    /**
     *  Initialize the custom image list slider
     *
     */
    private fun setupSlider() {
        val imageSlider = findViewById<ImageSlider>(R.id.item_images_slider)
        imageSlider.setImageList(selectedItemImageList)
    }


    /**
     *
     */
    private fun setUpURLSourceButton() {

        //
        var goToUrlBtn = findViewById<Button>(R.id.goto_store_button)

        goToUrlBtn.setOnClickListener() {

            if (!isLoading) {


                val browserIntent =
                    Intent(
                        Intent.ACTION_VIEW,
                        Uri.parse(selectedItem.source)
                    )
                startActivity(browserIntent)
            }
        }
    }

    /**
     *
     * @param the 3d model rendeable file
     */
    private fun broadcastShow3DModel(file: File) {

        val intent = Intent()

        // put the model's measurements
        intent.putExtra("model_length", selectedItem.sizes[0]!!.toFloat())
        intent.putExtra("model_width", selectedItem.sizes[1]!!.toFloat())
        intent.putExtra("model_height", selectedItem.sizes[2]!!.toFloat())

        //  put the rendeable model
        intent.putExtra("file", file)

        // set the current action
        intent.action = "show_model"

        sendBroadcast(intent)
    }


    /**
     * Setups the button to display the 3d model
     */
    private fun setupDisplay3DModelButton() {
        val show3DModel = findViewById<FloatingActionButton>(R.id.try_3d_model)
        show3DModel.setOnClickListener() {
            // downloads the model
            show3DModel(selectedItem.rendable!!)
        }
    }

    /**
     *  Download the model
     *  @param fbRelativePath The  relative path in the firebase storage of the model
     */
    private fun show3DModel(
        fbRelativePath: String
    ) {

        // get reference to the model
        val storage: FirebaseStorage = FirebaseStorage.getInstance()
        val modelRef: StorageReference = storage.getReference().child(fbRelativePath)

        var loading = findViewById<ConstraintLayout>(R.id.load_animation)
        // download the model and then show it locally
        try {
            val file = File.createTempFile("out", "glb")

            modelRef.getFile(file).addOnSuccessListener {

                broadcastShow3DModel(file)


                isLoading = false

                finish()

            }
            isLoading = true

            goto_store_button.visibility = View.GONE
            loading.visibility = View.VISIBLE
        } catch (e: IOException) {
            e.printStackTrace()
        }

    }


}


