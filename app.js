/**
 * Alex Studio - Indie App Showcase JavaScript Logic
 * App Registry for Lumos, WakeCat, Diffy, and ZipVideo.
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
      { name: 'App Store (iOS / iPadOS)', desc: '支持 iPhone & iPad (iOS 16.0+)', icon: 'smartphone', url: 'https://apps.apple.com/app/id6806335286', primary: true }
    ],
    faq: [
      { q: '录屏产生的视频文件会占用大量手机空间吗？', a: '不会。LUMILumos 使用内存零拷贝帧流技术，拼接完成后临时录屏缓存会自动彻底删除。' },
      { q: '长图缝合失败或出现重复怎么办？', a: '可以在调整界面手动设置顶部/底部忽略区域，重新触发自动缝合计算。' }
    ],
    privacyUpdatedAt: '2026年11月17日',
    privacy: `
      <h4>1. 我们不收集任何个人信息</h4>
      <p>LUMILumos 不收集、不存储、不传输任何可识别您身份的个人信息，也没有账号系统。所有处理均在您的设备本地完成，绝不会上传至任何服务器。</p>

      <h4>2. 屏幕录制与相册访问</h4>
      <ul>
        <li><b>屏幕录制（广播）权限：</b>仅在您手动触发"录屏长图"时使用。录屏画面直接进入设备内存并参与拼接，不写入云端。</li>
        <li><b>相册读取权限：</b>仅在"视频台词"功能中选择视频时读取您指定的视频帧，用于设备端 OCR 识别。</li>
        <li><b>相册写入权限：</b>用于把生成的长图或导出的视频帧保存到您的相册。</li>
      </ul>

      <h4>3. 网络与跟踪说明</h4>
      <p>应用完全支持离线运行，零集成任何第三方分析、广告或追踪 SDK，不进行跨 App 跟踪。</p>

      <h4>4. 数据留存与删除</h4>
      <p>由于本应用不收集任何数据，服务端不存在您的任何数据副本。设备上产生的临时文件（录屏缓存、中间帧）会在拼接完成或应用退出时自动清除；您也可以随时在 App 内「媒体库 → 清理缓存」手动清除，或直接卸载应用，所有本地数据将随之删除。</p>

      <h4>5. 权限撤回与同意管理</h4>
      <p>屏幕录制与相册权限均由 iOS 系统管理。您可以随时前往「设置 → 隐私与安全性 → 屏幕录制 / 照片」关闭对本应用的授权；撤回后对应功能将不可用，但不影响其他功能。</p>

      <h4>6. 技术支持联系</h4>
      <p>如有任何疑问，请联系开发者邮箱：<a href="mailto:support@027114.xyz">support@027114.xyz</a>。</p>

      <h4>7. 生效日期</h4>
      <p>本隐私政策最后更新于 2026 年 11 月 17 日。</p>

      <hr class="privacy-divider" />
      <p class="privacy-lang-label">English Version</p>

      <h4>1. We do not collect any personal information</h4>
      <p>LUMILumos does not collect, store or transmit any personally identifiable information, and there is no account system. All processing happens locally on your device and is never uploaded to any server.</p>

      <h4>2. Screen Recording and Photo Library Access</h4>
      <ul>
        <li><b>Screen Recording (Broadcast) permission:</b> used only when you start a "long screenshot" session. Captured frames are processed in the device's memory and never leave the device.</li>
        <li><b>Photo Library read access:</b> used only when you pick a video in the dialogue feature, so that its frames can be read and recognised on device.</li>
        <li><b>Photo Library write access:</b> used only to save the stitched image or the exported frames to your photo library.</li>
      </ul>

      <h4>3. Network and Tracking</h4>
      <p>The app works fully offline. It contains no third-party analytics, advertising or tracking SDK, and it does not track you across apps or websites.</p>

      <h4>4. Data Retention and Deletion</h4>
      <p>Because no data is collected, no copy of your data exists on any server. Temporary files created on the device (recording cache and intermediate frames) are removed automatically when stitching finishes or when the app quits. You can also clear them at any time in the app under "Media Library → Clear Cache", or simply delete the app, which removes all local data.</p>

      <h4>5. Withdrawing Permission</h4>
      <p>Screen Recording and Photo Library permissions are controlled by iOS. You can revoke them at any time in Settings → Privacy &amp; Security → Screen Recording or Photos. Revoking a permission disables only the related feature; the rest of the app keeps working.</p>

      <h4>6. Contact</h4>
      <p>If you have any questions, contact the developer at <a href="mailto:support@027114.xyz">support@027114.xyz</a>.</p>

      <h4>7. Effective Date</h4>
      <p>This privacy policy was last updated on November 17, 2026.</p>
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

  diffy: {
    id: 'diffy',
    name: 'Diffy 联动对比',
    tagline: 'macOS / iOS / iPadOS 跨平台双图联动同步对比利器。',
    logo: 'assets/logos/diffy.png',
    version: 'v1.2.0',
    badges: ['macOS', 'iOS', 'iPadOS', 'Universal', 'SwiftUI'],
    highlights: [
      '滑块分割裁切与透明度叠加双对比模式，细节毕现',
      '双图画布强同步：双指捏合或鼠标滚轮秒级同步缩放与平移',
      '支持 Drag & Drop 拖拽文件入窗与 macOS 原生快捷键'
    ],
    downloads: [
      { name: 'Mac App Store', desc: '支持 macOS 12.0+ (Universal Binary)', icon: 'command', url: 'https://apps.apple.com', primary: true },
      { name: 'App Store (iOS / iPadOS)', desc: '支持 iPhone & iPad (iOS 15.0+)', icon: 'smartphone', url: 'https://apps.apple.com', primary: false }
    ],
    faq: [
      { q: '两张对比图片尺寸不一致怎么办？', a: 'Diffy 控制条提供“一键对齐”按钮，会自动对齐两图中心点并按等比例拉伸缩放。' },
      { q: 'macOS 端支持直接拖拽图片吗？', a: '支持。您可以直接从 Finder 或其他软件中把两张图片拖入窗口立即开启对比。' }
    ],
    privacy: `
      <h4>1. 图像数据安全声明</h4>
      <p>Diffy 是一款专注于本地视觉对比的工具软件。所有导入的对比图像<strong>100% 仅保存在您的设备内存中</strong>。</p>

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
      { name: 'App Store (iOS / iPadOS)', desc: '支持 iOS 15.0 或更高版本', icon: 'smartphone', url: 'https://apps.apple.com', primary: true },
      { name: 'Google Play (Android)', desc: '支持 Android 8.0 或更高版本', icon: 'smartphone', url: 'https://play.google.com', primary: false }
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
const modalPrivacyUpdate = document.getElementById('modalPrivacyUpdate');
const modalPrivacyContent = document.getElementById('modalPrivacyContent');
const modalGithubIssueLink = document.getElementById('modalGithubIssueLink');
const modalSupportEmail = document.getElementById('modalSupportEmail');
const modalEmailFeedbackLink = document.getElementById('modalEmailFeedbackLink');

// ==========================================================================
// 3. Modal Activation, URL Sync & Permalink Copy
// ==========================================================================
let currentAppId = null;
let currentTabName = 'overview';

const VALID_TABS = new Set(['overview', 'download', 'support', 'privacy', 'issues']);
const APP_ID_ALIASES = { diffty: 'diffy' };
const LEGACY_HASH_TAB_MAP = {
  '#privacy-': 'privacy',
  '#support-': 'support',
  '#download-': 'download',
  '#issues-': 'issues',
  '#app-': 'overview'
};

function normalizeAppId(rawId) {
  if (!rawId) return null;
  const resolved = APP_ID_ALIASES[rawId] || rawId;
  return APPS_DATA[resolved] ? resolved : null;
}

function buildPermalink(appId, tabName = 'overview') {
  const url = new URL(window.location.href);
  url.hash = '';
  url.searchParams.set('app', appId);
  if (tabName && tabName !== 'overview') {
    url.searchParams.set('tab', tabName);
  } else {
    url.searchParams.delete('tab');
  }
  return url.toString();
}

function syncUrlAndPermalinks(appId, tabName = 'overview') {
  const url = new URL(window.location.href);
  let permalink = '';

  if (appId) {
    permalink = buildPermalink(appId, tabName);
    url.href = permalink;
  } else {
    url.searchParams.delete('app');
    url.searchParams.delete('tab');
    if (Object.keys(LEGACY_HASH_TAB_MAP).some(prefix => url.hash.startsWith(prefix))) {
      url.hash = '';
    }
  }

  document.querySelectorAll('[data-permalink-text]').forEach(el => {
    el.textContent = permalink;
  });
  resetCopyButtons();

  try {
    history.replaceState(null, '', url.toString());
  } catch (_) {
    // Ignore SecurityError when previewed directly via file:// in strict browsers.
  }
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) {
      // Fallback to execCommand below
    }
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } finally {
    textarea.remove();
  }
  return ok;
}

function setCopyButtonState(btn, iconName, labelText, copied) {
  const textEl = btn.querySelector('.copy-btn-text');
  const iconEl = btn.querySelector('svg, i');
  if (textEl) textEl.textContent = labelText;
  if (iconEl) {
    const nextIcon = document.createElement('i');
    nextIcon.setAttribute('data-feather', iconName);
    iconEl.replaceWith(nextIcon);
    if (window.feather) feather.replace();
  }
  btn.classList.toggle('copied', copied);
}

function resetCopyButtons() {
  document.querySelectorAll('[data-copy-link]').forEach(btn => {
    if (!btn.classList.contains('copied')) return;
    clearTimeout(btn._copyTimer);
    setCopyButtonState(
      btn,
      btn.dataset.defaultIcon || (btn.classList.contains('modal-copy-btn') ? 'link' : 'copy'),
      btn.dataset.defaultLabel || '复制',
      false
    );
  });
}

function flashCopySuccess(btn) {
  if (!btn.dataset.defaultLabel) {
    const textEl = btn.querySelector('.copy-btn-text');
    btn.dataset.defaultLabel = textEl ? textEl.textContent : '复制';
  }
  if (!btn.dataset.defaultIcon) {
    btn.dataset.defaultIcon = btn.classList.contains('modal-copy-btn') ? 'link' : 'copy';
  }
  clearTimeout(btn._copyTimer);
  setCopyButtonState(btn, 'check', '已复制', true);
  btn._copyTimer = setTimeout(() => {
    setCopyButtonState(btn, btn.dataset.defaultIcon, btn.dataset.defaultLabel, false);
  }, 2000);
}

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
  const normalizedId = normalizeAppId(appId);
  const app = normalizedId ? APPS_DATA[normalizedId] : null;
  if (!app) return;

  currentAppId = normalizedId;

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
  modalDownloadGrid.innerHTML = app.downloads.map(d => {
    const hasValidUrl = Boolean(d.url && d.url !== '#');
    const actionHtml = hasValidUrl
      ? `<a href="${d.url}" target="_blank" rel="noopener noreferrer" class="btn ${d.primary ? 'btn-primary' : 'btn-secondary'}">
           <i data-feather="${d.icon}"></i> 立即下载
         </a>`
      : `<span class="btn btn-secondary btn-disabled" aria-disabled="true">
           <i data-feather="${d.icon}"></i> 敬请期待
         </span>`;
    return `
      <div class="download-card">
        <div class="download-card-title">${d.name}</div>
        <div class="download-card-desc">${d.desc}</div>
        ${actionHtml}
      </div>
    `;
  }).join('');

  // FAQ Accordion
  modalFaqList.innerHTML = app.faq.map(item => `
    <div class="faq-item">
      <div class="faq-question">Q: ${item.q}</div>
      <div class="faq-answer">${item.a}</div>
    </div>
  `).join('');

  // Privacy Policy
  if (modalPrivacyUpdate) {
    modalPrivacyUpdate.textContent = `更新于: ${app.privacyUpdatedAt || '2026年7月'}`;
  }
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
  currentAppId = null;

  syncUrlAndPermalinks(null);
}

function switchModalTab(tabName) {
  const safeTab = VALID_TABS.has(tabName) ? tabName : 'overview';
  currentTabName = safeTab;
  let activeTabEl = null;

  modalTabs.forEach(t => {
    if (t.getAttribute('data-tab') === safeTab) {
      t.classList.add('active');
      activeTabEl = t;
    } else {
      t.classList.remove('active');
    }
  });

  modalPanes.forEach(pane => {
    if (pane.id === `pane-${safeTab}`) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  if (currentAppId) {
    syncUrlAndPermalinks(currentAppId, safeTab);
  }

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

// Attach Click Listeners to App Cards & Copy Permalink Buttons
document.addEventListener('click', (e) => {
  const copyBtn = e.target.closest('[data-copy-link]');
  if (copyBtn) {
    const urlToCopy = currentAppId
      ? buildPermalink(currentAppId, currentTabName)
      : window.location.href;
    copyTextToClipboard(urlToCopy).then((ok) => {
      if (ok) flashCopySuccess(copyBtn);
    });
    return;
  }

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
// 4. URL Routing Support (Query Params + Legacy Hash Compatibility)
// ==========================================================================
function resolveRouteFromLocation() {
  // Primary format: ?app=<id>&tab=<tab>
  const params = new URLSearchParams(window.location.search);
  const queryAppId = normalizeAppId(params.get('app'));
  if (queryAppId) {
    const queryTab = params.get('tab') || 'overview';
    openAppModal(queryAppId, VALID_TABS.has(queryTab) ? queryTab : 'overview');
    return;
  }

  // Legacy format: #privacy-<id>, #support-<id>, #app-<id> (keep backward compatible)
  const hash = window.location.hash;
  if (!hash) return;

  for (const [prefix, tab] of Object.entries(LEGACY_HASH_TAB_MAP)) {
    if (hash.startsWith(prefix)) {
      const appId = normalizeAppId(hash.slice(prefix.length));
      if (appId) openAppModal(appId, tab);
      return;
    }
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
  resolveRouteFromLocation();
});

window.addEventListener('hashchange', resolveRouteFromLocation);
window.addEventListener('popstate', resolveRouteFromLocation);
