# Setup for Mediapipe

# object_detection example

# Raspberry Pi 4 or 5

## Prerequisites

- Raspberry Pi 4 or 5
- 128GB USB stick
- Power supply for Raspberry Pi
- Network connection (Wi-Fi or Ethernet)
- Computer for initial setup

## 1. Prepare the Raspberry Pi OS

1. Download and install [Raspberry Pi Imager](https://www.raspberrypi.com/software/)
2. Insert the 128GB USB stick into your computer
3. Open Raspberry Pi Imager and configure:
   - **Choose OS**: Select "64 bit Raspberry Pi OS with desktop"
   - **Choose Storage**: Select your 128GB USB stick
   - Click the ⚙️ (Advanced Options) icon and set:
     - Hostname: `my_mediapipe_pi` (or preferred name)
     - Enable SSH with password authentication
     - Username and password (e.g., `pi` / `your-secure-password`)
     - Configure wireless network (if not using Ethernet)
4. Click **Write** and wait for completion
5. Insert the USB stick into your Raspberry Pi 4 and power it on

## 2. Connect to the Raspberry Pi

1. Find your Pi's IP address (check router or use `hostname -I` if connected to a display)
2. SSH into the Pi:

```bash
ssh pi@my_mediapipe.pi.local
# Use the preferred username and hostname from step 1 bullet 3)
# Or use the IP address:
ssh pi@<Raspberry_Pi_IP>
```

## 3. Update the System

Update and upgrade all packages:

```bash
sudo apt update && sudo apt upgrade -y
```

## 4. Enable VNC Server (optional)

ssh in and run:

```bash
sudo raspi-config
```

Goto "interface Options" and enable vnc server  
 Select finish

## 5. System Update and MediaPipe Install

1. Run the command:

```bash
sudo apt update && sudo apt upgrade \-y && sudo apt autoremove –y
```

2. Install OpenCV on the system globally \- Run the command:

```bash
sudo apt install python3-opencv
```

3. Run the commands:

```bash
mkdir \~/Documents/development
cd \~/Documents/development
git clone https://github.com/google-ai-edge/mediapipe-samples.git \--depth 1
cd mediapipe-samples
```

4. Create the python virtual environment – Run the command:

```bash
python3 \-m venv \--system-site-packages .
# (make sure the period is at the end)
```

5. Activate the python virtual environment – Run the command:

```bash
source bin/activate
```

6. Run the command:

```bash
cd examples/object\_detection/raspberry\_pi/
```

7. Run the command:

```bash
source setup.sh
# (warnings in the output are okay)
```

8. Either scp or use nano or some editor to get the file detect_0.py into this folder. It is stored in github here:  
   [https://github.com/buckyinsfo/mediapipe-samples/blob/main/examples/object_detection/raspberry_pi/detect_0.py](https://github.com/buckyinsfo/mediapipe-samples/blob/main/examples/object_detection/raspberry_pi/detect_0.py)

9. Execute the program:

```bash
python3 detect\_0.py \--model efficientdet.tflite
```

---

Github Repos:

> Mediapipe Github Repo:
>
> > [https://github.com/google-ai-edge/mediapipe](https://github.com/google-ai-edge/mediapipe)

> Mediapipe Samples Github Repo:
>
> > [https://github.com/google-ai-edge/mediapipe-samples](https://github.com/google-ai-edge/mediapipe-samples)

> My Mediapipe Github Repo where I added detect_0.py which uses picamera2 to access the camera on the raspberry pi.
>
> > [https://github.com/buckyinsfo/mediapipe-samples](https://github.com/buckyinsfo/mediapipe-samples)
