# Setup for Mediapipe 

# object\_detection example

# Raspberry Pi 4 or 5

1\) Using Raspberry Pi Imager create a new microSD card using:   
**64 bit Raspberry Pi OS with desktop**  
    
2\) (optional) ssh in and run: \>sudo raspi-config   
   Goto "interface Options" and enable vnc server   
       Select finish   
   
3\) Run the command:   
\>sudo apt update && sudo apt upgrade \-y && sudo apt autoremove –y   
   
4\) Install OpenCV on the system globally \- Run the command:    
\> sudo apt install python3-opencv    
   
5\) Run the commands:   
\> mkdir \~/Documents/development   
\> cd \~/Documents/development    
\> git clone https://github.com/google-ai-edge/mediapipe-samples.git \--depth 1   
\> cd mediapipe-samples   
   
6\) Create the python virtual environment – Run the command:   
\> python3 \-m venv \--system-site-packages .   
(make sure the period is at the end)   
   
   
7\) Activate the python virtual environment – Run the command:   
\> source bin/activate   
   
8\) Run the command:   
\> cd examples/object\_detection/raspberry\_pi/   
   
9\) Run the command:   
\> source setup.sh   
(warnings in the output are okay)   
   
10\) Either scp or use nano or some editor to get the file detect\_0.py into this folder. It is stored in github here:     
[https://github.com/buckyinsfo/mediapipe-samples/blob/main/examples/object\_detection/raspberry\_pi/detect\_0.py](https://github.com/buckyinsfo/mediapipe-samples/blob/main/examples/object_detection/raspberry_pi/detect_0.py)   
   
11\) Execute the program:   
\> python3 detect\_0.py \--model efficientdet.tflite   
   

Github Repos:

Mediapipe Github Repo:   
[https://github.com/google-ai-edge/mediapipe](https://github.com/google-ai-edge/mediapipe) 

Mediapipe Samples Github Repo:   
[https://github.com/google-ai-edge/mediapipe-samples](https://github.com/google-ai-edge/mediapipe-samples)

My Mediapipe Github Repo where I added detect\_0.py which uses picamera2 to access the camera on  the raspberry pi.   
[https://github.com/buckyinsfo/mediapipe-samples](https://github.com/buckyinsfo/mediapipe-samples)