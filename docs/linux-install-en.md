# Optic Player - Linux Installation and System Requirements Guide

[中文](./linux-install.md) | English

Optic Player provides full multimedia playback support for Linux systems. To achieve the most stable, out-of-the-box, and feature-complete experience (including HDR / Dolby Vision tone mapping), **we highly recommend using the official Flatpak format**.

---

## 📦 Format Comparison & Selection

Optic Player supports three distribution formats, each with different host dependencies and feature sets:

| Metric / Format | Flatpak (Official Recommended) | AppImage (Portable Executable) | ZIP Archive (Portable Manual) |
| :--- | :--- | :--- | :--- |
| **Use Case** | **Primary release format, out-of-the-box** | Portable, standalone single binary | Advanced users / Custom deployment |
| **Architecture** | **`x86_64` (amd64) and `aarch64` (ARM64)** | `x86_64` only | `x86_64` only |
| **Host Dependencies**| **None (All dependencies pre-bundled)** | Host requires `libmpv2`, `libfuse2` | Host requires `GTK3`, `libmpv2`, `libsecret-1` |
| **Color Pipeline** | **Fully self-contained** (`libplacebo 7.360.1` + `FFmpeg 8.1.2` + `mpv 0.41.0`) | Depends on host `libmpv` build with `libplacebo` | Depends on host `libmpv` build with `libplacebo` |
| **Recommendation** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 🖥️ Core System Requirements

### 1. Hardware and Runtime Environment

| Dimension | Minimum Requirement | Recommended Specification | Details |
| :--- | :--- | :--- | :--- |
| **CPU Architecture** | `x86_64` (amd64) or `aarch64` (ARM64) | Modern 64-bit multi-core processor | Flatpak official builds support both `x86_64` and `aarch64`; AppImage/ZIP are currently built for `x86_64` only |
| **RAM** | 2 GB+ | 4 GB+ | 4 GB+ recommended for playing high-bitrate 4K media |
| **GPU / Driver** | **OpenGL 3.0+** / OpenGL ES 3.0+ | **Vulkan 1.2+** on dedicated GPU or modern iGPU (Intel/AMD/NVIDIA) | Flutter renders using OpenGL/GTK3 (Impeller is explicitly disabled on Linux); **Vulkan is strictly required for HDR / Dolby Vision tone mapping** |
| **Display Server** | **X11** (X.Org) or **Wayland** | **Wayland** or native X11 | Window manager conforms to GTK3 standards; automatically uses HeaderBar under GNOME and classic title bar under non-GNOME desktop environments |
| **Audio Server** | **PulseAudio** or **PipeWire** (via PulseAudio layer) | **PipeWire** / PulseAudio | Flatpak sandbox declares `--socket=pulseaudio` permission |
| **Keyring / Secure Storage** | Keyring daemon supporting **D-Bus Secret Service API** | **GNOME Keyring** / **KWallet** / **KeePassXC** | Used by `flutter_secure_storage` to securely persist Emby authentication tokens and server credentials |

---

## 🎬 Media Playback & Color Pipeline Requirements

Optic Player's video playback core relies on a custom-compiled pipeline of `media_kit` + `libmpv` + `libplacebo` + `FFmpeg`:

1. **SDR Media Playback**:
   - Relies on basic OpenGL hardware acceleration (Mesa open-source drivers or proprietary GPU drivers), utilizing a zero-copy texture rendering path.
2. **HDR10 / HLG / Dolby Vision Profile 8.x Tone Mapping**:
   - Converted to BT.709 SDR output via the `lavfi-libplacebo` filter.
   - **Requires GPU and drivers with Vulkan device support**.
   - If Vulkan device initialization fails, HDR10/HLG falls back to the legacy renderer.
3. **Dolby Vision Profile 5 (Dual-Layer / No Base-Layer Fallback)**:
   - **Strictly requires Vulkan and libplacebo**.
   - If no Vulkan device is available, the player throws an error and halts playback, **strictly prohibiting fallback to legacy paths** (preventing severe discoloration and green/purple tinting).

---

## 📥 Installation & Usage Guide

### Method 1: Flatpak (Recommended, Official Primary Format)

