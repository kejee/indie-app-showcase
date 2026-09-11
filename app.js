/**
 * Alex Studio - Indie App Showcase JavaScript Logic
 * App Registry for Lumos, Diffty, and ZipVideo.
 */

// ==========================================================================
// 1. Real Apps Data Registry
// ==========================================================================
const APPS_DATA = {
  lumos: {
    id: 'lumos',
    name: 'LUMILumos 灵动长图',
    tagline: 'iOS / iPadOS 屏幕录制自动长图缝合工具，秒级无损生成高清长图。',
    logo: 'assets/logos/lumos.png',
    appStoreId: '6806335286',
    version: 'v1.0.0',
    badges: ['iOS', 'iPadOS', 'Metal 加速', '零拷贝'],
    highlights: [
      '屏幕录制一键触发，自动提取关键帧与算法缝合',
      '裸 BGRA 读写 + Metal 纹理零拷贝渲染，流畅不发热',
      '智能识别导航栏与底部固定元素，缝合精准无重影'
    ],
    downloads: [
      { name: 'App Store (iOS / iPadOS)', desc: '支持 iPhone & iPad (iOS 15.0+)', icon: 'smartphone', url: 'https://apps.apple.com/app/id6806335286', primary: true },
      { name: 'TestFlight 内部测试', desc: '体验全新自动化裁切功能', icon: 'zap', url: '#' }
    ],
    faq: [
      { q: '录屏产生的视频文件会占用大量手机空间吗？', a: '不会。LUMILumos 使用内存零拷贝帧流技术，拼接完成后临时录屏缓存会自动彻底删除。' },
      { q: '长图缝合失败或出现重复怎么办？', a: '可以在调整界面手动设置顶部/底部忽略区域，重新触发自动缝合计算。' }
    ],
    privacy: `
      <h4>1. 核心隐私承诺：100% 本地处理</h4>
      <p>LUMILumos 是一款纯本地的长图拼接工具。我们极其重视您的屏幕隐私。</p>

      <h4>2. 屏幕录制与相册访问</h4>
      <ul>
        <li><b>屏幕录制权限：</b>仅在您手动触发录屏长图拼接时使用，录屏画面直接在设备内存中转为长图，<strong>绝不会上传至任何服务器</strong>。</li>
        <li><b>相册存储权限：</b>用于将生成的最终长图保存至您的系统相册。</li>
      </ul>

      <h4>3. 网络与跟踪说明</h4>
      <p>应用完全支持离线运行，零集成任何第三方分析、广告或追踪 SDK。</p>

      <h4>4. 技术支持联系</h4>
      <p>如有任何疑问或意见反馈，请联系开发者邮件：<a href="mailto:support@027114.xyz">support@027114.xyz</a>。</p>
    `,
    githubIssueUrl: 'https://github.com/kejee/LUMILumos-iOS/issues/new'
  },

  wakecat: {
    id: 'wakecat',
    name: 'WakeCat 局域网唤醒',
    tagline: 'macOS / iOS / iPadOS 跨平台局域网 Wake-on-LAN 远程唤醒 PC / 服务器利器。',
    logo: 'assets/logos/wakecat.png',
    version: 'v1.0.0',
    badges: ['macOS', 'iOS', 'iPadOS', 'Universal', 'SwiftUI'],
    highlights: [
      'UDP Magic Packet 魔术包秒级广播，一键唤醒目标 PC 与服务器',
      'ICMP Ping 局域网连通性实时检测，在线/离线状态动态侦测刷新',
      '内置完整 Windows BIOS/网卡 WOL 图文配置指南与故障排查建议'
    ],
    downloads: [
      { name: 'Mac App Store', desc: '支持 macOS 13.0+ (Universal Binary)', icon: 'command', url: 'https://apps.apple.com', primary: true },
      { name: 'App Store (iOS / iPadOS)', desc: '支持 iPhone & iPad (iOS 16.0+)', icon: 'smartphone', url: 'https://apps.apple.com', primary: false }
    ],
    faq: [
      { q: '点击唤醒后，电脑为什么没有成功开机？', a: '请检查：1. 目标电脑 BIOS 是否已开启 Power On By PCI-E / Wake-on-LAN；2. Windows 网卡属性中是否启用了“允许此设备唤醒计算机”并关闭了“快速启动”；3. 电脑与手机/Mac 是否处于同一局域网或已配置网关广播。' },
      { q: '设备 IP 或 MAC 地址会被收集吗？', a: '完全不会。所有设备信息 100% 仅保存在您的手机/Mac 本地，应用零上传、零追踪。' }
    ],
    privacy: `
      <h4>1. 核心隐私承诺：100% 本地存储与离线运行</h4>
      <p>WakeCat 是一款局域网网络工具软件。我们坚信您的网络拓扑与设备配置信息属于严格隐私。</p>

      <h4>2. 设备信息（IP 地址 / MAC 地址）保护</h4>
      <ul>
        <li><b>本地存储：</b>您输入的计算机名称、IP 地址、MAC 地址和端口号等数据<strong>100% 仅保存在您的设备本地（NSUserDefaults / Keychain）</strong>。</li>
        <li><b>零服务器上传：</b>应用不设任何后台服务器，设备信息绝不会被收集、传输或共享给任何第三方。</li>
      </ul>

      <h4>3. 网络权限说明</h4>
      <p>应用仅在您触发“唤醒”或“刷新在线状态”时，在您的局域网内部发送 UDP 魔术包 (Magic Packet) 或 ICMP Ping 报文，不向互联网发起任何非必要请求，且零集成第三方追踪 SDK。</p>

      <h4>4. 技术支持联系</h4>
      <p>如有任何疑问或意见反馈，请联系开发者邮件：<a href="mailto:support@027114.xyz">support@027114.xyz</a>。</p>
    `,
    githubIssueUrl: 'https://github.com/kejee/WakeCat2/issues/new'
  },

  diffty: {
    id: 'diffty',
    name: 'Diffty 联动对比',
    tagline: 'macOS / iOS / iPadOS 跨平台双图联动同步对比利器。',
    logo: 'assets/logos/diffty.png',
    version: 'v1.2.0',
    badges: ['macOS', 'iOS', 'iPadOS', 'Universal', 'SwiftUI'],
    highlights: [
      '滑块分割裁切与透明度叠加双对比模式，细节毕现',
      '双图画布强同步：双指捏合或鼠标滚轮秒级同步缩放与平移',
      '支持 Drag & Drop 拖拽文件入窗与 macOS 原生快捷键'
    ],
    downloads: [
      { name: 'Mac App Store', desc: '支持 macOS 12.0+ (Universal Binary)', icon: 'command', url: 'https://apps.apple.com', primary: true },
      { name: 'App Store (iOS / iPadOS)', desc: '支持 iPhone & iPad (iOS 15.0+)', icon: 'smartphone', url: 'https://apps.apple.com', primary: false },
      { name: 'macOS Direct .DMG', desc: '独立签名公证版 (v1.2.0)', icon: 'download', url: '#' }
    ],
    faq: [
      { q: '两张对比图片尺寸不一致怎么办？', a: 'Diffty 控制条提供“一键对齐”按钮，会自动对齐两图中心点并按等比例拉伸缩放。' },
      { q: 'macOS 端支持直接拖拽图片吗？', a: '支持。您可以直接从 Finder 或其他软件中把两张图片拖入窗口立即开启对比。' }
    ],
    privacy: `
      <h4>1. 图像数据安全声明</h4>
      <p>Diffty 是一款专注于本地视觉对比的工具软件。所有导入的对比图像<strong>100% 仅保存在您的设备内存中</strong>。</p>

      <h4>2. 存储与网络权限</h4>
      <p>应用仅在您打开文件选择器或拖入图片时读取该图像文件，对比结束后关闭窗口即释放内存，绝无任何后门网络请求。</p>

      <h4>3. 联系开发者</h4>
      <p>反馈邮件：<a href="mailto:support@027114.xyz">support@027114.xyz</a>。</p>
    `,
    githubIssueUrl: 'https://github.com/kejee/Diffty/issues/new'
  },

  zipvideo: {
    id: 'zipvideo',
    name: '压点视频 ZipVideo',
    tagline: 'iOS / iPad / Android 上极致的监控级视频高压缩工具。',
    logo: 'assets/logos/zipvideo.png',
    version: 'v2.1.0',
    badges: ['iOS', 'iPadOS', 'Android', '纯本地', '无广告'],
    highlights: [
      '监控级高压缩率算法，大幅释放设备存储空间',
      '视频处理 100% 纯本地运行，视频数据永远不出设备',
      '零第三方 SDK 追踪，无广告干扰，支持批量压缩'
    ],
    downloads: [
      { name: 'App Store (iOS / iPadOS)', desc: '支持 iOS 15.0 或更高版本', icon: 'apple', url: 'https://apps.apple.com', primary: true },
      { name: 'Google Play (Android)', desc: '支持 Android 8.0 或更高版本', icon: 'smartphone', url: 'https://play.google.com', primary: false },
      { name: 'Android Direct APK', desc: '无 Google 框架通用安装包', icon: 'download', url: '#' }
    ],
    faq: [
      { q: '视频压缩会导致画质严重损坏吗？', a: 'ZipVideo 采用智能帧率与码率压点算法，在大幅降低体积的同时最大化保留人眼视觉清晰度。' },
      { q: '压缩视频需要上传到服务器吗？', a: '完全不需要！所有压缩计算全部在您的手机 CPU/GPU 本地完成，哪怕在断网飞行模式下也能流畅使用。' }
    ],
    privacy: `
      <h4>1. 核心隐私承诺：视频处理 100% 纯本地</h4>
      <table style="width:100%; margin: 12px 0; border-collapse:collapse; font-size:0.85rem; color:var(--text-secondary);">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">🏠 <b>纯本地处理</b></td><td style="padding:6px;">所有视频处理在您的设备本地完成，不依赖远程服务器</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">☁️ <b>零数据上传</b></td><td style="padding:6px;">视频文件、压缩参数、处理结果等不会上传至任何服务器</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">📡 <b>无网络请求</b></td><td style="padding:6px;">压缩运行期间不发起网络请求，视频数据不上网</td></tr>
        <tr><td style="padding:6px;">🛡️ <b>无第三方追踪</b></td><td style="padding:6px;">不集成数据分析、用户追踪或广告推送 SDK</td></tr>
      </table>

      <h4>2. 信息收集与使用说明</h4>
      <p><b>存储权限（相册/媒体文件）：</b>仅用于读取您选择压缩的视频文件，并将压缩后的新视频保存回相册。临时文件在压缩任务完成后会自动彻底删除。</p>

      <h4>3. 支持与联系</h4>
      <p>官方文档与技术支持支持双语。联络邮箱：<a href="mailto:support@027114.xyz">support@027114.xyz</a>。</p>
    `,
    githubIssueUrl: 'https://github.com/kejee/zip_video/issues/new'
  }
};

