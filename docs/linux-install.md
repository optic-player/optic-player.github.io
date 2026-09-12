# Optic Player - Linux 安装与系统要求指南

[English](./linux-install-en.md) | 中文

Optic Player 为 Linux 系统提供完整的多媒体播放支持。为了提供最稳定、开箱即用且功能完整的体验（包含 HDR / 杜比视界色调映射），**优先推荐使用官方 Flatpak 格式**。

---

## 📦 格式对比与选择

项目目前支持三种分发形态，各格式对宿主环境的依赖与功能特性有所不同：

| 维度 / 格式 | Flatpak（官方推荐） | AppImage（便携单文件） | ZIP 压缩包（绿色便携） |
| :--- | :--- | :--- | :--- |
| **适用场景** | **首选发布格式，开箱即用** | 免安装、即开即用 | 高级用户 / 自定义部署 |
| **架构支持** | **`x86_64` (amd64) 与 `aarch64` (ARM64)** | 仅 `x86_64` | 仅 `x86_64` |
| **系统依赖** | **无（运行时自包含所有依赖）** | 宿主需安装 `libmpv2`、`libfuse2` | 宿主需安装 `GTK3`、`libmpv2`、`libsecret-1` |
| **高级色彩链路** | **全内置** (`libplacebo 7.360.1` + `FFmpeg 8.1.2` + `mpv 0.41.0`) | 依赖宿主 `libmpv` 是否集成 `libplacebo` | 依赖宿主 `libmpv` 是否集成 `libplacebo` |
| **推荐指数** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 🖥️ 核心系统要求总览

### 1. 硬件与运行环境要求

| 维度 | 最低要求 (Minimum) | 推荐配置 (Recommended) | 详细说明 |
| :--- | :--- | :--- | :--- |
| **CPU 架构** | `x86_64` (amd64) 或 `aarch64` (ARM64) | 现代 64 位多核处理器 | Flatpak 官方构建支持 `x86_64` 与 `aarch64`；AppImage/ZIP 当前仅构建 `x86_64` |
| **内存 (RAM)** | 2 GB+ | 4 GB+ | 播放 4K 高码率视频建议 4 GB 以上 |
| **GPU / 驱动** | 支持 **OpenGL 3.0+** / OpenGL ES 3.0+ | 支持 **Vulkan 1.2+** 的独立显卡或现代集成显卡（Intel/AMD/NVIDIA） | Flutter 渲染使用 OpenGL/GTK3（Impeller 在 Linux 上已显式关闭）；**Vulkan 为 HDR/杜比视界色调映射所必需** |
| **显示服务** | **X11** (X.Org) 或 **Wayland** | **Wayland** 或原生 X11 | 窗口管理器遵循 GTK3 标准；在 GNOME 下自动启用 HeaderBar，非 GNOME 环境使用经典标题栏 |
| **音频服务** | **PulseAudio** 或 **PipeWire** (通过 PulseAudio 兼容层) | **PipeWire** / PulseAudio | Flatpak 沙箱已声明 `--socket=pulseaudio` 权限 |
| **密钥/安全存储** | 支持 **D-Bus Secret Service API** 的密钥环守护进程 | **GNOME Keyring** / **KWallet** / **KeePassXC** | `flutter_secure_storage` 用于持久化存储 Emby 认证 Token 及服务器敏感凭据 |

---

## 🎬 视频播放与色彩链路特殊要求

Optic Player 的视频播放核心依赖于定制编译的 `media_kit` + `libmpv` + `libplacebo` + `FFmpeg` 完整链路：

1. **SDR 媒体播放**：
   - 依赖基础 OpenGL 硬件加速（Mesa 开源驱动或专有显卡驱动），采用零拷贝纹理渲染路径。
2. **HDR10 / HLG / Dolby Vision Profile 8.x 色调映射 (Tone Mapping)**：
   - 使用 `lavfi-libplacebo` 滤镜转换至 BT.709 SDR 输出。
   - **需要 GPU 及驱动具备 Vulkan 设备支持**。
   - 若 Vulkan 设备初始化失败，HDR10/HLG 会退回传统渲染器重试。
