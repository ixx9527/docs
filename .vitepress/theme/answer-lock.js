/**
 * 试卷「参考解答」密码门禁。
 *
 * 边界：站点是纯静态构建、仓库公开，这里只做到「页面上不渲染、点不开、打印不占纸」，
 * 不是加密——答案文本仍在 HTML 与仓库 markdown 里。
 *
 * 换密码：浏览器控制台跑这两行，把输出填进下面的 sha256 与 weak。
 *   crypto.subtle.digest('SHA-256', new TextEncoder().encode('新密码')).then(b => [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join(''))
 *   第二行的算法见下方 weakDigest（FNV-1a 32 位正序 + 逆序）。
 */

export const ANSWER_LOCK = {
  ttlHours: 12,
  storageKey: 'sm:answer-lock',
  pages: [
    '/articles/sanwen-grade4-math-entry-test',
    '/articles/xueersi-grade4-summer-s-challenge',
    '/articles/sanwen-grade4-computation-drills',
  ],
  sha256: '2cec8cf0e321c284fa0c2ebef804aac18bf1cbb85546f89e7e3d0b6aa8b9d2cf',
  weak: 'fcc66001ae4d2aa5',
}

const encoder = new TextEncoder()

export function normalizePath(path = '') {
  return path.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/+$/, '')
}

export function isLockPage(path) {
  return ANSWER_LOCK.pages.includes(normalizePath(path))
}

// 每份卷子各存一条解锁记录，互不通用
export function unlockKey(path) {
  return ANSWER_LOCK.storageKey + ':' + normalizePath(path)
}

export function findAnswerBlocks(root = document) {
  return Array.from(root.querySelectorAll('.vp-doc details')).filter((el) => {
    const summary = el.querySelector('summary')
    return summary && summary.textContent.trim().startsWith('参考解答')
  })
}

export function setAnswerLocked(el, locked) {
  if (locked) el.setAttribute('data-answer-locked', '')
  else el.removeAttribute('data-answer-locked')
}

function fnv1a32(bytes) {
  let h = 0x811c9dc5
  for (const b of bytes) h = Math.imul(h ^ b, 0x01000193) >>> 0
  return h.toString(16).padStart(8, '0')
}

// http://局域网IP 这类非安全上下文没有 crypto.subtle，退回这个比对
function weakDigest(text) {
  const bytes = encoder.encode(text)
  return fnv1a32(bytes) + fnv1a32(Array.from(bytes).reverse())
}

async function sha256Hex(text) {
  const buf = await globalThis.crypto.subtle.digest('SHA-256', encoder.encode(text))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function verifyPassword(input) {
  const text = (input || '').trim()
  if (!text) return false
  const subtle = globalThis.crypto && globalThis.crypto.subtle
  if (subtle) return (await sha256Hex(text)) === ANSWER_LOCK.sha256
  return weakDigest(text) === ANSWER_LOCK.weak
}

export function readUnlockExpiry(path) {
  const store = globalThis.localStorage
  if (!store) return 0
  const raw = Number(store.getItem(unlockKey(path)))
  if (!raw || raw <= Date.now()) return 0
  return raw
}

export function writeUnlock(path, ttlHours = ANSWER_LOCK.ttlHours) {
  const expiry = Date.now() + ttlHours * 60 * 60 * 1000
  if (globalThis.localStorage) {
    localStorage.setItem(unlockKey(path), String(expiry))
  }
  return expiry
}

export function clearUnlockStorage(path) {
  if (!globalThis.localStorage) return
  localStorage.removeItem(unlockKey(path))
}
