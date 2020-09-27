package com.huji.couchmirage.ar


import android.app.Activity
import android.content.Context
import android.util.AttributeSet
import android.view.View
import androidx.constraintlayout.widget.ConstraintLayout
import com.google.ar.sceneform.ux.HandMotionAnimation
import com.google.ar.sceneform.ux.HandMotionView
import com.huji.couchmirage.R


class CustomMotionView : HandMotionView {
    private var animation: HandMotionAnimation? = null

    constructor(context: Context?) : super(context) {}
    constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {}

    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
//        clearAnimation()
//
        val container =
            (context as Activity).findViewById<View>(R.id.animation) as ConstraintLayout


        container.visibility = View.VISIBLE
//
//        animation = HandMotionAnimation(container, this)
//        animation!!.repeatCount = Animation.INFINITE
//        animation!!.duration = ANIMATION_SPEED_MS
//        animation!!.startOffset = 5000
//        startAnimation(animation)
//

    }

    companion object {
        private const val ANIMATION_SPEED_MS: Long = 1000
    }
}
