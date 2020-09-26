package com.huji.couchmirage

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
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

    private var lst: ArrayList<SingleItem>? = ArrayList<SingleItem>()


    private val receiver: BroadcastReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context, intent: Intent) {
            val action = intent.getAction()

            if (action == "show_model") {
                finish()
            }
        }
    }


    private fun configureReceiver() {
        registerReceiver(
            receiver, IntentFilter("show_model")
        );
    }


    override fun onDestroy() {
        super.onDestroy()

        unregisterReceiver(receiver)
    }


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        configureReceiver()
        setContentView(R.layout.departement_items_gallery_layout)
        initRecyclerView()
        val bundle = intent.extras
        lst = bundle!!.getSerializable("items") as ArrayList<SingleItem>?
        itemAdapter.setItemList(lst!!)
        // update the title text
        findViewById<TextView>(R.id.category_title).text =
            intent.extras!!.getString("DEPARTMENT NAME")

    }

    override fun finish() {
        super.finish()
        overridePendingTransition(android.R.anim.slide_in_left, android.R.anim.slide_out_right)
    }


    private fun openItemDetailsActivity(position: Int) {
        val intent = Intent(this, ItemDetailsActivity::class.java).apply {
            putExtra("ITEM LIST", lst)
            putExtra("CLICKED ITEM", position)
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
                    openItemDetailsActivity(position)
                }
            })
            adapter = itemAdapter
        }
    }
}

//    private fun addDataSet(department: String?) {
//        Toast.makeText(this, "BEFORE " + itemAdapter.getItemList().size, Toast.LENGTH_SHORT).show()
//        ItemDataSource.createDepartmentGallery(department)
//
////        itemAdapter.setItemList(data)
//        Toast.makeText(this, "AFTER " + itemAdapter.getItemList().size, Toast.LENGTH_SHORT).show()
//    }
