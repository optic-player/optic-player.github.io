# Optic Player

这是Optic Player的发布仓库。不含源码，可能会开源，有时间整理的话。

本项目为自用，暂时只支持Emby。

## 播放器内核

所有平台上都集成了`MPV`。`Android`、`iOS`和`macOS`平台额外集成了**原生播放器（解码性能一般会比MPV高）**。

- **Android/TV**: 默认为`Media3 ExoPlayer + FFmpeg Extension`，也可使用`MPV`。
- **iOS/iPadOS**: 默认为`AVPlayer`，也可使用`MPV`。
- **macOS**: 默认为`AVPlayer`，也可使用`MPV`。
- **Windows**: `MPV`。
- **Linux**: `MPV`。

> Linux的包目前未编译，有空时会编译出来。

## Windows

需安装VC运行库最新版：[去微软下载](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist) 。

## Android

Android内建TV支持。一个APK支持手机、平板和电视。

## Apple系

不签名、不上架App Store（搞不到美区号）。使用方式自行Google或问AI。

## 备注

此播放器的User Agent为`OpticPlayer/<version>`。**对于白名单模式Emby服，如果没加白，请求会失败(403响应)，导致无法登录和播放**。
