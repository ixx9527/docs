import { createContentLoader } from 'vitepress'
import { execSync } from 'node:child_process'
import config from '../config.js'

/**
 * 首页文章索引：分组与标签复用 config.js 的侧边栏（唯一来源），
 * 新增文章只要挂进侧边栏，首页就会自动出现，不需要再改 index.md。
 * 排序按日期倒序，最新的排最前。
 */

const sidebar = config?.themeConfig?.sidebar?.['/articles/'] || []

const grouped = new Map()
const groupOrder = []
for (const section of sidebar) {
  if (!section?.items) continue
  groupOrder.push(section.text)
  for (const item of section.items) {
    const slug = String(item.link).replace(/^\/+/, '').replace(/^articles\//, '').replace(/\.html$/, '')
    grouped.set(slug, { group: section.text, label: item.text })
  }
}

// 首页文案：没有条目的自动退回正文首段，所以漏写也不会缺字
const DESC = {
  'sudoku-advanced-techniques': '从逻辑学与组合数学出发，讲清 X-Wing、Swordfish、AIC、ALS 为什么有效。',
  'sudoku-pattern-recognition': '一套成本递增的扫描流程，帮你判断"此刻该用哪一种技巧"。',
  'mistakes-grade4-math-first': '只记当时没独立做出来的题：题干、卷面情况、四年级算术法正解、错因、重做记录。',
  'mistakes-grade4-math-second': '《四上三单元复习（1）》收 10 条：单位三条、不肯算三条、竖式三条——卷面已订正过，所以按红圈判，不按答案判。',
  'heritage-fieldtrip-grand-canal': '四年级跨学科实践，从选目的地到写手账、做讲解的完整记录。',
  'heritage-grand-canal-video-script': '1–2 分钟讲解口播稿：主稿 480 字、四段加长料、7 个分镜与字幕，外加数字口径和读音避坑清单。',
  'essay-supermarket-grandma': '四年级写人习作，铅笔原稿与老师红笔批注并排呈现，反推批改到底在要求什么。',
  'essay-longjing-shrimp': '要求写出制作过程 200 字。原稿、补足 200 字的修改版、逐条修改建议与誊清前四查。',
  'sanwen-grade4-computation-drills': '照着入学测试卷丢的那 30 分反着编：位值与小数、巧算、解方程、大数乘法，每题解答都带验算。',
  'sanwen-grade4-math-entry-test': '卷面题目重排 + 10 题分步参考解答，解答可点击展开或收起。',
  'xueersi-grade4-summer-s-challenge': '4 页 16 题，涵盖计算、方程、几何、计数、数论和行程，每题配参考解答。',
  'programming-with-pixels-cua-software-engineering': '论文解读：纯视觉操作 IDE 只有 22.9%，加两个文本 API 就跳到 50.7%——瓶颈不在推理，在视觉。',
  'cua-swe-visual-software-engineering': '论文解读：让 AI 同时写代码、看界面、做交互的基准测试，视觉反馈带来质的飞跃。',
  'muse-homework-pipeline': '用 Meta Muse 给家里搭一条「拍照 → 错题本 → 上线」的录入管线，含权限配置、review 关口和还没实测出来的那几处。',
  'ff7-remake-walkthrough': '米德加的三十天：从克劳德觉醒到最终决战，完整剧情流程与任务指南。',
  'ff7-remake-combat-materia-guide': '力竭才是伤害公式：战斗系统深度解析与魔晶石 Build 搭配。',
  'd2-blizzard-sorceress-guide': '充能弹转新星，30 级洗点暴风雪，地狱稳定推进的开荒速查。',
  'd2-necromancer-summoner-guide': '骷髅战士为核心，伤害加深配尸体爆炸，召唤流开荒指南。',
  'd2-tornado-druid-guide': '火风暴转裂地之火，30 级洗点风德，物理与冰冷双重输出。',
  'd2-frenzy-barbarian-guide': '双手挥击开荒，24 级解锁狂乱，双武器近战推进地狱。',
  'hl-30-day-walkthrough': '把主线的等级门槛画成一条阶梯：终章只卡 24 级。30 天逐日流程、天赋 36 点顺序与咒语解锁链。',
}

function firstHeading(src) {
  const m = /^\s*#\s+(.+)$/m.exec(src || '')
  return m ? m[1].trim() : ''
}

// 退路用：取正文里第一段真正的文字（跳过标题、引用、details 指令、代码块）
function firstParagraph(src) {
  const lines = (src || '').replace(/^\s*---[\s\S]*?\n---\s*/, '').split(/\r?\n/)
  let depth = 0
  const buf = []
  for (const raw of lines) {
    const line = raw.trim()
    if (line.startsWith(':::')) {
      if (line.startsWith('::: ')) depth++
      else depth = Math.max(0, depth - 1)
      continue
    }
    if (depth || !line || line.startsWith('#') || line.startsWith('>') || line.startsWith('```')) {
      if (buf.length) break
      continue
    }
    buf.push(line)
  }
  return buf
    .join('')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .slice(0, 120)
}

function gitDate(relPath) {
  try {
    return execSync(`git log -1 --format=%as -- "${relPath}"`, {
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim()
  } catch {
    return ''
  }
}

export default createContentLoader('articles/*.md', {
  includeSrc: true,
  async transform(raw) {
    const pages = raw
      .map((page) => {
        const url = page.url || ''
        const slug = url.replace(/^\/+/, '').replace(/^articles\//, '').replace(/\.html$/, '')
        if (!slug) return null
        const fm = page.frontmatter || {}
        const rel = `articles/${slug}.md`
        const meta = grouped.get(slug)
        const date = fm.date || gitDate(rel)
        return {
          slug,
          url,
          title: firstHeading(page.src) || meta?.label || slug,
          label: meta?.label || '',
          desc: DESC[slug] || firstParagraph(page.src),
          group: meta?.group || '其它',
          date,
          ts: date ? new Date(`${date}T00:00:00Z`).getTime() : 0,
        }
      })
      .filter(Boolean)
      .sort((a, b) => b.ts - a.ts || a.title.localeCompare(b.title, 'zh-CN'))

    return { pages, groupOrder: [...groupOrder, '其它'] }
  },
})