3. **Dolby Vision Profile 5 (双层/无回退基础层)**：
   - **强制要求 Vulkan 与 libplacebo**。
   - 若宿主无 Vulkan 设备支持，播放器会直接报错阻断，**严禁回退传统路径**（避免出现严重偏色、画面发绿/发紫）。

---

## 📥 安装与运行

### 方式一：Flatpak（推荐，官方首选发布格式）

Flatpak 提供了完整的沙箱运行环境，**完全自包含**独立定制编译的 `libplacebo 7.360.1`、`FFmpeg 8.1.2` 与 `mpv 0.41.0`，无需担心宿主系统的 `libmpv` 版本过旧或缺失杜比视界滤镜。

- **包标识符**：`cloud.obe.opticplayer`
- **运行时环境**：`org.freedesktop.Platform // 25.08`
- **架构**：`x86_64` 与 `aarch64` (ARM64)

#### 安装
确保系统已安装 Flatpak 工具链并接入 Flathub。下载对应的 `.flatpak` 安装包后执行：

```bash
# 安装下载的 Flatpak 单文件包
flatpak install ./optic_player-*-Linux-*.flatpak
```

#### 运行
你可以从桌面应用菜单启动 Optic Player，或通过命令行运行：

```bash
flatpak run cloud.obe.opticplayer
```

---

### 方式二：AppImage（便携单文件）

AppImage 是单文件可执行格式，适合免安装体验。

- **架构**：仅 `x86_64`

#### 宿主依赖
AppImage 依赖宿主系统提供的 `libmpv`（建议 mpv >= 0.33+）：

```bash
# Debian / Ubuntu
sudo apt install libmpv2

# Fedora / RHEL
sudo dnf install mpv-libs

# Arch Linux
sudo pacman -S mpv
```

> **注意 (FUSE 支持)**：在 Ubuntu 22.04+、Debian 12+、Fedora 等较新发行版中，AppImage 运行需要 `libfuse2`：
> ```bash
> # Ubuntu / Debian
> sudo apt install libfuse2
> ```

#### 运行
```bash
# 赋予可执行权限
chmod +x optic_player-*-Linux-x64.AppImage

# 直接运行
./optic_player-*-Linux-x64.AppImage

# 若无 FUSE，也可通过解压模式直接运行
./optic_player-*-Linux-x64.AppImage --appimage-extract-and-run
```

#### 桌面集成（可选）
推荐使用 [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) 进行自动桌面集成，或手动创建 `.desktop` 文件：

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
> 请将 `/path/to/` 替换为实际路径，将 `USERNAME` 替换为你的当前用户名。

---

### 方式三：ZIP 压缩包（绿色便携 / 自定义部署）

适合高级用户、脚本自动化部署或非标准目录安装。

- **架构**：仅 `x86_64`

#### 宿主依赖
运行 ZIP 包必须安装 GTK3、libmpv 以及用于安全凭据存储的 **libsecret**：

```bash
# Debian / Ubuntu
sudo apt install libgtk-3-0 libmpv2 libsecret-1-0

# Fedora / RHEL
sudo dnf install gtk3 mpv-libs libsecret

# Arch Linux
sudo pacman -S gtk3 mpv libsecret
```

#### 解压与运行
```bash
# 解压到用户应用目录
mkdir -p ~/Applications/OpticPlayer
unzip optic_player-*-Linux-x64.zip -d ~/Applications/OpticPlayer

# 启动运行
~/Applications/OpticPlayer/OpticPlayer
```

#### 添加到 PATH（可选）
```bash
mkdir -p ~/.local/bin
ln -sf ~/Applications/OpticPlayer/OpticPlayer ~/.local/bin/optic-player
```

#### 创建桌面快捷方式（可选）
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

## 🔤 字体推荐 (Fonts)

强烈建议系统安装 **Noto Sans CJK SC** 字体，以确保中文界面与字幕呈现最佳渲染效果：

