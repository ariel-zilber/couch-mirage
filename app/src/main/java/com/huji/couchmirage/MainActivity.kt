package com.huji.couchmirage

import android.content.Intent
import android.os.Bundle
import android.provider.AlarmClock.EXTRA_MESSAGE
import android.util.Log
import android.view.View
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.activity_main.view.*

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
            departmentAdapter = DepartmentRecyclerAdapter( object : OnDepartmentClickListen {
                override fun onDepartmentClick(view: View, position: Int) {
                    Toast.makeText(view.context, "clicked", Toast.LENGTH_SHORT).show()
                    openDepartmentPage(view)
                    }
            })
            adapter = departmentAdapter
        }
    }
    fun openDepartmentPage(view: View) {
        val editText = findViewById<TextView>(R.id.department_name)
        val name = editText.text.toString()
        val intent = Intent(this, DepartmentActivity::class.java).apply {
            putExtra(EXTRA_MESSAGE, name)
        }
        startActivity(intent)
    }


}

