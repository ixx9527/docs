# 文档站点

基于 VitePress 构建的文档站点。

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
├── .vitepress/     # VitePress 配置目录
│   └── config.js   # 站点配置
├── public/         # 静态资源目录
├── index.md        # 首页
└── package.json    # 项目配置
```

## 部署

本站点通过 GitHub Actions 自动部署到 GitHub Pages。

## 许可证

MIT