```bash
# Debian / Ubuntu
sudo apt install fonts-noto-cjk

# Fedora
sudo dnf install google-noto-sans-cjk-sc-fonts

# Arch Linux
sudo pacman -S noto-fonts-cjk
```

---

## ❓ 常见问题与故障排查 (Troubleshooting)

### 1. 登录凭据无法保存 / 提示 Secret Service 错误
- **原因**：Optic Player 使用 `flutter_secure_storage` 安全存储 Emby 认证 Token 及服务器凭据，依赖宿主系统的 **D-Bus Secret Service API**。
- **解决方案**：
  - **GNOME / XFCE / 常见桌面**：安装并确保 `gnome-keyring` 处于运行状态：
    ```bash
    # Debian / Ubuntu
    sudo apt install gnome-keyring
    # Fedora
    sudo dnf install gnome-keyring
    # Arch Linux
    sudo pacman -S gnome-keyring
    ```
  - **KDE Plasma**：确保 `kwallet` 守护进程已启动，或安装配置 Secret Service 支持。
  - **平铺式窗口管理器 (i3 / Sway / Hyprland 等)**：请在自启动脚本中启动 `gnome-keyring-daemon --start --components=secrets` 或使用 `keepassxc` 开启其 Secret Service 集成功能。

### 2. 杜比视界 (Dolby Vision P5) 播放报错或提示驱动不支持
- **原因**：Dolby Vision Profile 5 没有回退基础层，强制需要 **Vulkan 1.2+** 驱动与 `libplacebo` 进行严格色彩映射。无 Vulkan 设备时播放器将主动报错阻断，避免出现严重的画面偏色（全屏发绿或发紫）。
- **解决方案**：
  - 检查系统是否已就绪 Vulkan 设备：
    ```bash
    vulkaninfo --summary
    ```
  - 安装显卡对应的 Mesa Vulkan 驱动：
    ```bash
    # Debian / Ubuntu
    sudo apt install mesa-vulkan-drivers
    # Intel 显卡 (Debian/Ubuntu)
    sudo apt install intel-media-va-driver-non-free
    # Arch Linux
    sudo pacman -S vulkan-intel vulkan-radeon nvidia-utils
    ```
  - **推荐使用 Flatpak 版本**：Flatpak 会自动匹配并下载适配沙箱环境的 Mesa GL / Vulkan 扩展驱动。

### 3. 播放视频黑屏、无画面或崩溃
- 确保显卡驱动已正常安装且 OpenGL 硬件加速工作正常：
  ```bash
  glxinfo -B
  ```
- **NVIDIA 显卡用户**：建议安装官方专有显卡驱动（如 `nvidia-driver-535` 或更高版本），开源 Nouveau 驱动在较新显卡上的 3D/计算加速支持可能存在局限。

### 4. 启动时提示缺少共享库 (`error while loading shared libraries`)
- 检查二进制文件缺失的具体动态库：
  ```bash
  ldd ~/Applications/OpticPlayer/OpticPlayer | grep "not found"
  ```
- 常见缺失库：
  - `libsecret-1.so.0`：请安装 `libsecret-1-0` (Ubuntu/Debian) 或 `libsecret` (Fedora/Arch)。
  - `libmpv.so.2`：请安装 `libmpv2` (Ubuntu/Debian)、`mpv-libs` (Fedora) 或 `mpv` (Arch)。

### 5. AppImage 启动提示 FUSE 相关错误
- Ubuntu 22.04 及更新版本默认未预装 `libfuse2`，可通过 `sudo apt install libfuse2` 安装，或直接增加 `--appimage-extract-and-run` 参数启动。

### 6. Wayland 环境下窗口显示或标题栏异常
- Optic Player 的窗口管理器遵循 GTK3 标准。在 GNOME 桌面环境下会自动启用现代 HeaderBar，在非 GNOME 环境下采用经典标题栏。
- 若在部分合成器（Compositor）下遇到 Wayland 渲染或缩放异常，可强制使用 X11 兼容后端启动：
  ```bash
  GDK_BACKEND=x11 ./OpticPlayer
  ```
