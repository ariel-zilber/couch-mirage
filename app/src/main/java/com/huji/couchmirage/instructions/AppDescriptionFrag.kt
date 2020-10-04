package com.example.sandy.kotlinfragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.huji.couchmirage.R
import kotlinx.android.synthetic.main.app_technical_description_frag.view.*


class AppDescriptionFrag() : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        //
        var v: View = inflater.inflate(R.layout.app_description_frag, container, false)


        // set up next button
        v.exit_greeting.setOnClickListener {

            var fManager = activity!!.supportFragmentManager

            var tx = fManager.beginTransaction()
            tx.add(R.id.frag, PrivacyPolicyFrag())
            tx.addToBackStack(null)
            tx.commit()

        }

        // set up video 1 button
        v.textured_surfaces_cv.setOnClickListener {
            var fManager = activity!!.supportFragmentManager

            var tx = fManager.beginTransaction()
            tx.add(
                R.id.frag, VideoAppFrag(
                    R.raw.video_4,false
                )
            )
            tx.commit()

        }

        // set up video 2 button
        v.lighting_cv.setOnClickListener {
            var fManager = activity!!.supportFragmentManager

            var tx = fManager.beginTransaction()
            tx.add(
                R.id.frag, VideoAppFrag(
                    R.raw.video_5,false
                )
            )
            tx.commit()

        }

        // set up video 3 button
        v.moving_cv.setOnClickListener {
            var fManager = activity!!.supportFragmentManager

            var tx = fManager.beginTransaction()
            tx.add(
                R.id.frag, VideoAppFrag(
                    R.raw.video_6,false
                )
            )
            tx.commit()

        }

        return v

    }


}