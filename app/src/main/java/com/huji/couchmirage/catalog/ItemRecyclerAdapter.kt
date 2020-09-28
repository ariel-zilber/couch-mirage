package com.huji.couchmirage.catalog

import android.text.Html
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.huji.couchmirage.R
import kotlinx.android.synthetic.main.layout_single_list_item.view.*

class ItemRecyclerAdapter(
    private var listener: OnItemClickListen
) : RecyclerView.Adapter<RecyclerView.ViewHolder>() {

    var items: ArrayList<Furniture> = ArrayList()


    fun setItemList(itemList: ArrayList<Furniture>) {
        items = itemList
    }

    override fun getItemCount(): Int {
        return items.size
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        val textView = LayoutInflater.from(parent.context)
            .inflate(R.layout.layout_single_list_item, parent, false)
        val viewHol =
            ItemViewHolder(
                textView
            )
        textView.setOnClickListener { v ->
            listener.onItemClick(v, viewHol.layoutPosition)
        }

        return viewHol
    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        when (holder) {
            is ItemViewHolder -> {
                holder.bind(items[position])
            }
        }
    }


    class ItemViewHolder
    constructor(itemView: View) : RecyclerView.ViewHolder(itemView) {

        private val itemImg: ImageView = itemView.item_img
        private val itemName: TextView = itemView.item_name
        private val itemPrice: TextView = itemView.item_price
        private val itemColor: TextView = itemView.item_color
        private val itemSizes: TextView = itemView.item_sizes

        //        private val itemDetails: TextView = itemView.item_color
        fun bind(item: Furniture) {
            itemName.text = item.model
            itemColor.text = item.color
            itemPrice.text = item.price.toString() + "₪"
            itemSizes.text=Html.fromHtml("${item.sizes[0]} x ${item.sizes[1]} x ${item.sizes[2]} [cm <sup>3</sup>]")

            val requestOptions = RequestOptions()
                .placeholder(R.drawable.ic_launcher_background)
                .error(R.drawable.ic_launcher_background)

            Glide.with(itemView.context).applyDefaultRequestOptions(requestOptions)
                .load(item.images[0])
                .into(itemImg)
        }
    }

    class DepartmentListGridRecyclerAdapter : RecyclerView.Adapter<RecyclerView.ViewHolder>() {
        private var items: List<Furniture> = ArrayList()

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
            return ItemViewHolder(
                LayoutInflater.from(parent.context)
                    .inflate(
                        R.layout.layout_single_list_item,
                        parent,
                        false
                    )
            )
        }

        override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
            val itemViewHolder = holder as ItemViewHolder
            itemViewHolder.bind(items[position])
        }

        override fun getItemCount(): Int {
            return items.size
        }
    }
}

interface OnItemClickListen {
    fun onItemClick(view: View, position: Int)
}


//    private val liveDataList: MutableLiveData<ArrayList<Furniture>> = MutableLiveData()
//
//    fun getLiveData(): LiveData<ArrayList<Furniture>> {
//        return liveDataList
//    }
//    fun getMutableLiveData(): MutableLiveData<ArrayList<Furniture>> {
//        return liveDataList
//    }
//
//    fun addSingleItem(singleItem: Furniture) {
//        items.add(singleItem)
//        liveDataList.value = items
//    }
//
//    fun getItemList(): List<Furniture> {
//        return items
//    }