package com.huji.couchmirage.catalog

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import com.google.firebase.firestore.FirebaseFirestore
import com.huji.couchmirage.R
import kotlinx.android.synthetic.main.activity_main.*

/***
 *
 */
class CatalogFrontActivity : AppCompatActivity() {

    private lateinit var departmentAdapter: DepartmentRecyclerAdapter

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
            departmentAdapter =
                DepartmentRecyclerAdapter(object :
                    OnDepartmentClickListen {
                    override fun onDepartmentClick(view: View, position: Int) {
//                    Toast.makeText(view.context, "clicked", Toast.LENGTH_SHORT).show()
                        openDepartmentPage(view, position)
                    }
                })
            adapter = departmentAdapter
        }
    }

    fun openDepartmentPage(view: View, position: Int) {

        val intent = Intent(this, DepartmentActivity::class.java).apply {
            putExtra("DEPARTMENT NAME", departmentAdapter.items[position].departmentName)
        }


        var db = FirebaseFirestore.getInstance()
        val list = ArrayList<Furniture>()

        db.collection(departmentAdapter.items[position].departmentName).get()
            .addOnSuccessListener { documents ->

                for (document in documents) {
                    val i = document.toObject(Furniture::class.java)
                    list.add(i)
                }
                intent.putExtra("items", list);

                startActivity(intent)
                overridePendingTransition(
                    R.anim.slide_in_right,
                    R.anim.slide_out_left
                );


            }


    }


}

