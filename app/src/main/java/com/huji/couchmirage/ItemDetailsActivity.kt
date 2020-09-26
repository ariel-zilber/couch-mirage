package com.huji.couchmirage

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.denzcoskun.imageslider.ImageSlider
import com.denzcoskun.imageslider.models.SlideModel
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.firebase.ktx.Firebase
import com.google.firebase.storage.FirebaseStorage
import com.google.firebase.storage.StorageReference
import com.google.firebase.storage.ktx.storage
import kotlinx.android.synthetic.main.item_details_activity.view.*
import kotlinx.android.synthetic.main.layout_single_list_item.view.*
import java.io.File
import java.io.IOException


class ItemDetailsActivity : AppCompatActivity() {
    private val imageList = ArrayList<SlideModel>() // Create image list
    private var lst: ArrayList<SingleItem> = ArrayList<SingleItem>()
    lateinit var currentItem: SingleItem
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.item_details_activity)
        val itemDescription: TextView = findViewById(R.id.description)

        val bundle = intent.extras
        lst = bundle!!.getSerializable("ITEM LIST") as ArrayList<SingleItem>
        currentItem = lst[bundle.get("CLICKED ITEM") as Int]
        currentItem.details["description"]?.let { Log.d("CHECK DETAILS", it) }
        itemDescription.setText(currentItem.details["description"])
        DepartmentActivity.itemAdapter.setItemList(lst)
        loadImages()
        setupSlider()
        setUpURLButton()
        setupDisplay3DModelButton()
    }


    private fun loadImages() {
        //todo: currently the black chair
        for (s in currentItem.images) {
            imageList.add(SlideModel(s))
        }
    }

    private fun setupSlider() {
        val imageSlider = findViewById<ImageSlider>(R.id.item_images_slider)
        imageSlider.setImageList(imageList)
    }


    private fun setUpURLButton() {
        //todo

        //
        var goToUrlBtn = findViewById<Button>(R.id.goto_store_button)

        goToUrlBtn.setOnClickListener() {
            val browserIntent =
                Intent(
                    Intent.ACTION_VIEW,
                    Uri.parse(currentItem.source)
                )
            startActivity(browserIntent)
        }
    }

    private fun broadcast() {
        Log.d("xxx", "111")
        val intent = Intent()
        intent.action = "show_model"

        sendBroadcast(intent)
    }

    private fun setupDisplay3DModelButton() {
        // todo
        val show3DModel = findViewById<FloatingActionButton>(R.id.try_3d_model)
        show3DModel.setOnClickListener() {


            getFireBaseModel(
                currentItem.rendable!!,
                currentItem.sizes[0]!!.toFloat(),
                currentItem.sizes[1]!!.toFloat(),
                currentItem.sizes[2]!!.toFloat()
            )
        }
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

                broadcast()
                finish()

            }
        } catch (e: IOException) {
            e.printStackTrace()
        }

    }


}


