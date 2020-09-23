package com.huji.couchmirage

import android.util.Log
import com.google.firebase.firestore.FirebaseFirestore


class ItemDataSource {
    companion object {
        private var db = FirebaseFirestore.getInstance()

        fun createDataSet(department: String?): ArrayList<SingleItem> {
            val list = ArrayList<SingleItem>()
            var check = 0
            if (department != null) {
                db.collection(department).get()
                    .addOnSuccessListener { result ->
                        for (document in result) {
                            check++
                            list.add(document.toObject(SingleItem.class))
                        }
                    }
//                   Log.d("BRUHHHH1","${document.id}=>${document.data}")
                Log.d("BRUHHHH2", "" + check)
            }
            return list
        }
    }
}

//SingleItem( document.getString("category"),
//document.getString("color"),
//(document.getString("details")),
//document.getString("images"),
//document.getString("model"),
//document.getString("price"),
//document.getString("sizes")