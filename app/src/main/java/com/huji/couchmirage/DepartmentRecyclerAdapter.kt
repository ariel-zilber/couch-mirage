package com.huji.couchmirage

import android.os.Parcel
import android.os.Parcelable
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import kotlinx.android.synthetic.main.layout_department_list_item.view.*

class DepartmentRecyclerAdapter() : RecyclerView.Adapter<RecyclerView.ViewHolder>() {

    private var items: List<Department> = ArrayList()

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        Log.d("onCreateViewHolder", "")

        return DepartmentViewHolder(
            LayoutInflater.from(parent.context)
                .inflate(R.layout.layout_department_list_item, parent, false)
        )

    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {


        when (holder) {

            is DepartmentViewHolder -> {
                holder.bind(items.get(position))
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
        val department_img: ImageView = itemView.department_img
        val department_name: TextView = itemView.department_name

        fun bind(department: Department) {
            department_name.text = department.departmentName


            Log.d("department_name", itemView.department_name.text.toString())
            Log.d("department_img", itemView.department_img.toString())

            val requestOptions =
                RequestOptions() // telling glide what to display if there is some err
                    .placeholder(R.drawable.ic_launcher_background)
                    .error(R.drawable.ic_launcher_background)

            Glide.with(itemView.context).applyDefaultRequestOptions(requestOptions)
                .load(department.departmentImg)
                .into(department_img)
        }
    }
}