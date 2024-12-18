# Install Home Assistant on Raspberry Pi 4 (Using Docker)

This guide provides step-by-step instructions for setting up Home Assistant on a Raspberry Pi 4 Model B using a 128GB USB stick and Docker.

## Prerequisites
- Raspberry Pi 4 Model B
- 128GB USB stick
- Power supply for Raspberry Pi
- Network connection (Wi-Fi or Ethernet)
- Computer for initial setup

## 1. Prepare the Raspberry Pi OS

1. Download and install [Raspberry Pi Imager](https://www.raspberrypi.com/software/)
2. Insert the 128GB USB stick into your computer
3. Open Raspberry Pi Imager and configure:
   - **Choose OS**: Select "Raspberry Pi OS Lite (64-bit)"
   - **Choose Storage**: Select your 128GB USB stick
   - Click the ⚙️ (Advanced Options) icon and set:
     - Hostname: `homeassistantpi` (or preferred name)
     - Enable SSH with password authentication
     - Username and password (e.g., `pi` / `your-secure-password`)
     - Configure wireless network (if not using Ethernet)
4. Click **Write** and wait for completion
5. Insert the USB stick into your Raspberry Pi 4 and power it on

## 2. Connect to the Raspberry Pi

1. Find your Pi's IP address (check router or use `hostname -I` if connected to a display)
2. SSH into the Pi:
```bash
ssh pi@homeassistantpi.local
# Or use the IP address:
ssh pi@<Raspberry_Pi_IP>
```

## 3. Update the System

Update and upgrade all packages:
```bash
sudo apt update && sudo apt upgrade -y
```

## 4. Install Docker

1. Install Docker using the official script:
```bash
curl -fsSL https://get.docker.com | sh
```

2. Add your user to the Docker group:
```bash
sudo usermod -aG docker $USER
```

3. Log out and back in for changes to take effect:
```bash
logout
```

## 5. Prepare Home Assistant

1. Create the configuration directory:
```bash
mkdir -p ~/homeassistant
```

2. Pull the Home Assistant Docker image:
```bash
docker pull ghcr.io/home-assistant/home-assistant:latest
```

## 6. Run Home Assistant

Start the Home Assistant container:
```bash
docker run -d \
  --name homeassistant \
  --restart=unless-stopped \
  -e TZ=America/Los_Angeles \
  -v ~/homeassistant:/config \
  --network=host \
  ghcr.io/home-assistant/home-assistant:latest
```

> **Note**: Replace `America/Los_Angeles` with your [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

## 7. Access Home Assistant

1. Wait approximately 2-3 minutes for initialization
2. Open a web browser and navigate to:
   - `http://homeassistantpi.local:8123` or
   - `http://<Raspberry_Pi_IP>:8123`
3. Complete the setup wizard to create your admin account

## 8. Verify Auto-Restart

Test that Home Assistant automatically restarts after a system reboot:

1. Reboot the Raspberry Pi:
```bash
sudo reboot
```

2. Wait for the system to restart, then SSH back in and verify the container is running:
```bash
docker ps
```

## 9. Updating Home Assistant

To update to the latest version:
```bash
docker pull ghcr.io/home-assistant/home-assistant:latest
docker stop homeassistant
docker rm homeassistant
docker run -d \
  --name homeassistant \
  --restart=unless-stopped \
  -e TZ=America/Los_Angeles \
  -v ~/homeassistant:/config \
  --network=host \
  ghcr.io/home-assistant/home-assistant:latest
```

## Troubleshooting

- If `homeassistantpi.local` doesn't resolve, use the IP address instead
- Allow a few minutes for Home Assistant to fully initialize on first run
- Check Docker logs if needed: `docker logs homeassistant`

---

You now have Home Assistant running on your Raspberry Pi 4 with automatic restarts and persistent configuration!