Flatpak provides a complete sandboxed runtime environment that **fully self-contains** custom-compiled `libplacebo 7.360.1`, `FFmpeg 8.1.2`, and `mpv 0.41.0`, eliminating concerns about outdated host `libmpv` packages or missing Dolby Vision filters.

- **Application ID**: `cloud.obe.opticplayer`
- **Runtime**: `org.freedesktop.Platform // 25.08`
- **Architectures**: `x86_64` and `aarch64` (ARM64)

#### Installation
Ensure Flatpak is installed on your system with Flathub configured. Download the `.flatpak` package and run:

```bash
# Install the downloaded Flatpak bundle
flatpak install ./optic_player-*-Linux-*.flatpak
```

#### Run
Launch Optic Player from your desktop application menu, or run it via the command line:

```bash
flatpak run cloud.obe.opticplayer
```

---

### Method 2: AppImage (Portable Executable)

AppImage is a single-file executable format suitable for standalone, no-installation use.

- **Architecture**: `x86_64` only

#### Host Dependencies
AppImage relies on the host system's `libmpv` (mpv >= 0.33+ recommended):

```bash
# Debian / Ubuntu
sudo apt install libmpv2

# Fedora / RHEL
sudo dnf install mpv-libs

# Arch Linux
sudo pacman -S mpv
```

> **Note (FUSE Support)**: On newer distributions like Ubuntu 22.04+, Debian 12+, and Fedora, running AppImage requires `libfuse2`:
> ```bash
> # Ubuntu / Debian
> sudo apt install libfuse2
> ```

#### Run
```bash
# Grant executable permission
chmod +x optic_player-*-Linux-x64.AppImage

# Run directly
./optic_player-*-Linux-x64.AppImage

# If FUSE is not available, run in extract mode
./optic_player-*-Linux-x64.AppImage --appimage-extract-and-run
```

#### Desktop Integration (Optional)
Use [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) for automatic desktop integration, or manually create a `.desktop` file:

```bash
mkdir -p ~/.local/share/applications ~/.local/share/icons

# Download application icon
wget -O ~/.local/share/icons/optic-player.webp \
  "https://raw.githubusercontent.com/optic-player/optic-player.github.io/refs/heads/main/assets/logo.webp"

cat > ~/.local/share/applications/optic-player.desktop << 'EOF'
[Desktop Entry]
Type=Application
Name=Optic Player
Comment=A modern cinematic media player
Exec=/path/to/optic_player-Linux-x64.AppImage
Icon=/home/USERNAME/.local/share/icons/optic-player.webp
Categories=AudioVideo;Video;Player;
EOF
```
> Replace `/path/to/` with the actual file path and `USERNAME` with your username.

---

### Method 3: ZIP Archive (Portable Extraction / Custom Deployment)

Suitable for advanced users, automated deployment scripts, or custom directory installations.

- **Architecture**: `x86_64` only

#### Host Dependencies
Running the ZIP bundle requires GTK3, libmpv, and **libsecret** for secure credential storage:

```bash
# Debian / Ubuntu
sudo apt install libgtk-3-0 libmpv2 libsecret-1-0

# Fedora / RHEL
sudo dnf install gtk3 mpv-libs libsecret

# Arch Linux
sudo pacman -S gtk3 mpv libsecret
```

#### Extract & Run
```bash
# Extract to target directory
mkdir -p ~/Applications/OpticPlayer
unzip optic_player-*-Linux-x64.zip -d ~/Applications/OpticPlayer

# Run
~/Applications/OpticPlayer/OpticPlayer
```

#### Add to PATH (Optional)
```bash
mkdir -p ~/.local/bin
ln -sf ~/Applications/OpticPlayer/OpticPlayer ~/.local/bin/optic-player
```

#### Create Desktop Shortcut (Optional)
```bash
mkdir -p ~/.local/share/applications ~/.local/share/icons

wget -O ~/.local/share/icons/optic-player.webp \
  "https://raw.githubusercontent.com/optic-player/optic-player.github.io/refs/heads/main/assets/logo.webp"

cat > ~/.local/share/applications/optic-player.desktop << 'EOF'
[Desktop Entry]
Type=Application
Name=Optic Player
Comment=A modern cinematic media player
Exec=$HOME/Applications/OpticPlayer/OpticPlayer
Icon=/home/USERNAME/.local/share/icons/optic-player.webp
Categories=AudioVideo;Video;Player;
EOF
```

