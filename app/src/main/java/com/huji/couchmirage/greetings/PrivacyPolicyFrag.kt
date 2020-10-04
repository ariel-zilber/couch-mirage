package com.example.sandy.kotlinfragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.webkit.WebViewClient
import androidx.fragment.app.Fragment
import com.huji.couchmirage.R
import com.huji.couchmirage.greetings.ObservableWebView
import kotlinx.android.synthetic.main.app_privacy_policy_frag.view.*


class PrivacyPolicyFrag() : Fragment() {
    private val URL_USAGE_TERMS = "https://sites.google.com/view/couch-mirage/home"

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        var v: View = inflater.inflate(R.layout.app_privacy_policy_frag, container, false)


        val view: ObservableWebView = v.findViewById<View>(R.id.webView) as ObservableWebView
        view.settings.javaScriptEnabled = true
        view.loadUrl(URL_USAGE_TERMS)
        view.setWebViewClient(WebViewClient())
//
//        view.setOnScrollChangedCallback(object : OnScrollChangedCallback {
//            fun onScroll(l: Int, t: Int) {
//                val tek =
//                    Math.floor((view.getContentHeight() * view.getScale()).toDouble()).toInt()
//                if (tek - view.getScrollY() === view.getHeight()) {
//
////                    activity!!.findViewById<Button>(R.id.privacy_next_page).visibility =
////                        View.VISIBLE
//                }
//            }
//
//            override fun onScroll(l: Int, t: Int, oldl: Int, oldt: Int) {
//                onScroll(l, t)
//            }
//        })

//
//        view.setOnScrollChangeListener(View.OnScrollChangeListener { nestedScrollView, scrollX, scrollY, oldScrollX, oldScrollY ->
//            if (view.getChildAt(view.childCount - 1).bottom - view.height - scrollY == 0) {
//                Log.d("SCROLL", "Reached end!")
//            }
//
//
//        })

        //
        v.privacy_next_page.setOnClickListener {

            activity!!.finish()

        }



        return v

    }


}