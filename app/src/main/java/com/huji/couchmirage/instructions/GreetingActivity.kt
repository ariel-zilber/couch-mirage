package com.huji.couchmirage.instructions


import android.os.Bundle
import android.view.View
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import com.huji.couchmirage.R

class GreetingActivity : AppCompatActivity() {
    private val buttonArrayList = ArrayList<String>()
    private lateinit var toMeasurement: Button


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)


        setContentView(R.layout.greeting_activity)


        val buttonArray = resources
            .getStringArray(R.array.arcore_welcome_buttons)

        buttonArray.map { it ->
            buttonArrayList.add(it)
        }

        toMeasurement = findViewById(R.id.to_measurement)
        toMeasurement.text = buttonArrayList[0]
        toMeasurement.setOnClickListener(object : View.OnClickListener {
            override fun onClick(v: View?) {

                finish()
            }
        })
    }




}
