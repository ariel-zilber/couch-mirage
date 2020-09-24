package com.huji.couchmirage

import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import com.huji.couchmirage.DepartmentSourceData.Companion.createDataSet
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.layout_department_single_list_item.*
import kotlinx.android.synthetic.main.layout_department_single_list_item.view.*

class DepartmentActivity : AppCompatActivity() {
    companion object {
        lateinit var itemAdapter: ItemRecyclerAdapter
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.departement_items_gallery_layout)
        initRecyclerView()
        addDataSet(intent.extras!!.getString("DEPARTMENT NAME"))
    }

    private fun addDataSet(department: String?) {
        Toast.makeText(this, "BEFORE " + itemAdapter.getItemList().size, Toast.LENGTH_SHORT).show()
        ItemDataSource.createDepartmentGallery(department)
//        itemAdapter.setItemList(data)
        Toast.makeText(this, "AFTER " + itemAdapter.getItemList().size, Toast.LENGTH_SHORT).show()

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

//        Toast.makeText(this, "clicked1", Toast.LENGTH_SHORT).show()
//        Toast.makeText(this, intent.extras!!.getString("DEPARTMENT NAME"), Toast.LENGTH_SHORT).show()
//        Toast.makeText(this, ""+ itemAdapter.getItemList().size, Toast.LENGTH_SHORT).show()
//        Toast.makeText(this, "clicked end", Toast.LENGTH_SHORT).show()