// ==========================================================================
// 2. DOM Elements
// ==========================================================================
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
const modalSupportEmail = document.getElementById('modalSupportEmail');
const modalEmailFeedbackLink = document.getElementById('modalEmailFeedbackLink');

// ==========================================================================
// 3. Modal Activation & Population
// ==========================================================================
let currentAppId = null;

// --------------------------------------------------------------------------
// App Store Screenshots: fetched at runtime from the iTunes Lookup API.
// JSONP (script tag + callback param) bypasses CORS, so this works on any
// static host such as GitHub Pages. Apps opt in via `appStoreId`
// (optional `appStoreCountry`, defaults to 'cn').
// --------------------------------------------------------------------------
const itunesLookupCache = new Map();
let itunesJsonpSeq = 0;

function fetchItunesScreenshots(appStoreId, country = 'cn') {
  const cacheKey = `${appStoreId}:${country}`;
  if (itunesLookupCache.has(cacheKey)) return itunesLookupCache.get(cacheKey);

  const promise = new Promise((resolve, reject) => {
    const callbackName = `__itunesJsonp_${++itunesJsonpSeq}_${Date.now()}`;
    const script = document.createElement('script');
    let settled = false;

    const cleanup = () => {
      delete window[callbackName];
      script.remove();
      clearTimeout(timer);
    };
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error('iTunes lookup timeout'));
    }, 6000);

    window[callbackName] = (data) => {
      if (settled) return;
      settled = true;
      cleanup();
      const urls = (data && data.results && data.results[0] && data.results[0].screenshotUrls) || [];
      if (urls.length) resolve(urls);
      else reject(new Error('iTunes lookup returned no screenshots'));
    };

    script.src = `https://itunes.apple.com/lookup?id=${encodeURIComponent(appStoreId)}&country=${encodeURIComponent(country)}&callback=${callbackName}`;
    script.onerror = () => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error('iTunes lookup request failed'));
    };
    document.head.appendChild(script);
  });

  // Only successful lookups stay cached; failures retry on the next open.
  itunesLookupCache.set(cacheKey, promise);
  promise.catch(() => itunesLookupCache.delete(cacheKey));
  return promise;
}

