package com.huji.couchmirage.catalog

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.huji.couchmirage.R
import kotlinx.android.synthetic.main.layout_department_single_list_item.view.*

class DepartmentRecyclerAdapter(
    private var listener: OnDepartmentClickListen
) : RecyclerView.Adapter<RecyclerView.ViewHolder>() {

    var items: List<Department> = ArrayList()
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        val textView = LayoutInflater.from(parent.context)
            .inflate(R.layout.layout_department_single_list_item, parent, false)

        val viewHol =
            DepartmentViewHolder(
                textView
            )
        textView.setOnClickListener { v ->
            listener.onDepartmentClick(
                v,
                viewHol.layoutPosition
            )
        }

        return viewHol
    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        when (holder) {
            is DepartmentViewHolder -> {
                holder.bind(items[position])
            }
        }
    }

    override fun getItemCount(): Int {
        return items.size
    }

    fun submitList(departmentList: List<Department>) {
        items = departmentList
    }

    class DepartmentViewHolder
    constructor(itemView: View) : RecyclerView.ViewHolder(itemView) {

        private val departmentImg: ImageView = itemView.department_img
        private val departmentName: TextView = itemView.department_name

        fun bind(department: Department) {
            departmentName.text = department.departmentName
            val requestOptions = RequestOptions()
                .placeholder(R.drawable.ic_launcher_background)
                .error(R.drawable.ic_launcher_background)

            Glide.with(itemView.context).applyDefaultRequestOptions(requestOptions)
                .load(department.departmentImg)
                .into(departmentImg)





        }


    }

    class DepartmentListGridRecyclerAdapter : RecyclerView.Adapter<RecyclerView.ViewHolder>() {
        private var items: List<Department> = ArrayList()

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
            return DepartmentViewHolder(
                LayoutInflater.from(parent.context)
                    .inflate(
                        R.layout.layout_department_single_list_item,
                        parent,
                        false
                    )
            )
        }

        override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
            val departmentViewHolder = holder as DepartmentViewHolder
            departmentViewHolder.bind(items[position])
        }

        override fun getItemCount(): Int {
            return items.size
        }
    }


}

interface OnDepartmentClickListen {
    fun onDepartmentClick(view: View, position: Int)
}

