package com.huji.couchmirage

import com.google.ar.sceneform.FrameTime
import com.google.ar.sceneform.Node
import com.google.ar.sceneform.math.Quaternion
import com.google.ar.sceneform.math.Vector3

/****
 * A type of node facing the camera
 */
class CameraFacingNode : Node(){


    override fun onUpdate(p0: FrameTime?) {
        super.onUpdate(p0)

        scene?.let { scene ->
            val cameraPosition = scene.camera.worldPosition
            val nodePosition = this@CameraFacingNode.worldPosition
            val direction = Vector3.subtract(cameraPosition, nodePosition)
            this@CameraFacingNode.worldRotation = Quaternion.lookRotation(direction, Vector3.up())
        }


    }
}