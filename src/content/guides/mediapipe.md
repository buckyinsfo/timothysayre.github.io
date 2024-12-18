# Setting Up MediaPipe Object Detection on Raspberry Pi

This guide provides step-by-step instructions for setting up MediaPipe's object detection example on a Raspberry Pi 4 or 5.

## Prerequisites
- Raspberry Pi 4 or 5
- MicroSD card
- Raspberry Pi camera
- Monitor, keyboard, and mouse (or SSH/VNC access)

## Installation Steps

### 1. Operating System Setup
1. Using Raspberry Pi Imager, create a new microSD card with:
   - Select "**64 bit Raspberry Pi OS with desktop**"

### 2. Initial Configuration
1. (Optional) Enable VNC Server:
   ```bash
   sudo raspi-config
   # Navigate to "Interface Options"
   # Enable VNC server
   # Select finish
   ```

2. Update System Packages:
   ```bash
   sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y
   ```

### 3. Install Dependencies
1. Install OpenCV globally:
   ```bash
   sudo apt install python3-opencv
   ```

### 4. Set Up MediaPipe
1. Create development directory and clone repository:
   ```bash
   mkdir ~/Documents/development
   cd ~/Documents/development
   git clone https://github.com/google-ai-edge/mediapipe-samples.git --depth 1
   cd mediapipe-samples
   ```

2. Create and activate Python virtual environment:
   ```bash
   python3 -m venv --system-site-packages .
   source bin/activate
   ```

3. Navigate to example directory and run setup:
   ```bash
   cd examples/object_detection/raspberry_pi/
   source setup.sh
   ```
   Note: Warnings in the output are okay

### 5. Configure Detection Script
1. Download the detection script:
   - Get `detect_0.py` from [this repository](https://github.com/buckyinsfo/mediapipe-samples/blob/main/examples/object_detection/raspberry_pi/detect_0.py)
   - Place it in the `raspberry_pi` directory

2. Run the program:
   ```bash
   python3 detect_0.py --model efficientdet.tflite
   ```

## Additional Resources

### GitHub Repositories
- [MediaPipe Main Repository](https://github.com/google-ai-edge/mediapipe)
- [MediaPipe Samples Repository](https://github.com/google-ai-edge/mediapipe-samples)
- [Custom Implementation Repository](https://github.com/buckyinsfo/mediapipe-samples) - Includes `detect_0.py` with picamera2 support

## Notes
- This implementation uses picamera2 for camera access on the Raspberry Pi
- The setup script may show warnings which can be safely ignored
- Make sure your Raspberry Pi camera is properly connected and enabled

---

Last Updated: September 26, 2024