package com.huji.couchmirage

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.denzcoskun.imageslider.ImageSlider
import com.denzcoskun.imageslider.models.SlideModel
import com.google.android.material.floatingactionbutton.FloatingActionButton


class ItemDetailsActivity : AppCompatActivity() {
    val imageList = ArrayList<SlideModel>() // Create image list


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.item_details_activity)

        //
        loadImages()

        setupSlider()

        setUpURLButton()
        setupDisplay3DModelButton()

    }


    private fun loadImages() {
        //todo
        imageList.add(
            SlideModel(
                "https://www.ikea.co.il/images/Fittings/ikea/203/39/420/20339420_Enlarge.jpg"
            )
        )
        imageList.add(
            SlideModel(
                "https://www.ikea.co.il/images/Fittings/ikea/203/39/420/20339420_2_Enlarge.jpg"
            )
        )
        imageList.add(SlideModel("https://www.ikea.co.il/images/Fittings/ikea/203/39/420/20339420_3_Enlarge.jpg"))

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
                    Uri.parse("https://www.ikea.co.il/catalogue/Workspaces/Home_work_chairs/20339420")
                )


            startActivity(browserIntent)


        }
    }


    private fun setupDisplay3DModelButton() {
        // todo

        var show3DModel = findViewById<FloatingActionButton>(R.id.try_3d_model)

        show3DModel.setOnClickListener() {

            Toast.makeText(this, "Loading 3d model", Toast.LENGTH_SHORT).show()
            // pass parameters back


            finish()

        }


    }


}


