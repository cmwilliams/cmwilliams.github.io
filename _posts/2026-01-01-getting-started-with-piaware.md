---
title: Getting Started with Piaware
tags: [piaware, raspberry-pi, ads-b]
---

Piaware is a powerful tool that allows you to receive and share ADS-B data from aircraft flying overhead. In this article, we will cover the basics of getting started with Piaware, including what you need to set it up and how to get your first data feed.

## What is Piaware?

Piaware is a software package that runs on a Raspberry Pi and allows you to receive ADS-B signals from aircraft. It can be used to track flights in real-time and share that data with the FlightAware network, contributing to a global flight tracking system.

## Requirements

To get started with Piaware, you will need the following:

- A Raspberry Pi (any model should work, but the Raspberry Pi 3 or 4 is recommended for better performance)
- An ADS-B receiver (such as a USB dongle)
- A microSD card (at least 8GB)
- A power supply for the Raspberry Pi
- An internet connection (for downloading software and sharing data)

## Installation Steps

1. **Download the Piaware Image**: Visit the [FlightAware website](https://flightaware.com/adsb/piaware/download) to download the latest Piaware image for Raspberry Pi.

2. **Flash the Image to the microSD Card**: Use a tool like Balena Etcher to flash the downloaded image onto your microSD card.

3. **Insert the microSD Card and Boot**: Insert the microSD card into your Raspberry Pi, connect the ADS-B receiver, and power it on.

4. **Configure Piaware**: Once the Raspberry Pi boots up, you can access the Piaware configuration page by navigating to `http://piaware.local` in your web browser. Follow the on-screen instructions to set up your account and configure your receiver.

5. **Start Receiving Data**: After configuration, Piaware will start receiving ADS-B data. You can monitor the data feed through the FlightAware website.

## Conclusion

Setting up Piaware is a straightforward process that allows you to contribute to the global flight tracking community. In the next articles, we will dive deeper into advanced configurations and troubleshooting tips. Stay tuned!