function loadAppStoreScreenshots(app) {
  const appId = app.id;
  fetchItunesScreenshots(app.appStoreId, app.appStoreCountry || 'cn')
    .then(urls => {
      if (currentAppId !== appId) return; // user already switched to another app
      modalScreenshots.innerHTML = urls.slice(0, 5).map((url, i) =>
        `<img class="screenshot-img" src="${url}" alt="${app.name} App Store 截图 ${i + 1}" loading="lazy" decoding="async" onload="this.classList.add('loaded')" />`
      ).join('');
    })
    .catch(() => {
      // Keep the placeholder mockups as fallback (e.g. app not yet on the store).
    });
}

function openAppModal(appId, targetTab = 'overview') {
  const app = APPS_DATA[appId];
  if (!app) return;

  currentAppId = appId;

  // Set Header Meta
  modalAppTitle.textContent = app.name;
  modalAppVersion.textContent = app.version;
  modalAppTagline.textContent = app.tagline;
  
  // Icon Image
  modalAppIcon.className = `modal-app-icon custom-logo-wrapper`;
  modalAppIcon.innerHTML = `<img src="${app.logo}" alt="${app.name}" class="app-logo-img" width="64" height="64" decoding="async" />`;

  // Badges
  modalAppBadges.innerHTML = app.badges.map(b => `<span class="platform-tag tag-blue">${b}</span>`).join(' ');

  // Features List
  modalFeaturesList.innerHTML = app.highlights.map(h => `<li><i data-feather="check"></i> ${h}</li>`).join('');

  // Screenshots Carousel: placeholder mockups render immediately; real App
  // Store screenshots replace them asynchronously when available.
  modalScreenshots.innerHTML = `
    <div class="screenshot-mockup"><i data-feather="image"></i><span>应用主界面</span></div>
    <div class="screenshot-mockup"><i data-feather="sliders"></i><span>核心功能设置</span></div>
    <div class="screenshot-mockup"><i data-feather="check-circle"></i><span>处理结果展示</span></div>
  `;
  if (app.appStoreId) loadAppStoreScreenshots(app);

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

  // Issue & Support Email Links
  modalGithubIssueLink.setAttribute('href', app.githubIssueUrl);
  if (modalSupportEmail) modalSupportEmail.setAttribute('href', 'mailto:support@027114.xyz');
  if (modalEmailFeedbackLink) modalEmailFeedbackLink.setAttribute('href', 'mailto:support@027114.xyz');

  // Switch Active Tab
  switchModalTab(targetTab);

  // Show Modal & Lock Body Scroll
  appModal.classList.add('active');
  appModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Ensure active tab is centered in the scrollable tab bar on mobile
  setTimeout(() => {
    const activeTab = document.querySelector('.modal-tab.active');
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, 50);

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
  let activeTabEl = null;

  modalTabs.forEach(t => {
    if (t.getAttribute('data-tab') === tabName) {
      t.classList.add('active');
      activeTabEl = t;
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

  if (activeTabEl) {
    activeTabEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
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
// 4. Hash Routing Support (Critical for App Store Privacy URL Audits)
// ==========================================================================
function checkHashRoute() {
  const hash = window.location.hash;
  if (!hash) return;

  // Formats: #privacy-lumos , #privacy-diffty , #privacy-zipvideo
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
// 5. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) {
    feather.replace();
  }
  checkHashRoute();
});

window.addEventListener('hashchange', checkHashRoute);
