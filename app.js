/**
 * Alex Studio - Indie App Showcase JavaScript Logic
 * Handling Filter Tabs, App Data Models, Hash Routing, and Modal Interactions.
 */

// ==========================================================================
// 1. Apps Data Registry
// ==========================================================================
const APPS_DATA = {
  focuspulse: {
    id: 'focuspulse',
    name: 'FocusPulse 专注脉冲',
    tagline: '跨平台极简番茄钟与习惯追踪器，让时间沉淀为你的专注资产。',
    category: 'universal',
    version: 'v2.4.0',
    iconClass: 'theme-blue',
    iconName: 'clock',
    badges: ['macOS / iOS 通用', 'SwiftUI', 'iCloud Sync'],
    highlights: [
      'iCloud 多端实时同步与状态备份',
      '适配 macOS 菜单栏与 iOS 灵动岛 (Live Activities)',
      '离线数据优先，绝不收集任何个人敏感行为数据'
    ],
    downloads: [
      { type: 'macOS / iOS', name: 'App Store 下载', desc: '支持 iPhone, iPad & Mac (Apple Silicon)', icon: 'apple', url: 'https://apps.apple.com', primary: true },
      { type: 'macOS', name: 'Direct .DMG', desc: 'macOS 独立签名安装包 (v2.4.0)', icon: 'download', url: '#' },
      { type: 'Beta', name: 'TestFlight 预发布版', desc: '参与下一代 Beta 功能测试', icon: 'zap', url: '#' }
    ],
    faq: [
      { q: 'FocusPulse 是否需要购买订阅？', a: '支持免费基础功能。高级版本采用一次性买断制（Lifetime Pass），绝无强制按月订阅。' },
      { q: '我的专注计时数据存储在哪里？', a: '所有数据均存储在您的设备本地以及您个人的私有 iCloud Container 中，开发者无法调阅任何记录。' }
    ],
    privacy: `
      <h4>1. 概述与原则</h4>
      <p>FocusPulse 极其重视您的个人隐私。本应用专为离线与个人专注设计，恪守“本地优先”原则。</p>

      <h4>2. 数据收集与存储</h4>
      <p>我们<strong>不会收集、储存或传输</strong>您的任何个人身份信息、计时习惯或设备诊断数据。</p>
      <ul>
        <li><b>专注记录与统计：</b>仅保存在您的设备本地。</li>
        <li><b>多端同步：</b>若开启 iCloud 同步，数据将通过 Apple 官方 Encrypted iCloud 传输，仅在您个人的 Apple ID 设备间同步。</li>
      </ul>

      <h4>3. 第三方 SDK 与跟踪</h4>
      <p>FocusPulse 零集成第三方广告 SDK、零跟踪代码（No Analytics Tracking）。</p>

      <h4>4. 联系与协议变更</h4>
      <p>如对本隐私协议有任何疑问，请发送邮件至 <a href="mailto:privacy@alexapps.dev">privacy@alexapps.dev</a>。</p>
    `,
    githubIssueUrl: 'https://github.com/issues/new'
  },

  swiftclip: {
    id: 'swiftclip',
    name: 'SwiftClip 剪贴板大师',
    tagline: '专为 macOS 打造的高效剪贴板历史记录管理与智能搜索工具。',
    category: 'macos',
    version: 'v1.8.2',
    iconClass: 'theme-purple',
    iconName: 'clipboard',
    badges: ['macOS 专属', 'SQLite Encrypted', 'Keyboard Native'],
    highlights: [
      '全局快捷键 ⌥+V 秒级呼出与富文本格式清理',
      '本地 SQLite 加密存储，支持搜索历史记录与敏感词过滤',
      '智能识别剪贴板图片、代码片段、颜色值与网址链接'
    ],
    downloads: [
      { type: 'macOS', name: 'Mac App Store 下载', desc: '支持 macOS 12.0 或更高版本', icon: 'apple', url: 'https://apps.apple.com', primary: true },
      { type: 'macOS', name: 'Direct DMG 下载', desc: '经过 Apple 公证的独立 Build (v1.8.2)', icon: 'download', url: '#' }
    ],
    faq: [
      { q: 'SwiftClip 会占用很多内存吗？', a: '不会。全应用基于 Swift 原生开发，日常静默运行后台仅占用约 25MB 内存。' },
      { q: '剪贴板中的密码会被记录吗？', a: 'SwiftClip 默认会自动过滤来自 1Password、Bitwarden 等密码管理软件复制的内容。' }
    ],
    privacy: `
      <h4>1. 剪贴板数据安全声明</h4>
      <p>SwiftClip 需要读取系统剪贴板以提供历史记录功能。所有剪贴内容<strong>100% 仅存于您的 Mac 本地磁盘</strong>。</p>

      <h4>2. 敏感数据保护</h4>
      <p>应用内置自动识别规则，检测到 Password 类型的敏感复制事件时会自动跳过存储。您可以随时在设置中一键清空全部历史记录。</p>

      <h4>3. 网络连接</h4>
      <p>SwiftClip 完全支持断网离线使用，不会发起任何未经授权的外部网络请求。</p>

      <h4>4. 支持联系</h4>
      <p>隐私问题可联系开发者：<a href="mailto:support@alexapps.dev">support@alexapps.dev</a>。</p>
    `,
    githubIssueUrl: 'https://github.com/issues/new'
  },

  pocketnotes: {
    id: 'pocketnotes',
    name: 'PocketNotes 掌心便签',
    tagline: '轻量级 Markdown 离线卡片笔记，记录灵感与每日碎碎念。',
    category: 'cross-platform',
    version: 'v3.1.0',
    iconClass: 'theme-green',
    iconName: 'book-open',
    badges: ['iOS / Android 双端', 'Markdown', 'E2EE Sync'],
    highlights: [
      '端到端加密（E2EE）同步，保障每条笔记安全',
      '支持 iOS Widget 桌面小组件 & Android 桌面小部件',
      '完全零广告，支持本地导出'
    ],
    downloads: [
      { type: 'iOS', name: 'App Store (iOS / iPadOS)', desc: '支持 iOS 15.0+', icon: 'apple', url: 'https://apps.apple.com', primary: true },
      { type: 'Android', name: 'Google Play 下载', desc: '支持 Android 8.0+', icon: 'smartphone', url: '#' },
      { type: 'Android', name: 'Direct APK 下载', desc: '无 Google 服务框架通用 APK', icon: 'download', url: '#' }
    ],
    faq: [
      { q: '如何开启端到端加密？', a: '在设置中设置您的主加密密钥（Master Key）即可开启 E2EE。请妥善保存此密钥，开发者无法帮您找回。' },
      { q: '支持导出数据吗？', a: '支持随时一键将所有笔记打包导出为标准 Markdown .zip 文件。' }
    ],
    privacy: `
      <h4>1. 隐私政策概要</h4>
      <p>PocketNotes 是一款以保护灵感 privacy 为核心的笔记应用。</p>

      <h4>2. 笔记内容处理</h4>
      <p>您的笔记内容在传输与存储过程中均经过 AES-256 加密。服务器端仅存储密文，无解密密钥。</p>

      <h4>3. 权限说明</h4>
      <p>应用仅要求必要的本地存储读写权限，不会调阅您的通讯录、相册或位置信息。</p>
    `,
    githubIssueUrl: 'https://github.com/issues/new'
  }
};

