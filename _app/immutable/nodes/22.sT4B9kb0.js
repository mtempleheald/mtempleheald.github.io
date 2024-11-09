import{a as n,t as s}from"../chunks/disclose-version.1SaWgZ9i.js";import"../chunks/legacy.8a7pGasK.js";import{s as l,f as i,i as p,r as d,g as c}from"../chunks/runtime.B66Dd-K4.js";import{h as r}from"../chunks/html.DcSxObny.js";var u=s(`<h1>LineageOS on OnePlus Nord N10</h1> <p>At this time there is no official image for the OnePlus Nord N10, so I’m piecing together bits of information from various sources.</p> <h2>Preparation (desktop)</h2> <ol><li>Install ADB tools on Ubuntu <a href="https://wiki.lineageos.org/adb_fastboot_guide.html#installing-adb-and-fastboot" rel="nofollow">Lineage wiki</a></li> <li>Install <a href="https://developer.android.com/studio/run/device" rel="nofollow">android-sdk-platform-tools-common</a> and check permissions (if udev permission errors appear later)
Run all <code>adb</code> commands from <code>~/adb-fastboot/platform-tools</code></li> <li>Download <a href="https://www.oneplus.com/uk/support/softwareupgrade/details?code=PM1605857280263" rel="nofollow">OnePlus official build</a> just in case</li></ol> <h2>Preparation (phone)</h2> <ol><li>Charge and try out the new phone camera/wifi (not used sim card/ data)</li> <li>Upgrade to latest OxygenOS</li> <li>Unlock developer settings (seven taps on build number in system settings)</li> <li>Enable USB debugging (Developer settings)</li></ol> <h1>Oneplus recovery steps</h1> <p>Always best to start knowing you can undo all of your mistakes before you commit.</p> <p>Bootloader may need to be unlocked first <code>fastboot oem unlock</code></p> <p><code>adb devices</code> will start the adb then find the device <code>adb reboot bootloader</code> will reboot the attached device into the bootloader <code>fastboot devices</code> will put us in fastboot mode</p> <h2>Generate recovery.img from payload.zip</h2> <ol><li><a href="https://www.oneplus.com/uk/support/softwareupgrade/details?code=PM1605857280263" rel="nofollow">Download official rom from OnePlus</a></li> <li><a href="https://www.droidwin.com/extract-stock-recovery-oneplus-oxygenos-stock-rom/" rel="nofollow">Extract recovery image from official rom</a><br> <code>sudo apt install python3-pip</code> <code>python3 -m pip install protobuf</code> <code>python3 payload_dumper.py payload.bin</code> This outputs files to output directory in payload_dumper directory, to use in next step.</li> <li><a href="https://www.droidwin.com/restore-oneplus-nord-stock-fastboot-commands/" rel="nofollow">Recovery in fastboot</a></li></ol> <p>I’ve removed logo.img since it doesn’t appear in my source payload dump.</p> <pre class="language-bash"><!></pre> <p><code>fastboot oem lock</code> will re-enable oem locking and clear personal data in the process, so if planning to do this, do it now.</p> <p>Use the install wizard as if opening the box fresh from OnePlus.</p> <h2>Installing LineageOS unofficial image</h2> <ol><li>Download <a href="https://forum.xda-developers.com/t/rom-unofficial-lineageos-18-1-oneplus-nord-n10-billie.4255655/" rel="nofollow">unofficial rom for OnePlus Nord N10/bille</a></li> <li>Download <a href="https://github.com/topjohnwu/Magisk/releases" rel="nofollow">Magisk.apk</a></li> <li>Unlock the bootloader following <a href="https://wiki.lineageos.org/devices/avicii/install" rel="nofollow">instructions for the Nord N100</a> Enable USB debugging again after reboot. Note that OEM Unlocking is now greyed out.</li> <li>Run <code>adb devices</code> to verify that we can talk to the device.</li> <li>Run <code>adb reboot bootloader</code> followed by <code>fastboot devices</code> to load the bootloader screen</li> <li>Run <code>fastboot flash recovery &lt;path/to/recovery.img&gt;</code> to send recovery to the device.<br> Navigate to <em>Recovery Mode</em> using the volume keys and press power button to apply</li> <li>From the Recovery mode screen select <code>factory reset</code></li> <li>After restart and re-enable of USB debugging go back to bootloader screen</li> <li>Run <code>fastboot boot &lt;path/to/recovery.img&gt;</code></li> <li>Navigate using the volume keys to <em>Apply from ADB</em>, at this point run <code>adb sideload &lt;path/to/rom.zip&gt;</code></li> <li>Reboot device from the menu. Note that OnePlus startup logo has been replaced by LineageOS.</li> <li>Install Magisk following <a href="https://topjohnwu.github.io/Magisk/install.html" rel="nofollow">official instructions</a></li></ol> <p>I had various issues after trying this, ultimately realising that the forum post was written for a different Nord N10 model (BE2026 vs BE2029).</p> <h1>Installing GSI official image</h1> <p>Looking at GSI alternative images required knowledge of hardware.</p> <p><code>adb shell</code> then <code>getprop</code> gives:</p> <p>[ro.vendor.product.cpu.abilist]: [arm64-v8a,armeabi-v7a,armeabi][ro.vendor.product.cpu.abilist32]: [armeabi-v7a,armeabi][ro.vendor.product.cpu.abilist64]: [arm64-v8a]</p> <p><a href="https://github.com/penn5/TrebleCheck" rel="nofollow">Treble Info app</a> gives:</p> <ul><li>Required image: system-arm64-ab.img.xz</li> <li>System as Root: / use an A/B OS</li> <li>Architecture: ARM64</li></ul> <p>So I’m looking for the arm64 A/B image.</p> <ol><li>Download <a href="https://forum.xda-developers.com/t/gsi-11-lineageos-18-x-gsi-all-archs.4205461/" rel="nofollow">GSI Lineage)S 18 rom</a></li> <li>Extract it <code>unxz --decompress lineage-18.1-20210615-UNOFFICIAL-treble_arm64_bvS.img.xz</code></li> <li>Install following the <a href="https://forum.xda-developers.com/t/flashing-gsi-roms-onto-your-nord-n10-5g.4294113/" rel="nofollow">Instructions</a></li></ol> <p><code>adb reboot bootloader</code> <code>fastboot reboot fastboot</code> <code>fastboot --disable-verity --disable-verification flash vbmeta ../../Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/vbmeta.img</code> <code>fastboot reboot fastboot</code> <code>fastboot erase system</code> <code>fastboot delete-logical-partition product</code> <code>fastboot flash system GSI.img</code> <code>fastboot -w</code> <code>fastboot reboot</code></p> <p>LineageOS boots up fine, wifi working, no app store.</p> <h2>MicroG</h2> <p><a href="https://microg.org/download.html" rel="nofollow">Download via F-Droid repo</a> Depends on Signature spoofing which is not currently available on Android 11 LineageOS GSI rom images.</p> <p>The whole point of this exercise was to degoogle, I’m not happy with it for now, so will come back to it sometime.
Meanwhile I’m going back to OxygenOS but will try out the FDroid store apps.</p>`,1);function h(e){var o=u(),a=l(i(o),26),t=p(a);r(t,()=>`<code class="language-bash">fastboot -w
fastboot flash boot <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/boot.img
fastboot flash dtbo <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/dtbo.img
fastboot flash modem <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/modem.img
fastboot flash recovery <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/recovery.img
fastboot --disable-verity flash vbmeta <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/vbmeta.img
fastboot --disable-verity flash vbmeta_system <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/vbmeta_system.img
fastboot <span class="token function">reboot</span> fastboot
fastboot flash abl <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/abl.img
fastboot flash aop <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/aop.img
fastboot flash bluetooth <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/bluetooth.img
fastboot flash devcfg <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/devcfg.img
fastboot flash dsp <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/dsp.img
fastboot flash featenabler <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/featenabler.img
fastboot flash hyp <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/hyp.img
fastboot flash imagefv <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/imagefv.img
fastboot flash keymaster <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/keymaster.img
fastboot flash oem_stanvbk <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/oem_stanvbk.img
fastboot flash odm <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/odm.img
fastboot flash qupfw <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/qupfw.img
fastboot flash storsec <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/storsec.img
fastboot flash tz <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/tz.img
fastboot flash uefisecapp <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/uefisecapp.img
fastboot flash xbl <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/xbl.img
fastboot flash xbl_config <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/xbl_config.img
fastboot flash system <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/system.img
fastboot flash vendor <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/vendor.img
fastboot flash product <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/Downloads/LineageOS/OxygenOS_14.E.11_OTA_011_payload_dump/product.img
fastboot <span class="token function">reboot</span> bootloader</code>`),d(a),c(36),n(e,o)}export{h as component};
