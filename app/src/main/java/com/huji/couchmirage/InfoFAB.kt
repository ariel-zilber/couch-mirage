package com.huji.couchmirage

import android.content.Context
import android.util.AttributeSet
import com.google.android.material.floatingactionbutton.FloatingActionButton


enum class InfoStage {
    RED, YELLOW, GREEN
}

class InfoFAB : FloatingActionButton {
    constructor(context: Context) : super(context) {}
    constructor(
        context: Context,
        attrs: AttributeSet?
    ) : super(context, attrs) {

    }

    constructor(
        context: Context,
        attrs: AttributeSet?,
        defStyleAttr: Int
    ) : super(context, attrs, defStyleAttr) {

    }


    private var stage = InfoStage.RED


    public fun getStage(): InfoStage {
        return stage
    }

    public fun setStage(stage: InfoStage) {
        this.stage = stage
    }

}