// script.js

/**
 * i18n Dictionary for Optic Player Landing Page
 * Supports English (en) and Chinese (zh) out of the box.
 */
const i18nDict = {
    en: {
        nav_home: "Home",
        nav_features: "Features",
        nav_core: "Core",
        nav_changelog: "Changelog",
        nav_download: "Download",
        nav_support: "Support",
        badge_free: "Free Forever",
        hero_title: "The Ultimate Cross-Platform Emby Player",
        hero_subtitle: "An elegant, Apple TV inspired cross-platform Emby player and client.",
        btn_download_github: "Download via GitHub (All Platforms)",
        btn_ms_store_windows: "Microsoft Store (Windows)",
        btn_feedback: "Feedback",
        platforms_title: "Available Everywhere",
        platforms_subtitle: "One Emby player for all your devices — seamless playback across Apple TV, Android TV, Windows, macOS, iOS, and Linux.",
        privacy_title: "Your Privacy Matters",
        privacy_desc: "Optic Player respects your privacy. Our software does not collect, track, or share any of your personal information or viewing habits. Everything stays between your app and your Emby server.",
        github_issues: "GitHub Issues",
        github_desc: "Report bugs and submit feature requests.",
        release_title: "What's New",
        release_subtitle: "Discover the latest features and improvements in Optic Player.",
        req_appletv: "tvOS 13.0+",
        req_android: "Android 7.0+",
        req_ios: "iOS 13.0+",
        req_windows: "Windows 10/11",
        req_macos: "macOS 10.15+",
        req_linux: "Common",
        arch_appletv: "ARM64",
        arch_androidtv: "Universal",
        arch_ios: "ARM64",
        arch_android: "Universal",
        arch_windows: "x64",
        arch_macos: "Universal",
        arch_linux: "x64",
        core_title: "Powerful Playback Engines",
        core_subtitle: "Dual-engine architecture providing both MPV and highly optimized Native players for maximum decoding performance.",
        core_default: "Default",
        core_alt: "Alternative",
        core_note: "Optic Player integrates MPV across all platforms for ultimate format compatibility. On Apple and Android devices, we also provide optimized Native Players as the default option, offering superior hardware decoding performance and battery efficiency.",
        changelog_category_changes: "Changes",
        changelog_category_bug_fixes: "Bug Fixes",
        changelog_item_danmaku: "Add high-performance Danmaku system",
        changelog_item_pc_subtitle: "Add local subtitle loading support on PC",
        changelog_item_mpv_subtitle_sync: "Add subtitle timeline synchronization control for MPV player",
        changelog_item_media_network_upgrade: "Media library and network core upgrade: New data model with paginated loading and retry, plus network pooling for improved media playback and data loading efficiency",
        changelog_item_player_refactor: "Deep player refactoring: Large-scale refactoring of the player's underlying logic and UI components",
        changelog_item_playback_fail_retry: "Display retry button and detailed error message after playback fails",
        changelog_item_ui_ux_optimize: "Optimize UI/UX",
        changelog_fix_seasons_limit: "Fix loading and display issues with 'Seasons Limit' in long series",
        changelog_fix_ui_overflow: "Fix UI overflow issues in some interfaces",
        changelog_fix_progress_report: "Fix playback progress not being reported when going back"
    },
    zh: {
        nav_home: "首页",
        nav_features: "特性",
        nav_core: "内核",
        nav_changelog: "更新日志",
        nav_download: "下载",
        nav_support: "支持",
        badge_free: "永久免费",
        hero_title: "跨平台 Emby 播放器",
        hero_subtitle: "一款受 Apple TV 启发的优雅 Emby 客户端。",
        btn_download_github: "前往 GitHub 下载 (全平台)",
        btn_ms_store_windows: "Microsoft Store (Windows)",
        btn_feedback: "问题反馈",
        platforms_title: "无处不在",
        platforms_subtitle: "一个 Emby 播放器，覆盖所有设备 — 在 Apple TV、Android TV、Windows、macOS、iOS 和 Linux 上无缝播放。",
        privacy_title: "尊重您的隐私",
        privacy_desc: "Optic Player 不会收集、追踪或共享任何你的个人数据或观影习惯。所有数据仅存在于你的设备和 Emby 服务器之间。",
        github_issues: "GitHub Issues",
        github_desc: "官方 Bug 追踪与反馈板块。",
        release_title: "更新日志",
        release_subtitle: "了解 Optic Player 的最新功能与优化改进。",
        req_appletv: "tvOS 13.0+",
        req_android: "Android 7.0+",
        req_ios: "iOS 13.0+",
        req_windows: "Windows 10/11",
        req_macos: "macOS 10.15+",
        req_linux: "Common",
        arch_appletv: "ARM64",
        arch_androidtv: "Universal",
        arch_ios: "ARM64",
        arch_android: "Universal",
        arch_windows: "x64",
        arch_macos: "Universal",
        arch_linux: "x64",
        core_title: "强大的播放内核",
        core_subtitle: "全平台集成 MPV，并在移动端与桌面端提供高性能的原生播放器双引擎架构。",
        core_default: "默认",
        core_alt: "可选",
        core_note: "所有平台均内置了强大的 MPV 播放器以保证最大的格式兼容性。在此基础上，Android 与 Apple 设备额外集成了深度优化的原生播放器作为默认项，为您带来更卓越的解码性能和更低的功耗表现。",
        changelog_category_changes: "更改内容",
        changelog_category_bug_fixes: "修复内容",
        changelog_item_danmaku: "新增高性能弹幕系统",
        changelog_item_pc_subtitle: "PC端增加本地字幕挂载功能",
        changelog_item_mpv_subtitle_sync: "MPV播放器增加字幕时间轴同步控制",
        changelog_item_media_network_upgrade: "媒体库与网络核心升级：实现了全新的媒体库数据模型及分页加载重试，引入网络请求池化 (Network Pooling) 优化加载效率",
        changelog_item_player_refactor: "播放器深度重构：对底层逻辑及 UI 组件进行了大规模重构",
        changelog_item_playback_fail_retry: "在播放失败后，显示重试按钮和详细错误信息",
        changelog_item_ui_ux_optimize: "优化UI/UX",
        changelog_fix_seasons_limit: "修复了长剧集中的“季数限制 (Seasons Limit)”加载和显示问题",
        changelog_fix_ui_overflow: "修复了部分界面发生 UI 溢出 (Overflow) 的问题",
        changelog_fix_progress_report: "修复了后退时播放进度不上报的问题"
    }
};

