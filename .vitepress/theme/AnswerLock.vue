<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import {
  clearUnlockStorage,
  findAnswerBlocks,
  isLockPage,
  readUnlockExpiry,
  setAnswerLocked,
  verifyPassword,
  writeUnlock,
} from './answer-lock.js'

const route = useRoute()

const active = computed(() => isLockPage(route.path))
const unlocked = ref(false)
const revealed = ref(false)
const expiry = ref(0)
const total = ref(0)
const openCount = ref(0)
const draft = ref('')
const error = ref('')
const busy = ref(false)

function answerBlocks() {
  return active.value ? findAnswerBlocks() : []
}

function apply() {
  if (!active.value) return
  const list = answerBlocks()
  total.value = list.length
  const hidden = !(unlocked.value && revealed.value)
  list.forEach((el) => setAnswerLocked(el, hidden))
  openCount.value = hidden ? 0 : list.filter((el) => el.open).length
}

function syncState() {
  const wasUnlocked = unlocked.value
  expiry.value = readUnlockExpiry(route.path)
  unlocked.value = expiry.value > Date.now()
  if (!unlocked.value) {
    revealed.value = false
    clearUnlockStorage(route.path)
    expiry.value = 0
  } else if (!wasUnlocked) {
    // 换页会重新挂载本组件，此时凭仍在有效期内的解锁记录直接恢复显示
    revealed.value = true
  }
  error.value = ''
  apply()
}

async function submit() {
  if (busy.value || !draft.value.trim()) return
  busy.value = true
  const ok = await verifyPassword(draft.value)
  busy.value = false
  if (!ok) {
    error.value = '密码不对，再试一次'
    return
  }
  expiry.value = writeUnlock(route.path)
  draft.value = ''
  unlocked.value = true
  revealed.value = true
  error.value = ''
  apply()
}

function toggleReveal() {
  revealed.value = !revealed.value
  apply()
}

function openAll(open) {
  answerBlocks().forEach((el) => {
    el.open = open
  })
  openCount.value = open ? total.value : 0
}

function relock() {
  clearUnlockStorage(route.path)
  expiry.value = 0
  unlocked.value = false
  revealed.value = false
  draft.value = ''
  error.value = ''
  apply()
}

const untilText = computed(() => {
  if (!expiry.value) return ''
  return new Date(expiry.value).toLocaleString('zh-CN', {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
})

onMounted(() => {
  syncState()
  requestAnimationFrame(apply)
})

watch(
  () => route.path,
  async () => {
    await nextTick()
    syncState()
    requestAnimationFrame(apply)
  }
)
</script>

<template>
  <div v-if="active" class="answer-lock" :data-state="unlocked ? 'open' : 'locked'">
    <svg class="answer-lock__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path v-if="unlocked" d="M8 10.5V8a4 4 0 0 1 8 0" />
      <path v-else d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <circle cx="12" cy="15.5" r="1.4" />
    </svg>

    <div class="answer-lock__body">
      <template v-if="!unlocked">
        <p class="answer-lock__title">参考解答已上锁<span v-if="total">（本卷 {{ total }} 题）</span></p>
        <p class="answer-lock__note">未解锁时解答不出现在页面上，直接打印本页拿到的是只有题干的卷面。每份卷子各需解锁一次。</p>
        <form class="answer-lock__form" @submit.prevent="submit">
          <input
            v-model="draft"
            class="answer-lock__input"
            type="password"
            placeholder="家长密码"
            autocomplete="off"
            aria-label="解锁参考解答的密码"
          />
          <button class="answer-lock__btn" type="submit" :disabled="busy">解锁</button>
        </form>
        <p v-if="error" class="answer-lock__error">{{ error }}</p>
      </template>

      <template v-else>
        <div class="answer-lock__row">
          <label class="answer-lock__switch">
            <input type="checkbox" :checked="revealed" @change="toggleReveal" />
            <span class="answer-lock__track"><span class="answer-lock__thumb"></span></span>
            <span>显示参考解答</span>
          </label>
          <div class="answer-lock__acts">
            <button class="answer-lock__act" type="button" :disabled="!revealed" @click="openAll(true)">全部展开</button>
            <button class="answer-lock__act" type="button" :disabled="!revealed" @click="openAll(false)">全部收起</button>
            <button class="answer-lock__act answer-lock__act--quiet" type="button" @click="relock">重新上锁</button>
          </div>
        </div>
        <p class="answer-lock__note">
          {{ total }} 题解答<span v-if="revealed">，已展开 {{ openCount }} 题</span><span v-else>，暂时收起</span>
          · 本卷解锁到 {{ untilText }} 自动回锁
        </p>
      </template>
    </div>
  </div>
</template>
