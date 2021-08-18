 


- [Home](/index.php)
- [Linux Commands](/linux-system-administration/linux-commands-introduction.php)
- ▼Linux installation
- [Installation](/linux-system-administration/installation.php)
- [Remote-administration](/linux-system-administration/remote-administration.php)
- [Upgrading](/linux-system-administration/upgrading.php)
- [User-management](/linux-system-administration/user-management.php)
- [File-system](/linux-system-administration/file-system.php)
- [Networking](/linux-system-administration/networking.php)
- [Backup](/linux-system-administration/backup.php)
- [Web-server](/linux-system-administration/web-server.php)
- [Databases](/linux-system-administration/databases.php)
- [FTP](/linux-system-administration/ftp.php)
- [NFS](/linux-system-administration/nfs.php)
- [Email](/linux-system-administration/email.php)
- [Firewall](/linux-system-administration/firewall.php)
- [Software-management](/linux-system-administration/software-management.php)
- [Windows-connectivity](/linux-system-administration/Windows-connectivity.php)
- [Scheduling](/linux-system-administration/scheduling.php)
- [Webmin](/linux-system-administration/webmin.php)
- []()

# Installation Ubuntu Server

Last update on February 26 2020 08:08:38 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Getting started

Why install on Virtual server

- You can use your existing hardware in an efficient way.
- Maintenance and disaster recovery become easy.
- For even a single service like a web server, email server etc. you can assign a Linux virtual machine and thus keep things simple.
- You can run multiple guests on a single machine.

**Virtualization**

**Ubuntu server on VMware on any host**

- Download the server image from http:// www.ubuntu.com/getubuntu/downloadserver
- Start Vmware
- Create a new virtual machine using the image you just downloaded

**Hands-on Installation**

Here is an overview of a sample partitioning on hard drive.

Directory

Type

File System

Typical Size

Size LAB

/boot

Primary

Ext2

100MB

200MB

/var

LMV

XFS

4GB

700MB

/home

LVM

XFS

200MB

3GB

/

LVM

Ext3

50GB

2GB

swap

LVM

Swap

1GB

200MB

**Option 2: Linux guests to an Ubuntu host running KVM**

- KVM is the default virtualization technology that ships with current versions of Ubuntu
- Requires hardware with virtualization extensions

**One host, many guests**

- Ubuntu guest
- Windows guest

**Install a guest**

Can your hardware support KVM?

inspect the cpuinfo virtual file:

    egrep '(vmx|svm)' --color=always /proc/cpuinfo

No output means no KVM support. Try checking virtualization settings in the BIOS.

If there is support, install the required packages:

    $ sudo apt-get install kvm libvirt-bin ubuntu-vmbuilder
    qemu bridge-utils virt-viewer

- libvirt-bin provides libvirtd which you need to administer qemu and kvm instances using libvirt
- kvm is the backend
- ubuntu-vm-builder powerful command line tool for building virtual machines
- bridge-utils provides a bridge from your network to the virtual machines

**Install guest**

Add your user name to the libvirtd group

More about user management later.

    $ sudo usermod -aG libvirtd `id -un`

This will give you access to the system-wide libvirtd instance. Log out and in to make this effective.

Test the installation is valid:

virsh is the main interface for managing guest domains

    $ virsh -c qemu:///system list Id Name State
    $

**Install KVM**

Run the KVM command as root to reveal problems, such as lack of hardware

kvm command can be used to start guest machines directly

    $ sudo kvm
    QEMU PC emulator version 0.9.1 (kvm-62),
    Copyright (c) 2003-2008 Fabrice Bellard
    usage: qemu [options] [disk_image]
    ...
    $

**Setup virtual network**

You need to configure bridge networking to enable network services to the VM and VM access to the outside world. The VM will access the network through the host’s physical network interface.

Install the bridge utility with the following command

    sudo apt-get install bridge-utils

Stop networking services

    sudo invoke-rc.d networking stop

**Setup the virtual network step 2**

    Edit /etc/network/
    interfaces and add
    the br0 section:

content of/etc/network/

    auto lo
    iface lo inet loopback
    auto eth0
    iface eth0 inet manual
    auto br0
    iface br0 inet static
    address 192.168.0.10
    network 192.168.0.0
    netmask 255.255.255.0
    broadcast 192.168.0.255
    gateway 192.168.0.1
    bridge_ports eth0
    bridge_stp off
    bridge_fd 0
    bridge_maxwait 0

You may also use DHCP instead of fixed IP address.

**Setup the virtual network step 3**

Restart networking services:

    sudo /etc/init.d/networking restart

**Previous:** [Linux groups](https://www.w3resource.com/linux-system-administration/groups.php)  
**Next:** [Remote administration ubuntu linux server](https://www.w3resource.com/linux-system-administration/remote-administration.php)

---

<span class="underline"></span>

- **New Content published on w3resource:**
- [Scala Programming Exercises, Practice, Solution](https://www.w3resource.com/scala-exercises/index.php)
- [Python Itertools exercises](https://www.w3resource.com/python-exercises/itertools/index.php)
- [Python Numpy exercises](https://www.w3resource.com/python-exercises/numpy/index.php)
- [Python GeoPy Package exercises](https://www.w3resource.com/python-exercises/geopy/index.php)
- [Python Pandas exercises](https://www.w3resource.com/python-exercises/pandas/index.php)
- [Python nltk exercises](https://www.w3resource.com/python-exercises/nltk/index.php)
- [Python BeautifulSoup exercises](https://www.w3resource.com/python-exercises/BeautifulSoup/index.php)
- [Form Template](https://www.w3resource.com/form-template/)
- [Composer - PHP Package Manager](https://www.w3resource.com/php/composer/a-gentle-introduction-to-composer.php)
- [PHPUnit - PHP Testing](https://www.w3resource.com/php/PHPUnit/a-gentle-introduction-to-unit-test-and-testing.php)
- [Laravel - PHP Framework](https://www.w3resource.com/laravel/laravel-tutorial.php)
- [Angular - JavaScript Framework](https://www.w3resource.com/angular/getting-started-with-angular.php)
- [React - JavaScript Library](https://www.w3resource.com/react/react-js-overview.php)
- [Vue - JavaScript Framework](https://www.w3resource.com/vue/installation.php)
- [Jest - JavaScript Testing Framework](https://www.w3resource.com/jest/jest-getting-started.php)

---

<span class="underline"></span>

<span class="underline"></span>

<span class="underline"></span>

[This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.](https://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US)

©w3resource.com 2011-2021

- [Privacy](https://www.w3resource.com/privacy.php)
- [About](https://www.w3resource.com/about.php)
- [Contact](https://www.w3resource.com/contact.php)
- [Feedback](https://www.w3resource.com/feedback.php)
- [Advertise](https://www.w3resource.com/advertise.php)
