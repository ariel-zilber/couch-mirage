package com.huji.couchmirage
//
//import android.util.Log
//import com.google.common.primitives.UnsignedBytes.toInt
//import com.google.firebase.firestore.FirebaseFirestore
//import com.google.firebase.firestore.ktx.toObject
//import com.huji.couchmirage.DepartmentActivity.Companion.itemAdapter
//
//
//class ItemDataSource {
//    companion object {
//        private var db = FirebaseFirestore.getInstance()
//
//        fun createDepartmentGallery(department: String?) {
//            val list = ArrayList<SingleItem>()
//            if (department != null) {
//
//                var item = SingleItem(
//                    category = "CHAIRS",
//                    color = "black",
//                    details = emptyMap<String?, String?>(),
//                    images = listOf<String?>(
//                        "https://www.ikea.co.il/images/Fittings/ikea/203/39/420/20339420_Enlarge.jpg"
//                        ,
//                        "https://www.ikea.co.il/images/Fittings/ikea/203/39/420/20339420_1_Enlarge.jpg",
//                        "https://www.ikea.co.il/images/Fittings/ikea/203/39/420/20339420_2_Enlarge.jpg"
//                    ),
//                    model = "RENBERGET",
//                    price = 295,
//                    sizes = listOf<Long?>(15, 15, 500)
//                )
//
//                itemAdapter.addSingleItem(item)
//                itemAdapter.addSingleItem(item)
//
//
//
//                db.collection(department).get()
//                    .addOnSuccessListener { documents ->
//                        for (document in documents) {
//                            val i = document.toObject(SingleItem::class.java)
//                            list.add(i)
//                        }
//                        Log.d("DEPARTMENT NAME", department)
//                        Log.d("BEFORE0", list.toString())
//                        Log.d("BEFORE1", "" + list.size)
//
//                        for (i in 0 until list.size) {
//                            itemAdapter.addSingleItem(list[i])
//                            Log.d(
//                                "DURING",
//                                "" + itemAdapter.getItemList()
//                                    .get(i)
//                            ) //TODO: here the items are inside the itemAdapter List
//                        }
////                        itemAdapter.getMutableLiveData().postValue() // TODO: what do we do with this?
//                    }
//
//                for (i in 0 until list.size) { // TODO : not reaching here!!
//                    Log.d("AFTER", "" + itemAdapter.getItemList().get(i))
//                }
//            }
//
//
//        }
//    }
//}
//
