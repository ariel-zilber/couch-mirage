package com.huji.couchmirage

import android.util.Log
import com.google.common.primitives.UnsignedBytes.toInt
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ktx.toObject
import com.huji.couchmirage.DepartmentActivity.Companion.itemAdapter


class ItemDataSource {
    companion object{
         var miniBarrier:Boolean = false
        private var db = FirebaseFirestore.getInstance()
        fun createDepartmentGallery(department: String?){
            val list = ArrayList<SingleItem>()

            if (department != null) {
                db.collection(department).get()
                    .addOnSuccessListener { documents -> //TODO the problem is here!!
                        for (document in documents) {
                            val i = document.toObject(SingleItem::class.java)

                            list.add(i)
                        }
                        Log.d("BEFORE", list.toString())
                        DepartmentActivity.itemAdapter.setItemList(list)
//                        for(i in 0..list.size){
//                            itemAdapter.items.add(list[i])// = list[i]
//                    }

                        Log.d("CHECK ", itemAdapter.getItemList().toString())
                        miniBarrier =true
                    }
                if(department=="BEDS & MATTRESSES"){
                    itemAdapter.items.add(SingleItem(        category = null,
                        color = null,
                        details = emptyMap<String?, String?>(),
                        images = listOf<String?>(                    "https://as2.ftcdn.net/jpg/01/32/53/23/500_F_132532302_hp9DZ7y8BPTaRMMFME0aSysBThQCORCv.jpg"
                        ),
                        model = "blop blop ",
                        price = null,
                        sizes = listOf<Long?>()))// = list[i]
                }
            }
        }
    }
}

//Log.d("BRUHHHH0", i.toString())
//Log.d("BRUHHHH51", "" + list.size)
//Log.d("BRUHHHH2", "" + check)
//            Log.d("BRUHHHH4", "" + list.size)

//                   Log.d("BRUHHHH1","${document.id}=>${document.data}")
//SingleItem(
//document.getString("category"),
//document.getString("color"),
//document.getString("details"),
//document.getString("images"),
//document.getString("model"),
//document.getString("price"),
//document.getString("sizes")
////)