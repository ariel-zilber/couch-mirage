package com.huji.couchmirage.catalog

import android.app.Application
import android.os.Parcelable
import com.google.ar.sceneform.rendering.Renderable
import java.io.Serializable

/****
 *  Represents a single furniture item
 *
 */
data class Furniture(
    var category: String?,
    var color: String?,
    var details: Map<String?, String?>,
    var images: List<String?>,
    var model: String?,
    var price: Int?,
    var rendable: String?,

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
        rendable = null,
        sizes = listOf<Long?>(),
        source = null
    )


}
