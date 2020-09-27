package com.huji.couchmirage.ar


import android.app.Activity
import android.content.Context
import android.util.AttributeSet
import android.view.View
import androidx.constraintlayout.widget.ConstraintLayout
import com.google.ar.sceneform.ux.HandMotionAnimation
import com.google.ar.sceneform.ux.HandMotionView
import com.huji.couchmirage.R

/**
 *  A custom hand gesture animation.
 */
class CustomMotionView : HandMotionView {

    constructor(context: Context?) : super(context) {}
    constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {}

    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
        val container =
            (context as Activity).findViewById<View>(R.id.animation) as ConstraintLayout


        container.visibility = View.VISIBLE
    }


}
