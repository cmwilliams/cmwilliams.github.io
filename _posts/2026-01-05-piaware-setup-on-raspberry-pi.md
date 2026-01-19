---
title: Piaware Setup on Raspberry Pi
categories: [piaware]
---

## Introduction

In this article, we will walk through the process of setting up Piaware on a Raspberry Pi. Piaware is a software package that allows you to receive and share ADS-B data from aircraft. By following these steps, you will be able to set up your Raspberry Pi to receive and share this data effectively.

## Requirements

Before we begin, make sure you have the following:

- A Raspberry Pi (any model should work, but Raspberry Pi 3 or later is recommended)
- A microSD card (at least 8GB)
- A power supply for the Raspberry Pi
- An internet connection (Wi-Fi or Ethernet)
- An ADS-B receiver (USB dongle)

## Step 1: Prepare the Raspberry Pi

1. **Download the Raspberry Pi OS**: Go to the official Raspberry Pi website and download the latest version of Raspberry Pi OS.
2. **Flash the OS to the microSD card**: Use a tool like Balena Etcher to flash the downloaded OS image onto your microSD card.
3. **Insert the microSD card**: Once the flashing process is complete, insert the microSD card into your Raspberry Pi.

## Step 2: Boot the Raspberry Pi

1. Connect your Raspberry Pi to a monitor, keyboard, and power supply.
2. Power on the Raspberry Pi and follow the on-screen instructions to complete the initial setup.
3. Make sure to connect to the internet during the setup process.

## Step 3: Install Piaware

1. Open a terminal on your Raspberry Pi.
2. Update the package list and install the necessary dependencies:

   ```bash
   sudo apt-get update
   sudo apt-get install -y git
   ```

3. Clone the Piaware repository:

   ```bash
   git clone https://github.com/flightaware/piaware.git
   ```

4. Navigate to the Piaware directory:

   ```bash
   cd piaware
   ```

5. Run the installation script:

   ```bash
   sudo ./install.sh
   ```

## Step 4: Configure Piaware

1. After installation, you will need to configure Piaware. You can do this by editing the configuration file:

   ```bash
   sudo nano /etc/piaware.conf
   ```

2. Add your FlightAware username and password to the configuration file:

   ```
   flightaware_user YOUR_USERNAME
   flightaware_password YOUR_PASSWORD
   ```

3. Save and exit the editor.

## Step 5: Connect the ADS-B Receiver

1. Plug your ADS-B USB dongle into one of the USB ports on the Raspberry Pi.
2. Verify that the receiver is recognized by running:

   ```bash
   lsusb
   ```

3. You should see your ADS-B receiver listed.

## Step 6: Start Piaware

1. Start the Piaware service:

   ```bash
   sudo systemctl start piaware
   ```

2. To ensure that Piaware starts on boot, enable the service:

   ```bash
   sudo systemctl enable piaware
   ```

## Conclusion

Congratulations! You have successfully set up Piaware on your Raspberry Pi. You can now monitor and share ADS-B data. For further customization and advanced features, refer to the official Piaware documentation.

Feel free to explore other articles on this blog for more technical tutorials and tips!