import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './registerServiceWorker'
import App from './App.vue'
// rem适配
import '@/utils/rem'

// wow.js + animate.css 可视区进入动画
import '@/plugins/wow.ts'
// import 'wowjs/css/libs/animate.css'
import 'animate.css'
// import 'animate.css/animate.compat.css'
// vant 
import 'vant/lib/index.css'

// 全局基础样式
import '@/styles/base.scss'
import '@/styles/azUi.scss' // Az的ui样式库

const app = createApp(App)

// vant ui
import useVant from '@/plugins/vant'
useVant(app)

// 路由守卫
import '@/permission.ts'

// 自定义指令
import directives from '@/directives'
app.use(directives)

// 状态管理
app.use(createPinia())

// 路由
import router from './router'
app.use(router)

// 国际化 语言
import language from '@/i18n'
app.use(language)
// 当前环境
console.log('当前开发环境配置', import.meta.env)

app.mount('#app')
