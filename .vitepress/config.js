import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: '夏末物语',
  description: '在夏末的尾巴上，写下值得留下的故事',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/brand/logo.svg' }],
  ],

  themeConfig: {
    logo: '/brand/logo.svg',

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
      {
        text: '游戏',
        items: [
          { text: 'FF7 重制版流程攻略', link: '/articles/ff7-remake-walkthrough' },
          { text: 'FF7 战斗机制与魔晶石', link: '/articles/ff7-remake-combat-materia-guide' },
        ],
      },
    ],

    sidebar: {
      '/articles/': [
        {
          text: '数独',
          collapsed: false,
          items: [
            { text: '高级技巧的底层原理', link: '/articles/sudoku-advanced-techniques' },
            { text: '解题技巧的快速识别', link: '/articles/sudoku-pattern-recognition' },
          ],
        },
        {
          text: '作业',
          collapsed: false,
          items: [
            { text: '文化遗产寻访：拱宸桥·桥西', link: '/articles/heritage-fieldtrip-grand-canal' },
          ],
        },
        {
          text: '游戏',
          collapsed: false,
          items: [
            { text: '米德加的三十天：FF7 重制版流程攻略', link: '/articles/ff7-remake-walkthrough' },
            { text: '力竭才是伤害公式：战斗机制与魔晶石 Build', link: '/articles/ff7-remake-combat-materia-guide' },
          ],
        },
      ],
    },

    outline: 'deep',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置',
            backButtonTitle: '关闭',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'medium', timeStyle: 'short' },
    },

    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    footer: {
      message: '在夏末的尾巴上，写下值得留下的故事',
      copyright: '© 2026 夏末物语',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ixx9527/docs' },
    ],
  },
})
