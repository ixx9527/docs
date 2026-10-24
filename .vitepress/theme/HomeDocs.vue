<script setup>
import { computed, ref } from 'vue'
import { data as index } from '../data/articles.data.mjs'

const COLLAPSE_AT = 4
const NEW_WITHIN_DAYS = 14

const pages = computed(() => index.pages || [])

const now = Date.now()
function isNew(p) {
  if (!p.ts) return false
  return now - p.ts <= NEW_WITHIN_DAYS * 86400000
}

/* 全站最新三篇，不分分组 */
const latest = computed(() => pages.value.slice(0, 3))

const ICONS = {
  数独: 'M9 3v2M9 3h6M9 3H3m12 0v2m0-2h6M3 9h2m-2 6h2M3 9v6m0-6h2m0 6H3m18-6h-2m2 0v6m0-6h-2m0 6h2M9 21v-2m0 2h6m-6 0H3m12 0v-2',
  作业: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  技术: 'M12 2a4 4 0 014 4c0 1.1-.9 2-2 2h-4a2 2 0 01-2-2 4 4 0 014-4zM8 8v2a4 4 0 004 4 4 4 0 004-4V8M6 12h12M9 16l-1 4M15 16l1 4M12 14v4',
  游戏: 'M6 12h4m-2-2v4M14 12h4m-2-2v4M3 8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8z',
  其它: 'M4 6h16M4 12h16M4 18h10',
}

/* 按 config.js 侧边栏的分组顺序排，组内保持日期倒序 */
const groups = computed(() => {
  const order = index.groupOrder || []
  const buckets = []
  for (const name of order) {
    const items = pages.value.filter((p) => p.group === name)
    if (items.length) buckets.push({ name, items })
  }
  return buckets
})

const expanded = ref(new Set())
function toggle(name) {
  const next = new Set(expanded.value)
  next.has(name) ? next.delete(name) : next.add(name)
  expanded.value = next
}
function visible(group) {
  return expanded.value.has(group.name) ? group.items : group.items.slice(0, COLLAPSE_AT)
}
</script>

<template>
  <div class="home-docs">
    <section v-if="latest.length" id="latest" class="home-docs__latest">
      <h2 class="home-docs__kicker">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v4m0 12v4M2 12h4m12 0h4M5 5l3 3m8 8l3 3M19 5l-3 3M8 16l-3 3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        最新写好的
      </h2>
      <div class="home-docs__grid home-docs__grid--latest">
        <a v-for="p in latest" :key="'l-' + p.slug" class="doc-card doc-card--lead" :href="p.url">
          <div class="doc-card__meta">
            <time v-if="p.date" :datetime="p.date">{{ p.date }}</time>
            <span class="doc-card__chip">{{ p.group }}</span>
          </div>
          <h3 class="doc-card__title">{{ p.title }}</h3>
          <p class="doc-card__desc">{{ p.desc }}</p>
          <span class="doc-card__go">去读 →</span>
        </a>
      </div>
    </section>

    <div id="sections">
      <section v-for="g in groups" :key="g.name" class="home-docs__section">
        <h2 class="home-docs__title">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONS[g.name] || ICONS['其它']" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>{{ g.name }}</span>
          <em>{{ g.items.length }} 篇</em>
        </h2>
        <div class="home-docs__grid">
          <a v-for="p in visible(g)" :key="g.name + '-' + p.slug" class="doc-card" :href="p.url">
            <div class="doc-card__meta">
              <time v-if="p.date" :datetime="p.date">{{ p.date }}</time>
              <span v-if="isNew(p)" class="doc-card__new">新</span>
            </div>
            <h3 class="doc-card__title">{{ p.title }}</h3>
            <p class="doc-card__desc">{{ p.desc }}</p>
          </a>
        </div>
        <button
          v-if="g.items.length > COLLAPSE_AT"
          type="button"
          class="home-docs__more"
          :aria-expanded="expanded.has(g.name) ? 'true' : 'false'"
          @click="toggle(g.name)"
        >
          {{ expanded.has(g.name) ? '收起' : '还有 ' + (g.items.length - COLLAPSE_AT) + ' 篇，展开' }}
        </button>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home-docs {
  max-width: 1152px;
  margin: 0 auto;
  padding: 48px 24px 72px;
}