// Application State
let currentLanguage = 'en'; // Default fallback

document.addEventListener('DOMContentLoaded', () => {
    // ─── 1. Language Detection ───
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    if (langParam && (langParam === 'en' || langParam === 'zh')) {
        currentLanguage = langParam;
    } else {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang && browserLang.toLowerCase().includes('zh')) {
            currentLanguage = 'zh';
        }
    }

    // 2. Initialize text content
    applyLanguage(currentLanguage);

    // 3. Bind language toggle button
    const langBtn = document.getElementById('langToggle');
    langBtn.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
        applyLanguage(currentLanguage);
    });

    // ─── 4. Scroll Reveal (IntersectionObserver) ───
    initScrollReveal();

    // ─── 5. Navbar Scroll Enhancement ───
    initNavbarScroll();

    // ─── 6. Active Nav Link Highlighting ───
    initActiveNavLink();

    // ─── 7. Mouse-Follow Glow (Desktop only) ───
    initMouseGlow();
});

/* ═══════════════════════════════════════════
   SCROLL REVEAL
   Uses IntersectionObserver to add .revealed
   class when elements enter the viewport.
   Supports stagger delays via data-delay.
   ═══════════════════════════════════════════ */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (!revealElements.length) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealElements.forEach(el => el.classList.add('revealed'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = parseInt(el.dataset.delay, 10) || 0;

                setTimeout(() => {
                    el.classList.add('revealed');
                }, delay);

                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════
   NAVBAR SCROLL ENHANCEMENT
   Adds .scrolled class when page is scrolled
   beyond a threshold for enhanced visual state.
   ═══════════════════════════════════════════ */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on init
    onScroll();
}

/* ═══════════════════════════════════════════
   ACTIVE NAV LINK
   Highlights the nav link corresponding to
   the section currently in view.
   ═══════════════════════════════════════════ */
function initActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = [];

    navLinks.forEach(link => {
        const id = link.getAttribute('href').slice(1);
        const section = document.getElementById(id);
        if (section) sections.push({ link, section });
    });

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const match = sections.find(s => s.section === entry.target);
            if (match) {
                if (entry.isIntersecting) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    match.link.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-80px 0px -40% 0px'
    });

    sections.forEach(s => observer.observe(s.section));
}

/* ═══════════════════════════════════════════
   MOUSE-FOLLOW GLOW (Desktop)
   Subtle radial glow that follows the cursor.
   Disabled on touch / small-screen devices.
   ═══════════════════════════════════════════ */
