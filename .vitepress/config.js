import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: '文档站点',
  description: '基于 VitePress 构建的文档站点',
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
  },
})
