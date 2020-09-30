package com.huji.couchmirage.catalog

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.Bundle
import android.util.Log
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import com.google.firebase.firestore.FirebaseFirestore
import com.huji.couchmirage.BoxMeasurements
import com.huji.couchmirage.R
import kotlinx.android.synthetic.main.activity_main.*

/***
 * Main page of the Catalog.
 * Contains different furniture categories
 */
class CatalogFrontActivity : AppCompatActivity() {

    private lateinit var departmentAdapter: DepartmentRecyclerAdapter
    private var filterMeasurements: BoxMeasurements? = null

    private val receiver: BroadcastReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context, intent: Intent) {
            val action = intent.getAction()
            if (action == "show_model") {
                finish()
            }

        }
    }

    private fun initFilterMeasurments() {
        // todo: remove it
       // filterMeasurements = BoxMeasurements(10000f, 10000f, 10000f)
        filterMeasurements = intent.extras!!.get("USER_MEASUREMENTS") as BoxMeasurements

    }


    private fun configureReceiver() {
        registerReceiver(receiver, IntentFilter("show_model"))
    }


    override fun onDestroy() {
        super.onDestroy()

        unregisterReceiver(receiver)
    }


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        configureReceiver()

        setContentView(R.layout.activity_main)
        initFilterMeasurments()

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


                // filter items
                // xxx
                var filteredDepartmentItems: ArrayList<Furniture>? = ArrayList<Furniture>()


                for (i in 0..list!!.size - 1) {
                    var currItem = list!!.get(i)
                    var currLength = currItem.sizes[0]
                    var currWidth = currItem.sizes[1]
                    var currHeight = currItem.sizes[2]

                    //
                    Log.d("currLength", currLength.toString())
                    Log.d("currWidth", currWidth.toString())
                    Log.d("currHeight", currHeight.toString())
                    Log.d("filterMeasurements", filterMeasurements.toString())

                    if (filterMeasurements!!.boxLength < currLength!!) {
                        continue
                    }
                    if (filterMeasurements!!.boxWidth < currWidth!!) {
                        continue
                    }
                    if (currHeight!! > filterMeasurements!!.boxHeight) {
                        continue
                    }
                    filteredDepartmentItems!!.add(currItem)
                }

                intent.putExtra("items", filteredDepartmentItems);

                startActivity(intent)
                overridePendingTransition(
                    R.anim.slide_in_right,
                    R.anim.slide_out_left
                );


            }


    }


}

