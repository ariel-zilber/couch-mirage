package com.huji.couchmirage.ar

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.provider.Settings
import androidx.core.app.ActivityCompat
import com.google.ar.sceneform.ux.ArFragment

/**
 *
 * Writing Ar Fragment extends the ArFragment class to include the WRITER_EXTERNAL_STORAGE
 * permission. This adds this permission to the list of permissions presented to the user for
 * granting.
 */
class WritingArFragment : ArFragment() {
    override fun getAdditionalPermissions(): Array<String?> {
        val additionalPermissions = super.getAdditionalPermissions()
        val permissionLength =
            additionalPermissions?.size ?: 0
        val permissions =
            arrayOfNulls<String>(permissionLength + 1)
        permissions[0] = Manifest.permission.WRITE_EXTERNAL_STORAGE
        if (permissionLength > 0) {
            System.arraycopy(
                additionalPermissions!!,
                0,
                permissions,
                1,
                additionalPermissions.size
            )
        }
        return permissions
    }

    fun hasWritePermission(): Boolean {
        return (ActivityCompat.checkSelfPermission(
            requireActivity(), Manifest.permission.WRITE_EXTERNAL_STORAGE
        )
                === PackageManager.PERMISSION_GRANTED)
    }

    /** Launch Application Setting to grant permissions.  */
    fun launchPermissionSettings() {
        val intent = Intent()
        intent.action = Settings.ACTION_APPLICATION_DETAILS_SETTINGS
        intent.data = Uri.fromParts(
            "package",
            requireActivity().packageName,
            null
        )
        requireActivity().startActivity(intent)
    }
}
