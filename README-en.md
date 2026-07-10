<div align="center">

<img src="./assets/logo.webp" alt="Optic Player" width="120" />

# Optic Player

[中文](./README.md) | English

A cross-platform Emby client player

[![Windows](https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0wIDBoMTEuNXYxMS41SDBWMHptMTIuNSAwSDI0djExLjVIMTIuNVYwek0wIDEyLjVoMTEuNVYyNEgwVjEyLjV6bTEyLjUgMEgyNFYyNEgxMi41VjEyLjV6Ii8+PC9zdmc+)](https://apps.microsoft.com/detail/9PMT50SVSPL0)
[![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white)](https://github.com/optic-player/optic-player.github.io/releases/latest)
[![macOS](https://img.shields.io/badge/macOS-000000?style=flat-square&logo=apple&logoColor=white)](https://github.com/optic-player/optic-player.github.io/releases/latest)
[![iOS](https://img.shields.io/badge/iOS-000000?style=flat-square&logo=apple&logoColor=white)](https://github.com/optic-player/optic-player.github.io/releases/latest)
[![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)](https://github.com/optic-player/optic-player.github.io/releases/latest)

</div>

---

> This is the release repository for Optic Player. It does not contain source code, but might be open-sourced in the future (if there is time to organize it).

## 📑 Table of Contents

- [⚙️ Player Core](#️-player-core)
- [📥 Installation Guide](#-installation-guide)
- [⚠️ Important Notes](#️-important-notes)

![screenshot](./assets/screenshot.webp)


## ⚙️ Player Core

All platforms integrate `MPV`, and some platforms additionally support a **native player** (which usually offers better decoding performance).

| Platform | Default Core | Alternative Core |
| :--- | :--- | :---: |
| **Android / TV** | `Media3 ExoPlayer (+ FFmpeg Extension)` | `MPV` |
| **iOS / iPadOS** | `AVPlayer` | `MPV` |
| **macOS** | `AVPlayer` | `MPV` |
| **Windows** | `MPV` | — |
| **Linux** | `MPV` | — |

## 📥 Installation Guide

### 🪟 Windows

<a href="https://apps.microsoft.com/detail/9PMT50SVSPL0?referrer=appbadge&mode=full" target="_blank" rel="noopener noreferrer">
	<img src="https://get.microsoft.com/images/en-us%20dark.svg" width="200"/>
</a>

> 💡 Installing via the Microsoft Store will automatically handle dependencies, no need to manually install VC runtime libraries.

If you download the ZIP package from GitHub, you need to manually install the latest version of the VC runtime library: [Download from Microsoft](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist).

### 🤖 Android

One APK supports phones, tablets, and TVs (built-in TV support).

### 🍏 macOS

Universal build, supporting Intel and Apple Silicon.

### 📱 iOS / iPadOS

Not signed, not available on the App Store (cannot get a US developer account). You will need to figure out how to install it yourself via Google or asking an AI.

### 🐧 Linux

See [Linux Installation Guide](./docs/linux-install-en.md)

## ⚠️ Important Notes

- On PC, if you need the player to route through your local proxy software, please use **TUN mode**.

- The User Agent for this player is `OpticPlayer/<version>`. **For Emby servers with a whitelist mode, if not added to the whitelist, requests will fail (403 response), causing login and playback to fail.**
