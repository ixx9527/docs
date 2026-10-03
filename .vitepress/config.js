import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: '夏末物语',
  description: '夏末的个人文档站点',
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '数独高级技巧', link: '/articles/sudoku-advanced-techniques' },
      { text: '数独技巧识别', link: '/articles/sudoku-pattern-recognition' },
      {
        text: '作业',
        items: [
          { text: '文化遗产寻访', link: '/articles/heritage-fieldtrip-grand-canal' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
  },
})
