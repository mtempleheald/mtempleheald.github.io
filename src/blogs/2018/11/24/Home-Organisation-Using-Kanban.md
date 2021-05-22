```
As a disorganised, undisciplined administrator of house and home  
I require a permanently visible, virtual Kanban board  
In order to keep control of things
```

So that's the plan, I've been trying to use Trello for this purpose and I love the simplicity (compared to Azure DevOps for example), the android app is good too.  
However it gets lost amongst dozens of browser tabs (plus I hate typing on touch screen), so something is missing.  
I could go physical but if I think of something during a commute, or in a bar or supermarket, I'll forget by the time I get home and this will drive me nuts.  
So I think stick with Trello, but set up a permanent display for it that I can't ignore, worth a try anyway.  

I had a Kindle Fire (2nd Generation) from 2012 lying around so figured I'd use that, though I'd have to work out how to disable the annoying lock screen (not just adverts).  
I installed the KingRoot app and rooted the device, installed Android Studio to get access to [adb](https://developer.android.com/studio/command-line/adb).
Now what?

A few useful things I've learnt about adb:
* Installs by default to C:\Users\<user>\AppData\Local\Android\Sdk\platform-tools - I've not added this to my path
* the Windows drive "This PC\Kindle\Internal storage" maps to "/sdcard"
* ```adb push <windows_source> <android_target>``` sends a file to the android device
* ```adb pull <android_source>``` pulls it back
* ```adb shell``` lets me run commands remotely on the device

So the task at hand is to find out how to turn off the screen lock, even if having the screen on permanently b0rks the device.  
Of all the sites I visited [this](https://android-fix.com/tips-and-tricks/38-how-to-disable-pattern-unlock-via-adb.html) was the clearest.  
But /data/system/locksettings.db and /data/system/gesture.key didn't seem to exist so I was stuck with option 1.  
Slight problem with that in the sqlite3 wasn't on the kindle either, though it is on my Windows machine under Android SDK tools.  
So I rather naively pulled, edited, pushed the database back.  
Success!  Almost!  Yes the lock screen was gone, but I'd also lost the ability to navigate between apps and the keyboard had gone Chinese(?).  Couldn't even get back to the settings to do a factory reset.  


### Hard Factory Reset

I was bored now, this really wasn't worth the effort, but now I've got an unusable device.  
The issue I'd encountered was described quite clearly on the [xda forum](https://forum.xda-developers.com/showthread.php?t=2758306), as was the solution.  
It turns out that the image suggested was too big for my device (/cache directory full), so I went to Amazon itself to find the [correct image](https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=200529680)  
This worked fine, my Kindle is back to normal, steps as follows:

1. Get the image on to the Kindle ``` .\adb push C:\Users\<user>\Downloads\update-kindle-7.5.1_user_5174320.bin /sdcard ```
2. Enter the shell ``` .\adb shell ```
3. Switch to super user ``` su ``` which required me to authorise with a press on the kindle screen
4. Copy the file to the update cache, had to use cat because cp wasn't available ``` cat /sdcard/update-kindle-7.5.1_user_5174320.bin > /cache/update.zip ```
5. exit and exit again to return to Windows prompt
6. Reboot to trigger factory reset ``` .\adb reboot recovery ```

I also considered installing a custom Android ROM rather than the FireOS one but I could not find a live link anywhere for a 2012 device.  