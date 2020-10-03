package com.example.sandy.kotlinfragment

import android.net.Uri
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.MediaController
import android.widget.VideoView
import androidx.fragment.app.Fragment
import com.huji.couchmirage.R
import kotlinx.android.synthetic.main.dialog_video.view.*


/***
 * Show the user video
 */
class VideoAppFrag(var videoResource: Int) : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        // setup view
        val v: View = inflater.inflate(R.layout.dialog_video, container, false)
        v.go_back.setOnClickListener {
            val fManager = activity!!.supportFragmentManager
            val tx = fManager.beginTransaction()
            tx.add(R.id.frag, AppDescriptionFrag())
            tx.addToBackStack(null)
            tx.commit()
        }

        // init the video
        setupVideoPlayBack(v, videoResource)


        return v

    }

    private fun setupVideoPlayBack(v: View, videoResource: Int) {
        // init the video
        val videoView: VideoView = v.video_View
        val mediaController = MediaController(activity)
        mediaController.setAnchorView(videoView)
        mediaController.visibility = View.GONE
        videoView.setMediaController(mediaController)
        videoView.setVideoURI(
            Uri.parse(
                "android.resource://" + activity!!.getPackageName().toString() + "/" + videoResource
            )
        )

        videoView.start()

    }

}