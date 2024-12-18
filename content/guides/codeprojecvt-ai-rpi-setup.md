

Setup for CodeProject.AI Server in Docker Container 
Raspberry Pi 4 or 5


If your OS is already set up and running, skip to bullet point 3.


1. Create a New microSD Card Using Raspberry Pi Imager
   - Select: **64-bit Raspberry Pi OS with desktop**


2. (Optional) Enable VNC Server
   SSH into your Raspberry Pi and run:
sudo raspi-config





- Go to **Interface Options** and enable the **VNC server**
- Select **Finish**


Install Docker Engine


3. Update and upgrade your system:
sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y





4. Install some prerequisite packages:
sudo apt install -y apt-transport-https ca-certificates software-properties-common



5. Download and use the convenience script provided by Docker:
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh



This script should detect your system and install the appropriate version of Docker.


6. After the installation completes, enable the Docker service  to start on boot:
sudo systemctl enable docker



7. Add your user to the `docker` group so you can run Docker commands without `sudo`:


sudo usermod -aG docker $USER



8. Reboot your Raspberry Pi or log out and log back in for the group changes to take effect:


sudo reboot



9. Test the Docker installation by running the `hello-world` container:


docker run hello-world



Install and Run CodeProject.AI Server


10. Run the CodeProject.AI Server


docker run --name CodeProject.AI -d -p 32168:32168 \
--privileged -v /dev/bus/usb:/dev/bus/usb codeproject/ai-server:rpi64



11. In a browser either on the local raspberry Pi or another computer on the same network, navigate to:


http://localhost:32168
or
http://<your-host-name>:32168


CodeProject.AI Links:

https://www.codeproject.com/ai/index.aspx

https://www.codeproject.com/AI/docs/install/running_in_docker.html
