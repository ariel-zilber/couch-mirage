package com.huji.couchmirage.greetings;

import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;

public class SquareImageButton extends androidx.appcompat.widget.AppCompatImageButton {

    public SquareImageButton(Context context) {
        super(context);


        // TODO Auto-generated constructor stub
    }

    public SquareImageButton(Context context, AttributeSet attrs) {
        super(context, attrs);
        // TODO Auto-generated constructor stub
        setBackground(null);

    }

    public SquareImageButton(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        // TODO Auto-generated constructor stub
        setBackground(null);

    }

    int squareDim = 1000000000;

    @Override
    public void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);


        int h = this.getMeasuredHeight();
        int w = this.getMeasuredWidth();
        int curSquareDim = Math.min(w, h);
        // Inside a viewholder or other grid element,
        // with dynamically added content that is not in the XML,
        // height may be 0.
        // In that case, use the other dimension.
        if (curSquareDim == 0)
            curSquareDim = Math.max(w, h);

        if (curSquareDim < squareDim) {
            squareDim = curSquareDim;
        }

        Log.d("MyApp", "h " + h + "w " + w + "squareDim " + squareDim);


        setMeasuredDimension(squareDim, squareDim);

    }

}