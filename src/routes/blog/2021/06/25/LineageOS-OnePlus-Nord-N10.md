# LineageOS on OnePlus Nord N10

At this time there is no official image for the OnePlus Nord N10, so I'm piecing together bits of information from various sources.

## Preparation (desktop)

1. Install ADB tools on Ubuntu [Lineage wiki](https://wiki.lineageos.org/adb_fastboot_guide.html#installing-adb-and-fastboot)
1. Install [android-sdk-platform-tools-common](https://developer.android.com/studio/run/device) and check permissions (if udev permission errors appear later)
   Run all `adb` commands from `~/adb-fastboot/platform-tools` 
1. Download [OnePlus official build](https://www.oneplus.com/uk/support/softwareupgrade/details?code=PM1605857280263) just in case 


## Preparation (phone)

1. Charge and try out the new phone camera/wifi (not used sim card/ data)
1. Upgrade to latest OxygenOS
1. Unlock developer settings (seven taps on build number in system settings)
1. Enable USB debugging (Developer settings)


# Oneplus recovery steps

Always best to start knowing you can undo all of your mistakes before you commit.

Bootloader may need to be unlocked first `fastboot oem unlock`

`adb devices` will start the adb then find the device
`adb reboot bootloader` will reboot the attached device into the bootloader
`fastboot devices` will put us in fastboot mode

## Generate recovery.img from payload.zip

1. [Download official rom from OnePlus](https://www.oneplus.com/uk/support/softwareupgrade/details?code=PM1605857280263)  
1. [Extract recovery image from official rom](https://www.droidwin.com/extract-stock-recovery-oneplus-oxygenos-stock-rom/)  
   `sudo apt install python3-pip`
   `python3 -m pip install protobuf`
   `python3 payload_dumper.py payload.bin` 
   This outputs files to output directory in payload_dumper directory, to use in next step.
1. [Recovery in fastboot](https://www.droidwin.com/restore-oneplus-nord-stock-fastboot-commands/)

I've removed logo.img since it doesn't appear in my source payload dump.
```bash
fastboot -w
fastboot flash boot ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/boot.img
fastboot flash dtbo ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/dtbo.img
fastboot flash modem ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/modem.img
fastboot flash recovery ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/recovery.img
fastboot --disable-verity flash vbmeta ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/vbmeta.img
fastboot --disable-verity flash vbmeta_system ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/vbmeta_system.img
fastboot reboot fastboot
fastboot flash abl ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/abl.img
fastboot flash aop ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/aop.img
fastboot flash bluetooth ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/bluetooth.img
fastboot flash devcfg ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/devcfg.img
fastboot flash dsp ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/dsp.img
fastboot flash featenabler ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/featenabler.img
fastboot flash hyp ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/hyp.img
fastboot flash imagefv ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/imagefv.img
fastboot flash keymaster ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/keymaster.img
fastboot flash oem_stanvbk ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/oem_stanvbk.img
fastboot flash odm ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/odm.img
fastboot flash qupfw ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/qupfw.img
fastboot flash storsec ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/storsec.img
fastboot flash tz ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/tz.img
fastboot flash uefisecapp ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/uefisecapp.img
fastboot flash xbl ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/xbl.img
fastboot flash xbl_config ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/xbl_config.img
fastboot flash system ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/system.img
fastboot flash vendor ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/vendor.img
fastboot flash product ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/product.img
fastboot reboot bootloader
```

`fastboot oem lock` will re-enable oem locking and clear personal data in the process, so if planning to do this, do it now.

Use the install wizard as if opening the box fresh from OnePlus.












## Installing LineageOS unofficial image

1. Download [unofficial rom for OnePlus Nord N10/bille](https://forum.xda-developers.com/t/rom-unofficial-lineageos-18-1-oneplus-nord-n10-billie.4255655/)
1. Download [Magisk.apk](https://github.com/topjohnwu/Magisk/releases)
1. Unlock the bootloader following [instructions for the Nord N100](https://wiki.lineageos.org/devices/avicii/install)
   Enable USB debugging again after reboot.  Note that OEM Unlocking is now greyed out.
1. Run `adb devices` to verify that we can talk to the device.
1. Run `adb reboot bootloader` followed by `fastboot devices` to load the bootloader screen
1. Run `fastboot flash recovery <path/to/recovery.img>` to send recovery to the device.  
   Navigate to _Recovery Mode_ using the volume keys and press power button to apply
1. From the Recovery mode screen select `factory reset`
1. After restart and re-enable of USB debugging go back to bootloader screen
1. Run `fastboot boot <path/to/recovery.img>`
1. Navigate using the volume keys to _Apply from ADB_, at this point run `adb sideload <path/to/rom.zip>`
1. Reboot device from the menu.  Note that OnePlus startup logo has been replaced by LineageOS.
1. Install Magisk following [official instructions](https://topjohnwu.github.io/Magisk/install.html)

I had various issues after trying this, ultimately realising that the forum post was written for a different Nord N10 model (BE2026 vs BE2029).  



# Installing GSI official image

Looking at GSI alternative images required knowledge of hardware. 

`adb shell` then `getprop` gives:  

[ro.vendor.product.cpu.abilist]: [arm64-v8a,armeabi-v7a,armeabi]
[ro.vendor.product.cpu.abilist32]: [armeabi-v7a,armeabi]
[ro.vendor.product.cpu.abilist64]: [arm64-v8a]

[Treble Info app](https://github.com/penn5/TrebleCheck) gives:
- Required image: system-arm64-ab.img.xz
- System as Root: / use an A/B OS
- Architecture: ARM64

So I'm looking for the arm64 A/B image.

1. Download [GSI Lineage)S 18 rom](https://forum.xda-developers.com/t/gsi-11-lineageos-18-x-gsi-all-archs.4205461/)
1. Extract it `unxz --decompress lineage-18.1-20210615-UNOFFICIAL-treble_arm64_bvS.img.xz`
1. Install following the [Instructions](https://forum.xda-developers.com/t/flashing-gsi-roms-onto-your-nord-n10-5g.4294113/)

`adb reboot bootloader`
`fastboot reboot fastboot`
`fastboot --disable-verity --disable-verification flash vbmeta ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/vbmeta.img`
`fastboot reboot fastboot`
`fastboot erase system`
`fastboot delete-logical-partition product`
`fastboot flash system GSI.img`
`fastboot -w`
`fastboot reboot`

LineageOS boots up fine, wifi working, no app store.


## MicroG

[Download via F-Droid repo](https://microg.org/download.html)
Depends on Signature spoofing which is not currently available on Android 11 LineageOS GSI rom images.

The whole point of this exercise was to degoogle, I'm not happy with it for now, so will come back to it sometime.
Meanwhile I'm going back to OxygenOS but will try out the FDroid store apps.

