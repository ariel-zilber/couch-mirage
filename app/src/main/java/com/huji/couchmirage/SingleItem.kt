package com.huji.couchmirage

import android.app.Application
import android.os.Parcelable
import java.io.Serializable

data class SingleItem(
    var category: String?,
    var color: String?,
    var details: Map<String?, String?>,
    var images: List<String?>,
    var model: String?,
    var price: Int?,
    var sizes: List<Long?>,
    var source: String?
) : Serializable {
    constructor() : this(
        category = null,
        color = null,
        details = emptyMap<String?, String?>(),
        images = listOf<String?>(),
        model = null,
        price = null,
        sizes = listOf<Long?>(),
        source = null
    )


}
