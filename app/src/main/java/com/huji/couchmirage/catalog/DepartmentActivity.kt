package com.huji.couchmirage.catalog

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.Bundle
import android.view.View
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import com.huji.couchmirage.*
import kotlinx.android.synthetic.main.catalog_front.*

/**
 *
 */
class DepartmentActivity : AppCompatActivity() {
    companion object {
        lateinit var itemAdapter: ItemRecyclerAdapter
    }

    // the items belonging to the department
    private var departmentItems: ArrayList<Furniture>? = ArrayList<Furniture>()


    private val receiver: BroadcastReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context, intent: Intent) {
            val action = intent.getAction()

            if (action == "show_model") {
                // close open activity after pressing the button
                // "Show item in place" at the ItemDetails  activity
                finish()
            }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.departement_items_gallery_layout)

        // init the receiver
        configureReceiver()

        initRecyclerView()
        val bundle = intent.extras
        departmentItems = bundle!!.getSerializable("items") as ArrayList<Furniture>?
        itemAdapter.setItemList(departmentItems!!)


        // update the title text
        findViewById<TextView>(R.id.category_title).text =
            intent.extras!!.getString("DEPARTMENT NAME")

    }

    /***
     * Initialize the receiver
     */
    private fun configureReceiver() {
        registerReceiver(
            receiver, IntentFilter("show_model")
        );
    }


    override fun onDestroy() {
        super.onDestroy()

        //
        unregisterReceiver(receiver)
    }


    override fun finish() {
        super.finish()
        overridePendingTransition(android.R.anim.slide_in_left, android.R.anim.slide_out_right)
    }


    /***
     * Opens page displaying a given item's details
     *
     */
    private fun openItemDetailsActivity(position: Int) {

        //
        val intent = Intent(this, ItemDetailsActivity::class.java).apply {
            putExtra("ITEM LIST", departmentItems)
            putExtra("CLICKED ITEM", position)
        }

        startActivity(intent)
        overridePendingTransition(
            R.anim.slide_in_right,
            R.anim.slide_out_left
        );
    }

    /**
     * Initialize the the recyclerview of hte the departments items
     */
    private fun initRecyclerView() {
        recycler_view.apply {
            layoutManager = GridLayoutManager(this.context, 2)
            itemAdapter = ItemRecyclerAdapter(object :
                OnItemClickListen {
                override fun onItemClick(view: View, position: Int) {
                    openItemDetailsActivity(position)
                }
            })

            //
            adapter = itemAdapter
        }
    }
}
