package com.huji.couchmirage

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.constraintlayout.widget.ConstraintLayout
import com.google.ar.core.Plane
import com.google.ar.core.TrackingState
import com.google.ar.sceneform.FrameTime
import com.google.ar.sceneform.Scene
import com.google.ar.sceneform.ux.ArFragment

class MyArFragment : ArFragment(), Scene.OnUpdateListener {

    var activity: OpenCameraActivity? = null
    var animationLayout: ConstraintLayout? = null


    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        var view = super.onCreateView(inflater, container, savedInstanceState)

        planeDiscoveryController.hide()
        planeDiscoveryController.setInstructionView(null)
        return view

    }

    override fun onUpdate(p0: FrameTime?) {

        super.onUpdate(p0)


        if (animationLayout!!.visibility != View.VISIBLE) {
            return
        }


        val frame = arSceneView!!.arFrame ?: return
        if (frame.camera.trackingState != TrackingState.TRACKING) {
            return
        }
        for (plane in frame.getUpdatedTrackables(Plane::class.java)) {
            if (plane.trackingState == TrackingState.TRACKING) {
                hideLoadingMessage()
                activity!!.changeInfoStageToYellow()
            }
        }

    }


    private fun hideLoadingMessage() {

        if (animationLayout!!.visibility == View.INVISIBLE) {
            return
        }

        animationLayout!!.visibility = View.INVISIBLE
    }


    private fun showLoadingMessage() {

        if (animationLayout!!.visibility != View.INVISIBLE) {
            return
        }


        animationLayout!!.visibility = View.VISIBLE

    }


    override fun onResume() {
        super.onResume()
        if (arSceneView == null) {
            return
        }

        if (arSceneView!!.session != null) {
            showLoadingMessage()
            activity!!.changeInfoStageToRed()
        }
    }


//    override fun onUpdate(p0: FrameTime?) {
//
//        arFragment.onUpdate(p0)
//
//
//        val animation = findViewById<View>(R.id.animation) as ConstraintLayout
//
//        if (animation.visibility != View.VISIBLE) {
//            return
//        }
//
//
//        val frame = arSceneView!!.arFrame ?: return
//        if (frame.camera.trackingState != TrackingState.TRACKING) {
//            return
//        }
//        for (plane in frame.getUpdatedTrackables(Plane::class.java)) {
//            if (plane.trackingState == TrackingState.TRACKING) {
//                hideLoadingMessage()
//            }
//        }
//
//    }
//


//
//    override fun onResume() {
//        super.onResume()
////        if (arSceneView == null) {
////            return
////        }
////
////        if (arSceneView!!.session != null) {
////            showLoadingMessage()
////        }
//    }


//    private fun showLoadingMessage() {
//        val animation = findViewById<View>(R.id.animation) as ConstraintLayout
//
//        if (animation.visibility != View.INVISIBLE) {
//            return
//        }
//
//
//
//        animation.visibility = View.VISIBLE
//
//    }
//
//
//    private fun hideLoadingMessage() {
//        val animation = findViewById<View>(R.id.animation) as ConstraintLayout
//
//        if (animation.visibility == View.INVISIBLE) {
//            return
//        }
//
//        animation.visibility = View.INVISIBLE
//    }

}