.home-docs__latest {
  margin-bottom: 56px;
}

.home-docs__section {
  margin-bottom: 48px;
}

.home-docs__section:last-child {
  margin-bottom: 0;
}

/* 顶部「最近更新」用细项标签，分组标题沿用侧边栏写法 */
.home-docs__kicker {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--vp-font-family-heading);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--sm-accent);
  margin: 0 0 18px;
}

.home-docs__kicker svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.home-docs__title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--vp-font-family-heading);
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 22px;
  padding-bottom: 12px;
  border-bottom: 2px dashed var(--vp-c-divider);
  letter-spacing: 1px;
}

.home-docs__title svg {
  width: 26px;
  height: 26px;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.home-docs__title em {
  margin-left: auto;
  font-family: var(--vp-font-family-base);
  font-style: normal;
  font-size: 13px;
  color: var(--vp-c-text-3);
  letter-spacing: 0;
}

.home-docs__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
  gap: 18px;
  align-items: stretch;
}

.home-docs__grid--latest {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

/*
 * 卡片高度锁死：描述长短不一会把整张网格撑歪，所以标题 2 行、描述 3 行截断。
 * 别用 getComputedStyle 判断截断有没有生效——Chrome 把 -webkit-box 的
 * 计算值序列化成 flow-root，看着像失效。实测直接当 flex item 也能正常裁字。
 */
.doc-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 18px 20px 16px;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-elv);
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.doc-card:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 24px rgba(42, 143, 133, 0.12);
}

.doc-card--lead {
  border-style: solid;
  border-color: var(--vp-c-border);
  background: var(--vp-c-bg-soft);
}

.doc-card__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 1;
  color: var(--vp-c-text-3);
}

.doc-card__meta time {
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.3px;
}

.doc-card__chip {
  padding: 3px 8px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 11.5px;
}

.doc-card__new {
  padding: 2px 7px;
  border-radius: 999px;
  background: var(--sm-accent-soft);
  color: var(--sm-accent);
  font-size: 11.5px;
  font-weight: 600;
}

.doc-card__title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: var(--vp-font-family-heading);
  font-size: 17px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
  letter-spacing: 0.5px;
  line-height: 1.45;
}

.doc-card__desc {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 13.5px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
  margin: 0;
}

.doc-card__go {
  /* 靠 auto 把「去读」钉在卡片底部，比给描述加 flex:1 更稳 */
  margin-top: auto;
  padding-top: 12px;
  font-size: 13px;
  color: var(--vp-c-brand-1);
  font-family: var(--vp-font-family-heading);
  letter-spacing: 0.5px;
}

.home-docs__more {
  display: block;
  width: 100%;
  margin-top: 16px;
  padding: 9px 16px;
  font-family: var(--vp-font-family-heading);
  font-size: 14px;
  letter-spacing: 0.6px;
  color: var(--vp-c-text-2);
  background: transparent;
  border: 1px dashed var(--vp-c-border);
  border-radius: 999px;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.home-docs__more:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

@media (max-width: 768px) {
  .home-docs {
    padding: 32px 16px 56px;
  }

  .home-docs__latest {
    margin-bottom: 40px;
  }

  .home-docs__section {
    margin-bottom: 36px;
  }

  .home-docs__title {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .home-docs__title svg {
    width: 22px;
    height: 22px;
  }

  .home-docs__grid,
  .home-docs__grid--latest {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .doc-card {
    padding: 16px 18px;
  }

  .doc-card__title {
    font-size: 16px;
  }
}
</style>