function initMouseGlow() {
    const glow = document.getElementById('mouseGlow');
    if (!glow) return;

    // Skip on touch devices or narrow screens
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || window.innerWidth < 768) return;

    let animFrame = null;

    document.addEventListener('mousemove', (e) => {
        if (animFrame) cancelAnimationFrame(animFrame);

        animFrame = requestAnimationFrame(() => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
            if (!glow.classList.contains('active')) {
                glow.classList.add('active');
            }
        });
    });

    document.addEventListener('mouseleave', () => {
        glow.classList.remove('active');
    });
}

/* ═══════════════════════════════════════════
   i18n HELPERS
   ═══════════════════════════════════════════ */

/**
 * Helper to update or insert a meta tag by name.
 */
function updateMetaTag(name, content) {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
}

/**
 * Helper to update or insert a meta property (Open Graph).
 */
function updateMetaProperty(property, content) {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
}

/**
 * Applies the selected language to all elements with a [data-i18n] attribute,
 * and updates document metadata.
 * @param {string} lang - 'en' or 'zh'
 */
function applyLanguage(lang) {
    if (!Object.prototype.hasOwnProperty.call(i18nDict, lang)) return;
    const dict = i18nDict[lang];
    if (!dict) return;

    // Update HTML lang attribute for Accessibility
    document.documentElement.lang = lang;

    // Update the toggle button text indicator
    document.getElementById('currentLang').textContent = lang.toUpperCase();

    // Re-render all targeted elements
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (Object.prototype.hasOwnProperty.call(dict, key)) {
            element.textContent = dict[key];
        }
    });

    // Update page title, description, and keywords dynamically for different languages
    if (lang === 'zh') {
        document.title = "Optic Player - 跨平台 Emby 播放器/客户端 | Apple TV、Android、Windows、macOS、iOS、Linux";
        updateMetaTag('description', "Optic Player 是一款优雅的跨平台 Emby 播放器与客户端，受 Apple TV 启发设计。支持 Windows、macOS、Linux、iOS、Android 及 Apple TV。全平台集成 MPV，移动端提供原生双引擎播放，4K 硬件加速解码，低功耗高性能。");
        updateMetaTag('keywords', "Emby播放器, Emby客户端, 第三方Emby客户端, 第三方Emby播放器, 跨平台Emby播放器, Apple TV Emby, Android TV Emby, 电视Emby播放器, MPV播放器, Emby 4K硬解, 全平台Emby, macOS Emby, Windows Emby, iOS Emby, 影音播放器, Optic Player");

        // Open Graph Metadata
        updateMetaProperty('og:title', "Optic Player - 跨平台 Emby 播放器与客户端");
        updateMetaProperty('og:description', "优雅的跨平台 Emby 播放器/客户端，支持 Apple TV、Android、Windows、macOS、iOS 及 Linux。MPV + 原生双引擎，4K 硬件解码。");

        // Twitter Card Metadata
        updateMetaTag('twitter:title', "Optic Player - 跨平台 Emby 播放器与客户端");
        updateMetaTag('twitter:description', "优雅的跨平台 Emby 播放器/客户端，支持 Apple TV、Android、Windows、macOS、iOS 及 Linux。MPV + 原生双引擎，4K 硬件解码。");

        // Locale
        updateMetaProperty('og:locale', 'zh_CN');
    } else {
        document.title = "Optic Player - Cross-Platform Emby Player & Client | Apple TV, Android, Windows, macOS, iOS, Linux";
        updateMetaTag('description', "Optic Player is an elegant, Apple TV-inspired cross-platform Emby player and client. Available on Windows, macOS, Linux, iOS, Android & Apple TV. Features MPV and native dual-engine playback for superior 4K hardware decoding performance and low power consumption.");
        updateMetaTag('keywords', "Emby player, Emby client, Emby app, cross-platform Emby player, third party Emby client, Apple TV Emby, Android TV Emby player, MPV Emby player, Windows Emby player, macOS Emby player, Linux Emby player, iOS Emby player, 4K Emby player, media server player, Optic Player");

        // Open Graph Metadata
        updateMetaProperty('og:title', "Optic Player - Cross-Platform Emby Player & Client");
        updateMetaProperty('og:description', "An elegant cross-platform Emby player & client for Apple TV, Android, Windows, macOS, iOS & Linux. Dual-engine playback with MPV and native players for 4K hardware decoding.");

        // Twitter Card Metadata
        updateMetaTag('twitter:title', "Optic Player - Cross-Platform Emby Player & Client");
        updateMetaTag('twitter:description', "An elegant cross-platform Emby player & client for Apple TV, Android, Windows, macOS, iOS & Linux. Dual-engine playback with MPV and native players for 4K hardware decoding.");

        // Locale
        updateMetaProperty('og:locale', 'en_US');
    }
}