---

## 🔤 Recommended Fonts

We strongly recommend installing the **Noto Sans CJK SC** font for optimal rendering of Chinese user interfaces and subtitles:

```bash
# Debian / Ubuntu
sudo apt install fonts-noto-cjk

# Fedora
sudo dnf install google-noto-sans-cjk-sc-fonts

# Arch Linux
sudo pacman -S noto-fonts-cjk
```

---

## ❓ Troubleshooting & FAQ

### 1. Login credentials cannot be saved / Secret Service error
- **Cause**: Optic Player uses `flutter_secure_storage` to safely store Emby authentication tokens and server credentials, which relies on the host system's **D-Bus Secret Service API**.
- **Solution**:
  - **GNOME / XFCE / General Desktops**: Ensure `gnome-keyring` is installed and running:
    ```bash
    # Debian / Ubuntu
    sudo apt install gnome-keyring
    # Fedora
    sudo dnf install gnome-keyring
    # Arch Linux
    sudo pacman -S gnome-keyring
    ```
  - **KDE Plasma**: Ensure `kwallet` daemon is started, or install Secret Service support.
  - **Tiling Window Managers (i3 / Sway / Hyprland, etc.)**: Start `gnome-keyring-daemon --start --components=secrets` in your autostart script, or enable the Secret Service feature in `keepassxc`.

### 2. Dolby Vision (Profile 5) playback fails or reports driver unsupported
- **Cause**: Dolby Vision Profile 5 has no fallback SDR base layer and strictly requires **Vulkan 1.2+** drivers and `libplacebo` for color tone mapping. If no Vulkan device is detected, the player halts playback with an error to prevent severe green/purple discoloration.
- **Solution**:
  - Verify Vulkan device readiness:
    ```bash
    vulkaninfo --summary
    ```
  - Install the appropriate Mesa Vulkan drivers:
    ```bash
    # Debian / Ubuntu
    sudo apt install mesa-vulkan-drivers
    # Intel GPUs (Debian/Ubuntu)
    sudo apt install intel-media-va-driver-non-free
    # Arch Linux
    sudo pacman -S vulkan-intel vulkan-radeon nvidia-utils
    ```
  - **Use the Flatpak version**: Flatpak automatically provisions matching Mesa GL and Vulkan sandbox extensions.

### 3. Video playback black screen, no video, or crash
- Ensure your GPU driver is installed and OpenGL hardware acceleration is functional:
  ```bash
  glxinfo -B
  ```
- **NVIDIA Users**: We recommend using the official proprietary graphics driver (e.g., `nvidia-driver-535` or newer). The open-source Nouveau driver may have limitations in 3D/compute acceleration on newer cards.

### 4. Missing shared library on startup (`error while loading shared libraries`)
- Check for missing shared libraries:
  ```bash
  ldd ~/Applications/OpticPlayer/OpticPlayer | grep "not found"
  ```
- Common missing libraries:
  - `libsecret-1.so.0`: Install `libsecret-1-0` (Ubuntu/Debian) or `libsecret` (Fedora/Arch).
  - `libmpv.so.2`: Install `libmpv2` (Ubuntu/Debian), `mpv-libs` (Fedora), or `mpv` (Arch).

### 5. AppImage prompts FUSE error
- Ubuntu 22.04+ does not pre-install `libfuse2` by default. Install it via `sudo apt install libfuse2`, or append the `--appimage-extract-and-run` parameter when launching.

### 6. Window display or title bar issues under Wayland
- Optic Player conforms to the GTK3 standard. Under GNOME, it automatically uses the modern HeaderBar; under non-GNOME environments, it uses the classic title bar.
- If you encounter window rendering or scaling issues under certain compositors, force the X11 compatibility backend:
  ```bash
  GDK_BACKEND=x11 ./OpticPlayer
  ```