// ==========================================================================
// 2. DOM Elements
// ==========================================================================
const appsGrid = document.getElementById('appsGrid');
const filterBtns = document.querySelectorAll('.tab-btn');

// Modal Elements
const appModal = document.getElementById('appModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalAppIcon = document.getElementById('modalAppIcon');
const modalAppTitle = document.getElementById('modalAppTitle');
const modalAppVersion = document.getElementById('modalAppVersion');
const modalAppTagline = document.getElementById('modalAppTagline');
const modalAppBadges = document.getElementById('modalAppBadges');

// Modal Tab Panes
const modalTabs = document.querySelectorAll('.modal-tab');
const modalPanes = document.querySelectorAll('.modal-tab-pane');

const modalScreenshots = document.getElementById('modalScreenshots');
const modalFeaturesList = document.getElementById('modalFeaturesList');
const modalDownloadGrid = document.getElementById('modalDownloadGrid');
const modalFaqList = document.getElementById('modalFaqList');
const modalPrivacyContent = document.getElementById('modalPrivacyContent');
const modalGithubIssueLink = document.getElementById('modalGithubIssueLink');

// ==========================================================================
// 3. Modal Activation & Population
// ==========================================================================
let currentAppId = null;

function openAppModal(appId, targetTab = 'overview') {
  const app = APPS_DATA[appId];
  if (!app) return;

  currentAppId = appId;

  // Set Header Meta
  modalAppTitle.textContent = app.name;
  modalAppVersion.textContent = app.version;
  modalAppTagline.textContent = app.tagline;
  
  // Icon Theme
  modalAppIcon.className = `modal-app-icon ${app.iconClass}`;
  modalAppIcon.innerHTML = `<i data-feather="${app.iconName}"></i>`;

  // Badges
  modalAppBadges.innerHTML = app.badges.map(b => `<span class="platform-tag tag-blue">${b}</span>`).join(' ');

  // Features List
  modalFeaturesList.innerHTML = app.highlights.map(h => `<li><i data-feather="check"></i> ${h}</li>`).join('');

  // Screenshots Carousel (Mockups)
  modalScreenshots.innerHTML = `
    <div class="screenshot-mockup"><i data-feather="monitor"></i><span>应用主界面 Mockup 1</span></div>
    <div class="screenshot-mockup"><i data-feather="sliders"></i><span>个性化设置界面 Mockup 2</span></div>
    <div class="screenshot-mockup"><i data-feather="layers"></i><span>多端同步展示 Mockup 3</span></div>
  `;

  // Downloads Grid
  modalDownloadGrid.innerHTML = app.downloads.map(d => `
    <div class="download-card">
      <div class="download-card-title">${d.name}</div>
      <div class="download-card-desc">${d.desc}</div>
      <a href="${d.url}" target="_blank" class="btn ${d.primary ? 'btn-primary' : 'btn-secondary'}">
        <i data-feather="${d.icon}"></i> 立即下载
      </a>
    </div>
  `).join('');

  // FAQ Accordion
  modalFaqList.innerHTML = app.faq.map(item => `
    <div class="faq-item">
      <div class="faq-question">Q: ${item.q}</div>
      <div class="faq-answer">${item.a}</div>
    </div>
  `).join('');

  // Privacy Policy
  modalPrivacyContent.innerHTML = app.privacy;

  // Issue Links
  modalGithubIssueLink.setAttribute('href', app.githubIssueUrl);

  // Switch Active Tab
  switchModalTab(targetTab);

  // Show Modal & Lock Body Scroll
  appModal.classList.add('active');
  appModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Re-render Feather Icons inside Modal
  if (window.feather) {
    feather.replace();
  }
}

function closeModal() {
  appModal.classList.remove('active');
  appModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  
  // Clear Hash without page refresh
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

function switchModalTab(tabName) {
  modalTabs.forEach(t => {
    if (t.getAttribute('data-tab') === tabName) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  modalPanes.forEach(pane => {
    if (pane.id === `pane-${tabName}`) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });
}

// Modal Tab Switch Listener
modalTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabName = tab.getAttribute('data-tab');
    switchModalTab(tabName);
  });
});

