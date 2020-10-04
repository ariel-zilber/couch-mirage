package com.example.sandy.kotlinfragment

import android.content.Context
import android.media.AudioManager
import android.media.MediaPlayer
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
class VideoAppFrag(var videoResource: Int, var technicalPage: Boolean) : Fragment() {

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

            //
            if (technicalPage) {
                tx.add(R.id.frag, AppTechnicalDescriptionFrag())

            } else {
                tx.add(R.id.frag, AppDescriptionFrag())
            }

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



        videoView.setOnPreparedListener(MediaPlayer.OnPreparedListener()
        { mp ->
            mp.setVolume(0f, 0f);
            mp.setLooping(false);
        })




        videoView.start()

    }

    fun enableSound(sound: Int, mp: MediaPlayer) {
        val f = java.lang.Float.valueOf(sound.toFloat())
        mp.setVolume(f, f)
        mp.isLooping = true
        val audioManager =
            context!!.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC) //Max Volume 15
        audioManager.getStreamVolume(AudioManager.STREAM_MUSIC) //this will return current volume.
        audioManager.setStreamVolume(
            AudioManager.STREAM_MUSIC,
            sound,
            AudioManager.FLAG_PLAY_SOUND
        ) //here you can set custom volume.
    }
}