---
title: Running PiAware on macOS: A Complete Setup Guide
tags: [piaware, mac, setup, docker]
---

## Running PiAware on macOS: A Complete Setup Guide

If you're interested in tracking aircraft with ADS-B and feeding data to FlightAware, you might think you need a dedicated Raspberry Pi. But if you have a Mac with an RTL-SDR dongle, you can run the entire setup locally using Docker and dump1090. Here's how I got it working.

## What You'll Need

- A Mac (Intel or Apple Silicon)
- RTL-SDR USB dongle (like the RTL2832U)
- Docker Desktop installed
- Homebrew package manager
- A FlightAware account and feeder ID

## Part 1: Installing dump1090

dump1090 is the software that decodes ADS-B messages from aircraft. We'll build it from source and configure it to run automatically.

### Install Dependencies

First, install the required libraries using Homebrew:

```bash
brew install pkg-config librtlsdr libusb
```

### Build dump1090

Clone and build the FlightAware fork of dump1090:

```bash
cd ~
git clone https://github.com/flightaware/dump1090.git
cd dump1090
make RTLSDR=yes
```

Verify the build supports the features you need:

```bash
make showconfig
```

You should see RTLSDR support enabled.

### Test dump1090

Before setting up automation, verify dump1090 works with your RTL-SDR dongle:

```bash
./dump1090 --net --interactive
```

You should see aircraft data appear in your terminal. Press Ctrl+C to stop it.

## Part 2: Set Up Docker PiAware

Create a `docker-compose.yml` file for PiAware. First, find your Mac's local IP address:

```bash
ipconfig getifaddr en0  # for WiFi
# or
ipconfig getifaddr en1  # for Ethernet
```

Create your `docker-compose.yml`:

```yaml
services:
  piaware:
    image: ghcr.io/sdr-enthusiasts/docker-piaware:latest
    container_name: piaware
    restart: always
    ports:
      - 8080:80
    environment:
      - TZ="America/New_York"
      - FEEDER_ID=your-feeder-id-here
      - BEASTHOST=192.168.50.204  # Use your Mac's IP
      - BEASTPORT=30005
      - ALLOW_MLAT=yes
      - MLAT_RESULTS=yes
      - LAT=39.97371  # Your latitude
      - LONG=-75.58702  # Your longitude
    tmpfs:
      - /run:exec,size=64M
      - /var/log
```

Replace the following values:

- `FEEDER_ID`: Your FlightAware feeder ID
- `BEASTHOST`: Your Mac's actual IP address
- `LAT` and `LONG`: Your receiver's coordinates
- `TZ`: Your timezone

Start the container:

```bash
docker compose up -d
```

## Part 3: Auto-Start dump1090 on Login

To have dump1090 start automatically when you log in, create a Launch Agent.

Create the file `~/Library/LaunchAgents/com.dump1090.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.dump1090</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/YOUR_USERNAME/dump1090/dump1090</string>
        <string>--net</string>
        <string>--quiet</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/tmp/dump1090.log</string>
    <key>StandardErrorPath</key>
    <string>/tmp/dump1090.err</string>
</dict>
</plist>
```

**Important**: Replace `YOUR_USERNAME` with your actual macOS username.

Load and start the Launch Agent:

```bash
launchctl load ~/Library/LaunchAgents/com.dump1090.plist
launchctl start com.dump1090
```

## Verify Everything is Working

Check that dump1090 is listening on the correct port:

```bash
lsof -i :30005
```

You should see dump1090 listed.

Check the PiAware container logs:

```bash
docker logs -f piaware
```

You should see messages indicating it's connected to FlightAware and receiving data from dump1090.

## Accessing Your Data

Once everything is running:

- **PiAware web interface**: http://localhost:8080
- **FlightAware stats**: Check your FlightAware account for your receiver's statistics page

## Troubleshooting

### dump1090 not starting

Check the error log:

```bash
cat /tmp/dump1090.err
```

### PiAware can't connect to dump1090

Verify your Mac's IP address hasn't changed. If it has, update the `BEASTHOST` in your `docker-compose.yml` and restart:

```bash
docker compose down
docker compose up -d
```

### No aircraft detected

- Ensure your RTL-SDR dongle is plugged in
- Check antenna placement (higher is better, near a window)
- Verify dump1090 is receiving data: `tail -f /tmp/dump1090.log`

## Managing the Services

### Stop dump1090

```bash
launchctl stop com.dump1090
```

### Disable auto-start

```bash
launchctl unload ~/Library/LaunchAgents/com.dump1090.plist
```

### Re-enable auto-start

```bash
launchctl load ~/Library/LaunchAgents/com.dump1090.plist
```

### Stop PiAware

```bash
docker compose down
```

## Why This Setup Works

This configuration gives you:

- Automatic startup of both dump1090 and PiAware when you log in
- Persistent feeding to FlightAware
- Easy access to the PiAware web interface
- The ability to use your Mac for other tasks while tracking aircraft

The key is that dump1090 runs natively on macOS to interface with your RTL-SDR hardware, while PiAware runs in Docker and connects to dump1090 over the network via the BEAST protocol on port 30005.

Happy plane spotting!