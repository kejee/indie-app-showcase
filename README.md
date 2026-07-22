# 🚀 独立开发者 GitHub Pages App 展示主页

这是一个专门为独立 App 开发者（主打 macOS, iOS & Android 端）设计的极简、高级感个人主页与应用展厅。

## 🌟 功能特性

- **现代暗黑极客风 (Glassmorphism + Glow)**：采用了 Apple 风格的深色磨砂玻璃美学与渐变微光。
- **App 筛选与展厅 (Category Tabs)**：支持按 `macOS 专区`、`iOS 专区`、`macOS / iOS 通用`、`iOS / Android 双端` 进行卡片过滤。
- **合规隐私协议 (Privacy Policy)**：每个 App 拥有符合 Apple App Store / Google Play 审查标准格式的独立协议。
- **独立 URL Hash 路由 (App Store 审核必备)**：
  - 填入 App Store 的隐私链接格式：`https://username.github.io/#privacy-focuspulse`
  - 访问该链接会自动拉起对应 App 的隐私协议弹窗！
- **技术支持与下载渠道**：支持集成 App Store、Mac App Store、.DMG 独立签名包、TestFlight 预约与 Google Play 链接。
- **提 Issue 与反馈入口**：预留 GitHub Issues 提交与邮件反馈双通道。

---

## 🛠️ 如何添加修改你的 App

所有 App 数据均位于 `app.js` 的 `APPS_DATA` 对象中，修改或新增极简方便：

```javascript
const APPS_DATA = {
  myapp: {
    id: 'myapp',
    name: '我的新 App',
    tagline: '一句话功能简介',
    category: 'universal', // 可选: macos, ios, universal, cross-platform
    version: 'v1.0.0',
    iconClass: 'theme-blue', // 可选: theme-blue, theme-purple, theme-green
    iconName: 'zap', // Feather Icon 名称
    badges: ['macOS / iOS 通用', 'SwiftUI'],
    highlights: ['特色功能 1', '特色功能 2'],
    downloads: [
      { name: 'App Store 下载', url: 'https://...', primary: true }
    ],
    faq: [
      { q: '常见问题标题？', a: '回答内容...' }
    ],
    privacy: `<h4>1. 数据安全说明</h4><p>数据完全存放在本地...</p>`,
    githubIssueUrl: 'https://github.com/yourname/myapp/issues/new'
  }
}
```

---

## 📦 如何部署到 GitHub Pages

1. **新建仓库**：在 GitHub 创建一个新的仓库（例如名为 `portfolio` 或 `yourname.github.io`）。
2. **推送代码**：
   ```bash
   cd indie-app-showcase
   git init
   git add .
   git commit -m "feat: initial commit for indie app showcase website"
   git branch -M main
   git remote add origin git@github.com:yourname/repository-name.git
   git push -u origin main
   ```
3. **开启 GitHub Pages**：
   - 打开 GitHub 仓库设置 ➔ **Settings** ➔ **Pages**。
   - 在 **Source** 选择 `Deploy from a branch`。
   - Branch 选择 `main` / `root (/)` ➔ 点击 **Save**。
   - 约 1 分钟后即可通过 `https://yourname.github.io/repository-name` 访问！
