# 夏末物语

> 在夏末的尾巴上，写下值得留下的故事。

基于 VitePress 构建的个人内容站点，采用手账风格主题设计，分享数独技巧、作业辅导、技术阅读与游戏攻略。

访问地址：[docs.ixx9527.xin](https://docs.ixx9527.xin)

## 内容分类

- **数独** — 高级技巧的底层原理与快速识别方法
- **作业** — 文化遗产寻访、数学试卷精解等
- **技术** — AI 智能体与计算机使用方向的论文解读
- **游戏** — FF7 重制版攻略、暗黑破坏神 II 各职业开荒速查

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

### 构建站点

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 目录结构

```
docs/
├── .vitepress/        # VitePress 配置目录
│   ├── config.js      # 站点配置（导航、侧边栏、搜索等）
│   └── theme/         # 自定义主题（手账风格样式）
├── articles/          # 文章目录（按分类组织）
├── public/            # 静态资源目录
├── index.md           # 首页（分类卡片导航）
└── package.json       # 项目配置
```

## 技术栈

- [VitePress](https://vitepress.dev/) — 静态站点生成器
- 自定义 CSS 主题 — 纸白/墨绿/暖橘配色，楷体标题，手账装饰风格
- 本地全文搜索
- GitHub Actions → GitHub Pages 自动部署

## 许可证

MIT
