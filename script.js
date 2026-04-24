// script.js

/**
 * i18n Dictionary for Optic Player Landing Page
 * Supports English (en) and Chinese (zh) out of the box.
 */
const i18nDict = {
    en: {
        nav_home: "Home",
        nav_features: "Features",
        nav_download: "Download",
        nav_support: "Support",
        version_badge: "Optic Player 0.1.2",
        hero_title: "The Cross-Platform Emby Client",
        hero_subtitle: "Experience your media like never before with our elegant, Apple TV inspired interface. Built for performance, designed for beauty.",
        btn_download_now: "Download Now",
        btn_feedback: "Feedback",
        platforms_title: "Available Everywhere",
        platforms_subtitle: "Seamless continuous playback across all your favorite devices.",
        privacy_title: "Your Privacy Matters",
        privacy_desc: "Optic Player respects your privacy. Our software does not collect, track, or share any of your personal information or viewing habits. Everything stays between your client and your Emby server.",
        community_title: "Join the Community",
        community_subtitle: "Optic Player development is driven by our users. Report bugs, suggest features, and connect with other users.",
        github_issues: "GitHub Issues",
        github_desc: "Report bugs and submit feature requests.",
        coming_soon: "Coming Soon",
        req_appletv: "tvOS 13.0+",
        req_android: "Android 7.0+",
        req_ios: "iOS 13.0+",
        req_windows: "Windows 10/11",
        req_macos: "macOS 10.15+",
        req_linux: "Debian/Ubuntu",
        arch_appletv: "ARM64",
        arch_androidtv: "arm64-v8a",
        arch_ios: "ARM64",
        arch_android: "arm64-v8a",
        arch_windows: "x64",
        arch_macos: "Universal",
        arch_linux: "x64"
    },
    zh: {
        nav_home: "首页",
        nav_features: "特性",
        nav_download: "下载",
        nav_support: "支持",
        version_badge: "Optic Player 0.1.2",
        hero_title: "跨平台 Emby 播放器",
        hero_subtitle: "通过优雅的、受 Apple TV 启发的界面，以前所未有的方式体验您的媒体。为性能而生，为感受而设计。",
        btn_download_now: "立即下载",
        btn_feedback: "问题反馈",
        platforms_title: "无处不在",
        platforms_subtitle: "在所有设备上感受无缝、连续的播放体验。",
        privacy_title: "尊重您的隐私",
        privacy_desc: "Optic Player 不会收集、追踪或共享任何你的个人数据或观影习惯。所有数据仅存在于你的设备和 Emby 服务器之间。",
        community_title: "加入社区",
        community_subtitle: "Optic Player 开发始终由用户驱动。欢迎加入社区，报告错误、提交功能建议、与更多同好交流。",
        github_issues: "GitHub Issues",
        github_desc: "官方 Bug 追踪与反馈板块。",
        coming_soon: "敬请期待",
        req_appletv: "tvOS 13.0+",
        req_android: "Android 7.0+",
        req_ios: "iOS 13.0+",
        req_windows: "Windows 10/11",
        req_macos: "macOS 10.15+",
        req_linux: "Debian/Ubuntu",
        arch_appletv: "ARM64",
        arch_androidtv: "arm64-v8a",
        arch_ios: "ARM64",
        arch_android: "arm64-v8a",
        arch_windows: "x64",
        arch_macos: "Universal",
        arch_linux: "x64"
    }
};

// Application State
let currentLanguage = 'en'; // Default fallback

document.addEventListener('DOMContentLoaded', () => {
    // 1. Detect browser language to auto-switch if Chinese is preferred
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().includes('zh')) {
        currentLanguage = 'zh';
    }

    // 2. Initialize text content
    applyLanguage(currentLanguage);

    // 3. Bind language toggle button
    const langBtn = document.getElementById('langToggle');
    langBtn.addEventListener('click', () => {
        // Toggle language state
        currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
        applyLanguage(currentLanguage);
    });
});

/**
 * Applies the selected language to all elements with a [data-i18n] attribute.
 * @param {string} lang - 'en' or 'zh'
 */
function applyLanguage(lang) {
    const dict = i18nDict[lang];
    if (!dict) return;

    // Update HTML lang attribute for SEO/Accessibility
    document.documentElement.lang = lang;

    // Update the toggle button text indicator
    document.getElementById('currentLang').textContent = lang.toUpperCase();

    // Re-render all targeted elements
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dict[key]) {
            element.textContent = dict[key];
        }
    });
}
