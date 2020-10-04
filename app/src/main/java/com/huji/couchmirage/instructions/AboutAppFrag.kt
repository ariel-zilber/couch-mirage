package com.example.sandy.kotlinfragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.huji.couchmirage.R
import kotlinx.android.synthetic.main.app_about_frag.view.*


class AboutAppFrag() : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        //
        var v: View = inflater.inflate(R.layout.app_about_frag, container, false)
        v.about_navigation.setOnClickListener {

            var fManager = activity!!.supportFragmentManager

            var tx = fManager.beginTransaction()
            tx.add(R.id.frag, AppTechnicalDescriptionFrag())
            tx.addToBackStack(null)
            tx.commit()


        }



        return v

    }


}