package com.example.sandy.kotlinfragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.huji.couchmirage.R
import kotlinx.android.synthetic.main.greetings_frag.view.*

class HomeFrag(): Fragment()
{

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        var v=inflater.inflate(R.layout.greetings_frag,container,false)

        v.greetings_next_page.setOnClickListener {

            var fManager=activity!!.supportFragmentManager

            var tx =fManager.beginTransaction()
            tx.add(R.id.frag,AboutAppFrag( ))
            tx.addToBackStack(null)
            tx.commit()


        }



        return v
    }


}