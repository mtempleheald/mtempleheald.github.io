# Finally switched to Linux desktop

I'd been meaning to switch to Linux for some time now, around the time I built this PC.
I tried Debian last time and had major issuing even installing it, related to a poor quality power supply which has been replaced since.  
The Windows installer seemed a little more forgiving and I just never got around to retrying, until now.

## The plan

I figured I'd make life relatively easy for myself and go with a popular, easy distro, so Ubuntu for now.
Mostly it has been easy, my aim to get to a position where I can easily use the following software:

- Firefox     - trivial, ootb
- Thunderbird - trivial, ootb
- KeePass     - simple once I found [instructions](https://www.ithowtoo.com/2020/12/18/ubuntu-20-04-installing-keypass/)
- DropBox     - simple to follow [instructions](https://www.dropbox.com/install-linux)
- git         - trivial, `sudo apt-get install git` or `sudo apt-get install git-all`
- VS Code     - simple [instructions](https://code.visualstudio.com/docs/setup/linux#_debian-and-ubuntu-based-distributions)
- Rust        - Trivial `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

To do:
- .NET Core   - https://docs.microsoft.com/en-gb/dotnet/core/install/linux-ubuntu
- Steam
- adb
- alternative browsers
- node/npm/svelte
- docker/k8s/terraform

## The Broadcom issue

Other than getting familiar with the CLI again (I've been lazy since work moved to Windows servers) this hasn't been too painful.  
With one exception...
Broadcom bluetooth, which is combined with wifi on the same device.

Repeatable steps:
`sudo bluetoothctl`
Agent registered
`devices`
Device XXX MX Master
`trust XXX
[CHG] Device XXX Trusted: yes
Changing XXX trust succeeded
`connect XXX`
Attempting to connect to XXX
[CHG] Device XXX Connected: yes
Failed to connect: org.bluez.Error.Failed
[CHG] Device XXX Connected: no
pair XXX
Attempting to pair with XXX
Failed to pair: org.bluez.Error.AuthenticationCanceled
bluetoothd
D-Bus setup failed: Connection ":1.307" is not allowed to own the service "org.bluez" due to security policies in the configuration file

I checked over `/etc/bluetooth/main.conf` but that didn't help.
I explored `/etc/dbus-1/system.d/bluetooth.conf` and group policies associated, no progress.

Until finally I found the real error in Logs:
`Bluetooth: hci0: BCM: Patch brcm/BCM20702A1-13d3-3404.hcd not found`
Proof that this is a software/firmware/driver thing not just me missing something obvious.

This took a lot of digging until I finally found [this](https://askubuntu.com/questions/632336/bluetooth-broadcom-43142-isnt-working/#answer-632348).
A well written post that explains how to do this in detail and why this is necessary.
Honourable mention to [GitHub hosted broadcom firmware](https://github.com/winterheart/broadcom-bt-firmware) though I didn't use this in the end.

Check recent device messages for bluetooth errors using `dmesg | egrep -i 'blue|firm'`:
```
[    2.516055] Bluetooth: hci0: BCM20702A
[    2.517048] Bluetooth: hci0: BCM20702A1 (001.002.014) build 0000
[    2.518036] bluetooth hci0: Direct firmware load for brcm/BCM20702A1-13d3-3404.hcd failed with error -2
[    2.518039] Bluetooth: hci0: BCM: Patch brcm/BCM20702A1-13d3-3404.hcd not found
```

Check Network PCI configuration with `lspci -nnk | grep -iA2 net`:
```02:00.0 Network controller [0280]: Broadcom Inc. and subsidiaries BCM4352 802.11ac Wireless Network Adapter [14e4:43b1] (rev 03)
	Subsystem: AzureWave BCM4352 802.11ac Wireless Network Adapter [1a3b:2123]
```

and USB device configuration with `lsusb`:
```
Bus 003 Device 004: ID 13d3:3404 IMC Networks BCM20702A0
```

Download [Windows driver](http://drivers.softpedia.com/get/BLUETOOTH/Broadcom/ASUS-X99-DELUXE-Broadcom-Bluetooth-Driver-6515800-12009860.shtml#download)
Extract and find file bcbtums-*.inf, I went for Windows 8.1 64bit version.
In file find `VID_13d3&PID_3404` (values from lsusb command)
```
line 148: %AzBtModule.DeviceDesc%=BlueRAMUSB3404,         USB\VID_13D3&PID_3404       ; 4352HMB Azurewave Module
line 234: %AzBtModule.DeviceDesc%=RAMUSB3404,         USB\VID_13D3&PID_3404       ; 4352HMB Azurewave Module
```
In the same file search for this DeviceDesc to find the filename of the driver:
```
[RAMUSB3404.CopyList]
bcbtums.sys
btwampfl.sys
BCM20702A1_001.002.014.1443.1479.hex
```
Copy .hex file to $HOME and convert to hcd:
```
git clone git://github.com/jessesung/hex2hcd.git
cd hex2hcd/
make
cd $HOME
~/hex2hcd/hex2hcd ~/BCM20702A1_001.002.014.1443.1479.hex ~/BCM20702A1-13d3-3404.hcd
```
Copy file to firmware directory:
```
sudo cp ~/BCM20702A1-13d3-3404.hcd /lib/firmware/brcm
```
Turn it off and on again.
Huzzah!  (Just lucky I kept my old mouse or I'd probably have abandoned the whole endeavour)

To be continued...

---

1 week later...

So, after a minor upgrade and a restart I've lost wifi, but bluetooth is still working.
Luckily I still have a 25m ethernet cable and an old wired mouse lying around.
[This](https://itsfoss.com/fix-no-wireless-network-ubuntu/) seems to describe the same problem but the fix didn't help me.

Under Software & Updates > Additional Drivers I see that my Wireless Network Adapter is not being used.
I try to enable it and see the error 
```
pk-client-error-quark: Error while installing package: installed bcmwl-kernel-source package post-installation script subprocess returned error exit status 10 (313)
```

Apparently [Canonical forget to upgrade bcmwl-kernel-source](https://askubuntu.com/questions/1305699/bcmwl-kernel-source-broken-on-kernel-5-8-0-34-generic#answer-1305819)
`sudo apt purge -y bcmwl-kernel-source` to remove the package that isn't working
`sudo apt autoremove` to tidy up
Option 1 [install pkg](http://mirrors.kernel.org/ubuntu/pool/restricted/b/bcmwl/bcmwl-kernel-source_6.30.223.271+bdcom-0ubuntu7_amd64.deb) seems to have brought back wifi, and bluetooth's still working we'll see how long this lasts...

The most irritating thing here is that this is a desktop, I have a long ethernet cable and I'd be happy with a wired mouse, it just happens to be wireless, so none of this is really necessary.

I'm getting the impression I need to actually understand the fix not just blindly apply internet answers!

Let's start with the kernel version since that seems to be where this problem starts.
`cat /proc/version_signature`
Ubuntu 5.8.0-36.40~20.04.1-generic 5.8.18

How am I meant to know that bcmwl-kernel-source 6.30... compiles with kernel 5.8?  
Parking this for another day, will see if the fix persists...
