package com.huji.couchmirage

data class SingleItem(
    var itemCategory: String?,
    var itemColor: String?,
    var ItemDetails: Map<String?,String?>,
    var itemImg: Array<String?>,
    var itemName: String?,
    var itemPrice: Int?,
    var itemSize: Array<String?>
) {

}