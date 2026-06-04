# Optic Player - Linux Installation and Usage Guide

[中文](./linux-install.md) | English

Optic Player provides two distribution formats for Linux. Please choose the appropriate installation method according to your needs.

---

## 📦 Format Comparison

| Format | Applicable Scenarios | Features | System Dependencies |
|------|---------|------|---------|
| **AppImage** | Recommended for most users | Single portable file, download and run | Requires libmpv |
| **ZIP** | Advanced users / Custom deployment | Freedom to choose installation location | Requires GTK3 + libmpv |

---

## Method 1: AppImage (Recommended)

AppImage is a single-file executable format that can run without installation.

### System Dependencies

AppImage still requires `libmpv` to be installed on the system (for video playback):

```bash
# Debian / Ubuntu
sudo apt install libmpv2

# Fedora
sudo dnf install mpv-libs

# Arch Linux
sudo pacman -S mpv
```

### Run

```bash
# Add executable permission
chmod +x optic_player-*-Linux-x64.AppImage

# Run directly
./optic_player-*-Linux-x64.AppImage
```

### Desktop Integration (Optional)

If you want it to appear in your application menu, you can use [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) for automatic integration, or manually create a `.desktop` file:

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

> Please replace `/path/to/` with the actual path to the AppImage file, and `USERNAME` with your username.

### Troubleshooting

If you encounter FUSE-related errors during runtime:

```bash
# Ubuntu 22.04+
sudo apt install libfuse2

# Or run in extract mode (no FUSE required)
./optic_player-*-Linux-x64.AppImage --appimage-extract-and-run
```

---

## Method 2: ZIP Archive

The ZIP package is suitable for advanced users and custom deployment scenarios.

### System Dependencies

```bash
# Debian / Ubuntu
sudo apt install libgtk-3-0 libmpv2

# Fedora
sudo dnf install gtk3 mpv-libs

# Arch Linux
sudo pacman -S gtk3 mpv
```

### Installation

```bash
# Extract to target directory
mkdir -p ~/Applications/OpticPlayer
unzip optic_player-*-Linux-x64.zip -d ~/Applications/OpticPlayer

# Run
~/Applications/OpticPlayer/OpticPlayer
```

### Add to PATH (Optional)

```bash
# Create a symbolic link to the user's bin directory
mkdir -p ~/.local/bin
ln -sf ~/Applications/OpticPlayer/OpticPlayer ~/.local/bin/optic-player
```

Ensure `~/.local/bin` is in your `$PATH` (this is configured by default on most distributions).

### Create Desktop Shortcut (Optional)

```bash
mkdir -p ~/.local/share/applications ~/.local/share/icons

# Download application icon (skip if already downloaded)
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

> Please replace `USERNAME` with your username.

---

## 🖥️ System Requirements

- **Architecture**: x86_64 (amd64)
- **Display Server**: X11 or Wayland
- **GPU**: Graphics drivers supporting OpenGL 3.0+ are recommended

## ❓ FAQ

### No video or crash during playback

Ensure your graphics drivers are installed correctly. For NVIDIA users:

```bash
# Ubuntu
sudo apt install nvidia-driver-535

# Or use open-source drivers
sudo apt install mesa-utils
```

### Shared library not found on startup

If you see an error like `error while loading shared libraries`, check if all system dependencies are installed and ensure the library path is in `LD_LIBRARY_PATH`:

```bash
# Check missing dependencies
ldd ~/Applications/OpticPlayer/OpticPlayer | grep "not found"
```

### Window display issues under Wayland

Try running with the X11 backend:

```bash
GDK_BACKEND=x11 ./OpticPlayer
```