// Close Btn & Overlay Click Listener
modalCloseBtn.addEventListener('click', closeModal);
appModal.addEventListener('click', (e) => {
  if (e.target === appModal) closeModal();
});

// Keyboard Esc to Close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && appModal.classList.contains('active')) {
    closeModal();
  }
});

// Attach Click Listeners to App Cards
document.addEventListener('click', (e) => {
  const detailsBtn = e.target.closest('.open-details-btn');
  if (detailsBtn) {
    const appId = detailsBtn.getAttribute('data-appid');
    openAppModal(appId, 'overview');
    return;
  }

  const privacyBtn = e.target.closest('.open-privacy-btn');
  if (privacyBtn) {
    const appId = privacyBtn.getAttribute('data-appid');
    openAppModal(appId, 'privacy');
    return;
  }

  const supportBtn = e.target.closest('.open-support-btn');
  if (supportBtn) {
    const appId = supportBtn.getAttribute('data-appid');
    openAppModal(appId, 'support');
    return;
  }
});

// ==========================================================================
// 5. Hash Routing Support (Critical for App Store Privacy URL Audits)
// ==========================================================================
function checkHashRoute() {
  const hash = window.location.hash;
  if (!hash) return;

  // Formats: #privacy-focuspulse , #support-swiftclip , #app-focuspulse
  if (hash.startsWith('#privacy-')) {
    const appId = hash.replace('#privacy-', '');
    if (APPS_DATA[appId]) openAppModal(appId, 'privacy');
  } else if (hash.startsWith('#support-')) {
    const appId = hash.replace('#support-', '');
    if (APPS_DATA[appId]) openAppModal(appId, 'support');
  } else if (hash.startsWith('#app-')) {
    const appId = hash.replace('#app-', '');
    if (APPS_DATA[appId]) openAppModal(appId, 'overview');
  }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '60px';
      navLinks.style.right = '20px';
      navLinks.style.background = 'rgba(12, 17, 29, 0.95)';
      navLinks.style.padding = '20px';
      navLinks.style.borderRadius = '16px';
      navLinks.style.border = '1px solid rgba(255,255,255,0.1)';
    }
  });
}

// ==========================================================================
// 6. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) {
    feather.replace();
  }
  checkHashRoute();
});

window.addEventListener('hashchange', checkHashRoute);
