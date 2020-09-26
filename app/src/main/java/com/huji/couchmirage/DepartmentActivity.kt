package com.huji.couchmirage

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.TextView
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
        var bundle = intent.extras
        var list = bundle!!.getSerializable("items") as ArrayList<SingleItem>
        itemAdapter.setItemList(list)

        // update the title text
        findViewById<TextView>(R.id.category_title).setText(intent.extras!!.getString("DEPARTMENT NAME"))

    }

    override fun onResume() {
        super.onResume()

    }

    override fun finish() {
        super.finish()
        overridePendingTransition(android.R.anim.slide_in_left, android.R.anim.slide_out_right)
    }

    private fun addDataSet(department: String?) {
        Toast.makeText(this, "BEFORE " + itemAdapter.getItemList().size, Toast.LENGTH_SHORT).show()
        ItemDataSource.createDepartmentGallery(department)

//        itemAdapter.setItemList(data)
        Toast.makeText(this, "AFTER " + itemAdapter.getItemList().size, Toast.LENGTH_SHORT).show()
    }

    private fun openItemDetailsActivity() {
        val intent = Intent(this, ItemDetailsActivity::class.java).apply {

        }

        intent.addFlags(Intent.FLAG_ACTIVITY_NO_HISTORY);


        startActivity(intent)
        overridePendingTransition(R.anim.slide_in_right, R.anim.slide_out_left);

    }

    private fun initRecyclerView() {
        recycler_view.apply {
            layoutManager = GridLayoutManager(this.context, 2)
            itemAdapter = ItemRecyclerAdapter(object : OnItemClickListen {
                override fun onItemClick(view: View, position: Int) {

                    openItemDetailsActivity()

                }
            })
            adapter = itemAdapter

        }
    }


}
