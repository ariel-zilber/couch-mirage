package com.huji.couchmirage

import android.util.Log
import com.google.common.primitives.UnsignedBytes.toInt
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ktx.toObject
import com.huji.couchmirage.DepartmentActivity.Companion.itemAdapter


class ItemDataSource {
    companion object {
        private var db = FirebaseFirestore.getInstance()
        fun createDepartmentGallery(department: String?) {
            val list = ArrayList<SingleItem>()
            if (department != null) {
                db.collection(department).get()
                    .addOnSuccessListener { documents ->
                        for (document in documents) {
                            val i = document.toObject(SingleItem::class.java)
                            list.add(i)
                        }
                        Log.d("DEPARTMENT NAME", department)
                        Log.d("BEFORE0", list.toString())
                        Log.d("BEFORE1", "" + list.size)

                        for (i in 0 until list.size) {
                            itemAdapter.addSingleItem(list[i])
                            Log.d("DURING",
                                "" + itemAdapter.getItemList()
                                    .get(i)) //TODO: here the items are inside the itemAdapter List
                        }
//                        itemAdapter.getMutableLiveData().postValue() // TODO: what do we do with this?
                    }
                for (i in 0 until list.size) { // TODO : not reaching here!!
                    Log.d("AFTER", "" + itemAdapter.getItemList().get(i))
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

//
//                        Log.d("BEFORE", list.toString())
//                        itemAdapter.setItemList(list)
//                        Log.d("CHECK ", itemAdapter.getItemList().toString())