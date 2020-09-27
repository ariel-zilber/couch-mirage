package com.huji.couchmirage.ar

import com.google.ar.sceneform.FrameTime
import com.google.ar.sceneform.Node
import com.google.ar.sceneform.math.Quaternion
import com.google.ar.sceneform.math.Vector3

/**
 * A type of node facing directly to the camera
 */
class CameraFacingNode : Node() {



    override fun onUpdate(p0: FrameTime?) {
        super.onUpdate(p0)

        scene?.let { scene ->

            // current camera position
            val cameraPosition = scene.camera.worldPosition

            // current node position
            val nodePosition = this@CameraFacingNode.worldPosition

            // direction from  camera to node
            val cameraToNode = Vector3.subtract(cameraPosition, nodePosition)

            // update direction of the node
            this@CameraFacingNode.worldRotation =
                Quaternion.lookRotation(cameraToNode, Vector3.up())
        }


    }
}