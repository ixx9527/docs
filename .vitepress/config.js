import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: '夏末物语',
  description: '在夏末的尾巴上，写下值得留下的故事',
  lang: 'zh-CN',

  // homeworks/ 已 gitignore，但 VitePress 默认会把根目录所有 .md 编进 dist 并喂给本地搜索。
  // CI 检出时没有该目录，线上不受影响；挡的是本地 build → preview / serve 直连局域网这条路径。
  srcExclude: ['homeworks/**'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/brand/logo.svg' }],
  ],

  themeConfig: {
    logo: '/brand/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '数独',
        items: [
          { text: '高级技巧的底层原理', link: '/articles/sudoku-advanced-techniques' },
          { text: '解题技巧的快速识别', link: '/articles/sudoku-pattern-recognition' },
        ],
      },
      {
        text: '语文',
        items: [
          { text: '作文：我的超市达人', link: '/articles/essay-supermarket-grandma' },
          { text: '周记：第一次做龙井虾仁', link: '/articles/essay-longjing-shrimp' },
          { text: '日记：绿豆成长记录', link: '/articles/diary-mung-bean-observation' },
        ],
      },
      {
        text: '数学',
        items: [
          { text: '错题本 · 四上数学（第一册）', link: '/articles/mistakes-grade4-math-first' },
          { text: '三问四年级 · 计算与方程专项 30 题', link: '/articles/sanwen-grade4-computation-drills' },
          { text: '三问四年级数学入学测试卷精解', link: '/articles/sanwen-grade4-math-entry-test' },
          { text: '学而思 2026 四暑 S 思维闯关', link: '/articles/xueersi-grade4-summer-s-challenge' },
        ],
      },
      {
        text: '综合实践',
        items: [
          { text: '文化遗产寻访', link: '/articles/heritage-fieldtrip-grand-canal' },
          { text: '大运河宣讲视频文案', link: '/articles/heritage-grand-canal-video-script' },
        ],
      },
      {
        text: '技术',
        items: [
          { text: 'Programming with Pixels 论文解读', link: '/articles/programming-with-pixels-cua-software-engineering' },
          { text: 'CUA-SWE 论文解读', link: '/articles/cua-swe-visual-software-engineering' },
        ],
      },
      {
        text: '游戏',
        items: [
          { text: 'FF7 重制版流程攻略', link: '/articles/ff7-remake-walkthrough' },
          { text: 'FF7 战斗机制与魔晶石', link: '/articles/ff7-remake-combat-materia-guide' },
          { text: '暗黑2 暴风雪法师', link: '/articles/d2-blizzard-sorceress-guide' },
          { text: '暗黑2 召唤死灵', link: '/articles/d2-necromancer-summoner-guide' },
          { text: '暗黑2 龙卷风德鲁伊', link: '/articles/d2-tornado-druid-guide' },
          { text: '暗黑2 狂乱野蛮人', link: '/articles/d2-frenzy-barbarian-guide' },
          { text: '霍格沃茨之遗 30 天开荒', link: '/articles/hl-30-day-walkthrough' },
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
          text: '语文',
          collapsed: false,
          items: [
            { text: '作文：我的超市达人——奶奶', link: '/articles/essay-supermarket-grandma' },
            { text: '周记：第一次做龙井虾仁', link: '/articles/essay-longjing-shrimp' },
            { text: '日记：绿豆成长记录', link: '/articles/diary-mung-bean-observation' },
          ],
        },
        {
          text: '数学',
          collapsed: false,
          items: [
            { text: '错题本 · 四上数学（第一册）', link: '/articles/mistakes-grade4-math-first' },
            { text: '三问四年级 · 计算与方程专项 30 题', link: '/articles/sanwen-grade4-computation-drills' },
            { text: '三问四年级数学入学测试卷（S 卷-1）精解', link: '/articles/sanwen-grade4-math-entry-test' },
            { text: '学而思 2026 四暑 S 思维闯关', link: '/articles/xueersi-grade4-summer-s-challenge' },
          ],
        },
        {
          text: '综合实践',
          collapsed: false,
          items: [
            { text: '文化遗产寻访：拱宸桥·桥西', link: '/articles/heritage-fieldtrip-grand-canal' },
            { text: '小小讲解员：京杭大运河宣讲视频文案', link: '/articles/heritage-grand-canal-video-script' },
          ],
        },
        {
          text: '技术',
          collapsed: false,
          items: [
            { text: 'Programming with Pixels：让 AI 看着 IDE 写代码', link: '/articles/programming-with-pixels-cua-software-engineering' },
            { text: 'CUA-SWE：当 AI 智能体遇上视觉软件工程', link: '/articles/cua-swe-visual-software-engineering' },
          ],
        },
        {
          text: '游戏',
          collapsed: false,
          items: [
            { text: '米德加的三十天：FF7 重制版流程攻略', link: '/articles/ff7-remake-walkthrough' },
            { text: '力竭才是伤害公式：战斗机制与魔晶石 Build', link: '/articles/ff7-remake-combat-materia-guide' },
            { text: '暗黑破坏神 II：暴风雪法师开荒速查', link: '/articles/d2-blizzard-sorceress-guide' },
            { text: '暗黑破坏神 II：召唤死灵开荒速查', link: '/articles/d2-necromancer-summoner-guide' },
            { text: '暗黑破坏神 II：龙卷风德鲁伊开荒速查', link: '/articles/d2-tornado-druid-guide' },
            { text: '暗黑破坏神 II：狂乱野蛮人开荒速查', link: '/articles/d2-frenzy-barbarian-guide' },
            { text: '霍格沃茨之遗：三十天均衡开荒路线', link: '/articles/hl-30-day-walkthrough' },
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
