package com.huji.couchmirage

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Window
import android.view.WindowManager
import androidx.recyclerview.widget.LinearLayoutManager
import com.huji.couchmirage.DepartmentRecyclerAdapter
import com.huji.couchmirage.DepartmentSourceData
import com.huji.couchmirage.DepartmentSourceData.Companion.createDataSet
import com.huji.couchmirage.R
import kotlinx.android.synthetic.main.activity_main.*
import org.json.JSONArray
import org.json.JSONObject
import java.io.IOException
import java.io.InputStream

class MainActivity : AppCompatActivity() {

    private lateinit var departmentAdapter: DepartmentRecyclerAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)


        setContentView(R.layout.activity_main)
        initRecyclerView()
        addDataSet()
    }

    private fun addDataSet() {
        val data = DepartmentSourceData.createDataSet()
        departmentAdapter.submitList(data)
    }

    private fun initRecyclerView() {
        recycler_view.apply {
            layoutManager = LinearLayoutManager(this@MainActivity)
            departmentAdapter = DepartmentRecyclerAdapter()
            adapter = departmentAdapter
        }
    }


}

