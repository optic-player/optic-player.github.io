# Optic Player

这是Optic Player的发布仓库。不含源码，可能会开源，有时间整理的话。

本项目为自用，暂时只支持Emby。

## 播放器内核

本项目在所有平台上都集成了 `MPV`。其中 `Android`、`iOS` 和 `macOS` 额外支持**原生播放器**（通常具有更好的解码性能）。

| 平台 | 默认播放内核 | 备用播放内核 |
| :--- | :--- | :--- |
| **Android / TV** | `Media3 ExoPlayer` (+ FFmpeg) | `MPV` |
| **iOS / iPadOS** | `AVPlayer` (原生) | `MPV` |
| **macOS** | `AVPlayer` (原生) | `MPV` |
| **Windows** | `MPV` | — |
| **Linux** | `MPV` | — |

## Windows

需安装VC运行库最新版：[去微软下载](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist) 。

## Android

Android内建TV支持。一个APK支持手机、平板和电视。

## Apple系

不签名、不上架App Store（搞不到美区开发者号）。使用方式自行Google或问AI。

## Linux

查看[Linux使用文档](./docs/linux-install.md)

## 备注

此播放器的User Agent为`OpticPlayer/<version>`。**对于白名单模式Emby服，如果没加白，请求会失败(403响应)，导致无法登录和播放**。

## 截图

![screenshot](./assets/screenshot.webp)
