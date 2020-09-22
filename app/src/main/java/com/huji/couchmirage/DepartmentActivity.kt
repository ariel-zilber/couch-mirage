package com.huji.couchmirage

import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import kotlinx.android.synthetic.main.activity_main.*

class DepartmentActivity: AppCompatActivity() {
    private lateinit var itemAdapter: ItemRecyclerAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.departement_items_gallery_layout)
        initRecyclerView()
        addDataSet()
    }

    private fun addDataSet() {
//        val data = DepartmentSourceData.createDataSet()
//        itemAdapter.submitList(data)
    }

    private fun initRecyclerView() {
        recycler_view.apply {
            layoutManager = GridLayoutManager(this.context, 2)
            itemAdapter = ItemRecyclerAdapter( object : OnItemClickListen {
                override fun onItemClick(view: View, position: Int) {
                    Toast.makeText(view.context, "clicked", Toast.LENGTH_SHORT).show()
                }
            })
            adapter = itemAdapter
        }
    }

//    fun openDepartmentPage(view: View) {
//        val editText = findViewById<TextView>(R.id.department_name)
//        val name = editText.text.toString()
//        val intent = Intent(this, DepartmentActivity::class.java).apply {
//            putExtra(AlarmClock.EXTRA_MESSAGE, name)
//        }
//        startActivity(intent)
//    }

}