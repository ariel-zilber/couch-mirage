package com.huji.couchmirage.utils;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.database.Cursor;
import android.media.CamcorderProfile;
import android.media.MediaRecorder;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log;
import android.util.Size;
import android.view.Surface;
import android.widget.Toast;

import com.google.ar.sceneform.SceneView;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.Locale;
import java.text.SimpleDateFormat;

/**
 * Video Recorder class handles recording the contents of a SceneView. It uses MediaRecorder to
 * encode the video. The quality settings can be set explicitly or simply use the CamcorderProfile
 * class to select a predefined set of parameters.
 */
public class VideoRecorder {
    private static final String TAG = "VideoRecorder";
    private static final int DEFAULT_BITRATE = 10000000;
    private static final int DEFAULT_FRAMERATE = 30;

    // recordingVideoFlag is true when the media recorder is capturing video.
    private boolean recordingVideoFlag;

    private MediaRecorder mediaRecorder;

    private Size videoSize;

    private SceneView sceneView;
    private int videoCodec;
    private File videoDirectory;
    private String videoBaseName;
    private File videoPath;
    private int bitRate = DEFAULT_BITRATE;
    private int frameRate = DEFAULT_FRAMERATE;
    private Surface encoderSurface;

    private static final int[] FALLBACK_QUALITY_LEVELS = {
            CamcorderProfile.QUALITY_HIGH,
            CamcorderProfile.QUALITY_2160P,
            CamcorderProfile.QUALITY_1080P,
            CamcorderProfile.QUALITY_720P,
            CamcorderProfile.QUALITY_480P
    };
    private Activity activity;

    public VideoRecorder(Activity activity) {
        this.activity = activity;
    }

    public VideoRecorder() {
        recordingVideoFlag = false;
    }

    public File getVideoPath() {
        return videoPath;
    }

    public void setBitRate(int bitRate) {
        this.bitRate = bitRate;
    }

    public void setFrameRate(int frameRate) {
        this.frameRate = frameRate;
    }

    public void setSceneView(SceneView sceneView) {
        this.sceneView = sceneView;
    }

    /**
     * Toggles the state of video recording.
     *
     * @return true if recording is now active.
     */
    public boolean onToggleRecord() {
        if (recordingVideoFlag) {
            stopRecordingVideo();
        } else {
            startRecordingVideo();
        }
        return recordingVideoFlag;
    }

    private void startRecordingVideo() {
        if (mediaRecorder == null) {
            mediaRecorder = new MediaRecorder();
        }

        try {
            buildFilename();
            setUpMediaRecorder();
        } catch (IOException e) {
            Log.e(TAG, "Exception setting up recorder", e);
            return;
        }

        // Set up Surface for the MediaRecorder
        encoderSurface = mediaRecorder.getSurface();

        sceneView.startMirroringToSurface(
                encoderSurface, 0, 0, videoSize.getWidth(), videoSize.getHeight());

        recordingVideoFlag = true;
    }

    private void buildFilename() {
        if (videoDirectory == null) {
            videoDirectory =
                    new File(
                            activity.getExternalFilesDir(Environment.DIRECTORY_MOVIES).getAbsolutePath()
                    );
        }
        if (videoBaseName == null || videoBaseName.isEmpty()) {
            videoBaseName = new SimpleDateFormat("yyyyMMddHHmmss", Locale.getDefault()).format(new Date());
        }
        videoPath =
                new File(
                        videoDirectory, videoBaseName + Long.toHexString(System.currentTimeMillis()) + ".mp4");
        File dir = videoPath.getParentFile();
        if (!dir.exists()) {
            dir.mkdirs();
        }
    }

    private void stopRecordingVideo() {
        // UI
        recordingVideoFlag = false;

        if (encoderSurface != null) {
            sceneView.stopMirroringToSurface(encoderSurface);
            encoderSurface = null;
        }
        // Stop recording
        mediaRecorder.stop();
        mediaRecorder.reset();
    }


    private void setUpMediaRecorder() throws IOException {

        mediaRecorder.setVideoSource(MediaRecorder.VideoSource.SURFACE);
        mediaRecorder.setOutputFormat(MediaRecorder.OutputFormat.MPEG_4);
        mediaRecorder.setOutputFile(videoPath.getAbsolutePath());
        mediaRecorder.setVideoEncodingBitRate(bitRate);
        mediaRecorder.setVideoFrameRate(frameRate);
        mediaRecorder.setVideoSize(videoSize.getWidth(), videoSize.getHeight());
        mediaRecorder.setVideoEncoder(videoCodec);
        mediaRecorder.prepare();

        try {
            mediaRecorder.start();
        } catch (IllegalStateException e) {
            Log.e(TAG, "Exception starting capture: " + e.getMessage(), e);
        }
    }

    public void setVideoSize(int width, int height) {
        videoSize = new Size(width, height);
    }

    public void setVideoQuality(int quality, int orientation) {
        CamcorderProfile profile = null;
        if (CamcorderProfile.hasProfile(quality)) {
            profile = CamcorderProfile.get(quality);
        }
        if (profile == null) {
            // Select a quality  that is available on this device.
            for (int level : FALLBACK_QUALITY_LEVELS) {
                if (CamcorderProfile.hasProfile(level)) {
                    profile = CamcorderProfile.get(level);
                    break;
                }
            }
        }
        if (orientation == Configuration.ORIENTATION_LANDSCAPE) {
            setVideoSize(profile.videoFrameWidth, profile.videoFrameHeight);
        } else {
            setVideoSize(profile.videoFrameHeight, profile.videoFrameWidth);
        }
        setVideoCodec(profile.videoCodec);
        setBitRate(profile.videoBitRate);
        setFrameRate(profile.videoFrameRate);
    }

    public void setVideoCodec(int videoCodec) {
        this.videoCodec = videoCodec;
    }

    public boolean isRecording() {
        return recordingVideoFlag;
    }


}
