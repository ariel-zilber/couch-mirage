package com.huji.couchmirage

import android.util.Log
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ktx.toObject


class ItemDataSource {
    companion object {
        private var db = FirebaseFirestore.getInstance()
        fun createDataSet(department: String?): ArrayList<SingleItem> {
            val list = ArrayList<SingleItem>()
            if (department != null) {
                db.collection(department).get()
                    .addOnSuccessListener { result ->
                        for (document in result) {
                            list.add(document.toObject(SingleItem::class.java))
                        }
                    }
            }
            return list
        }
    }
}



//                   Log.d("BRUHHHH1","${document.id}=>${document.data}")
//                Log.d("BRUHHHH2", "" + check)
//SingleItem(
//document.getString("category"),
//document.getString("color"),
//document.getString("details"),
//document.getString("images"),
//document.getString("model"),
//document.getString("price"),
//document.getString("sizes")
//)