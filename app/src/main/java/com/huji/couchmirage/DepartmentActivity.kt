package com.huji.couchmirage

import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.layout_department_single_list_item.*
import kotlinx.android.synthetic.main.layout_department_single_list_item.view.*

class DepartmentActivity : AppCompatActivity() {
    private lateinit var itemAdapter: ItemRecyclerAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.departement_items_gallery_layout)
        initRecyclerView()
        Toast.makeText(this, "clicked1", Toast.LENGTH_SHORT).show()
        Toast.makeText(this, intent.extras!!.getString("DEPARTMENT NAME"), Toast.LENGTH_SHORT).show()
        addDataSet(intent.extras!!.getString("DEPARTMENT NAME"))
        Toast.makeText(this, "clicked end", Toast.LENGTH_SHORT).show()

    }

    private fun addDataSet(department: String?) {
        val data = ItemDataSource.createDataSet(department)
        Toast.makeText(this, ""+data.size, Toast.LENGTH_SHORT).show()
        itemAdapter.submitList(data)
    }

    private fun initRecyclerView() {
        recycler_view.apply {
            layoutManager = GridLayoutManager(this.context, 2)
            itemAdapter = ItemRecyclerAdapter(object : OnItemClickListen {
                override fun onItemClick(view: View, position: Int) {
                    TODO("Not yet implemented")
                }
            })

            adapter = itemAdapter

        }
    }

}
//    if (intent.extras != null)
//    {
//        Toast.makeText(
//            this,
//            "" + addDataSet(intent.extras!!.getString("DEPARTMENT NAME")).size,
//            Toast.LENGTH_SHORT
//        ).show()
//    }
//    fun openDepartmentPage(view: View) {
//        val editText = findViewById<TextView>(R.id.department_name)
//        val name = editText.text.toString()
//        val intent = Intent(this, DepartmentActivity::class.java).apply {
//            putExtra(AlarmClock.EXTRA_MESSAGE, name)
//        }
//        startActivity(intent)
//    }