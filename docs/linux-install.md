# Optic Player - Linux 安装与使用指南

Optic Player 为 Linux 提供两种分发格式，请根据你的需求选择合适的安装方式。

---

## 📦 格式对比

| 格式 | 适用场景 | 特点 | 系统依赖 |
|------|---------|------|---------|
| **AppImage** | 推荐大多数用户 | 单文件便携，下载即用 | 需安装 libmpv |
| **ZIP** | 高级用户 / 自定义部署 | 可自由选择安装位置 | 需安装 GTK3 + libmpv |

---

## 方式一：AppImage（推荐）

AppImage 是一个单文件可执行格式，无需安装即可运行。

### 系统依赖

AppImage 仍需要系统安装 `libmpv`（用于视频播放）：

```bash
# Debian / Ubuntu
sudo apt install libmpv2

# Fedora
sudo dnf install mpv-libs

# Arch Linux
sudo pacman -S mpv
```

### 运行

```bash
# 添加可执行权限
chmod +x optic_player-*-Linux-x64.AppImage

# 直接运行
./optic_player-*-Linux-x64.AppImage
```

### 桌面集成（可选）

如果希望在应用程序菜单中显示，可以使用 [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) 自动集成，或手动创建 `.desktop` 文件：

```bash
mkdir -p ~/.local/share/applications ~/.local/share/icons

# 下载应用图标
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

> 请将 `/path/to/` 替换为 AppImage 文件的实际路径，将 `USERNAME` 替换为你的用户名。

### 故障排除

如果运行时提示 FUSE 相关错误：

```bash
# Ubuntu 22.04+
sudo apt install libfuse2

# 或使用提取模式运行（无需 FUSE）
./optic_player-*-Linux-x64.AppImage --appimage-extract-and-run
```

---

## 方式二：ZIP 压缩包

ZIP 包适合高级用户和自定义部署场景。

### 系统依赖

```bash
# Debian / Ubuntu
sudo apt install libgtk-3-0 libmpv2

# Fedora
sudo dnf install gtk3 mpv-libs

# Arch Linux
sudo pacman -S gtk3 mpv
```

### 安装

```bash
# 解压到目标目录
mkdir -p ~/Applications/OpticPlayer
unzip optic_player-*-Linux-x64.zip -d ~/Applications/OpticPlayer

# 运行
~/Applications/OpticPlayer/OpticPlayer
```

### 添加到 PATH（可选）

```bash
# 创建符号链接到用户 bin 目录
mkdir -p ~/.local/bin
ln -sf ~/Applications/OpticPlayer/OpticPlayer ~/.local/bin/optic-player
```

确保 `~/.local/bin` 在你的 `$PATH` 中（大多数发行版默认已配置）。

### 创建桌面快捷方式（可选）

```bash
mkdir -p ~/.local/share/applications ~/.local/share/icons

# 下载应用图标（如已下载可跳过）
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

> 请将 `USERNAME` 替换为你的用户名。

---

## 🖥️ 系统要求

- **架构**: x86_64 (amd64)
- **显示服务器**: X11 或 Wayland
- **GPU**: 推荐支持 OpenGL 3.0+ 的显卡驱动

## ❓ 常见问题

### 播放视频没有画面或崩溃

确保你的显卡驱动已正确安装。对于 NVIDIA 用户：

```bash
# Ubuntu
sudo apt install nvidia-driver-535

# 或使用开源驱动
sudo apt install mesa-utils
```

### 启动时提示找不到共享库

如果提示类似 `error while loading shared libraries` 的错误，请检查是否安装了所有系统依赖，并确保库的路径在 `LD_LIBRARY_PATH` 中：

```bash
# 查看缺少的依赖
ldd ~/Applications/OpticPlayer/OpticPlayer | grep "not found"
```

### Wayland 下窗口显示异常

尝试使用 X11 后端运行：

```bash
GDK_BACKEND=x11 ./OpticPlayer
```
