import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import AnswerLock from './AnswerLock.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(AnswerLock),
    })
  },
}
