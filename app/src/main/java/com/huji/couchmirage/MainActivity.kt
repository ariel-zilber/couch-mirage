package com.huji.couchmirage

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import kotlinx.android.synthetic.main.activity_main.*

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
            layoutManager = GridLayoutManager(this.context, 2)
            departmentAdapter = DepartmentRecyclerAdapter()
            adapter = departmentAdapter
        }
    }


}

