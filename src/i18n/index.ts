import { createI18n } from 'vue-i18n'
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'
import zhHK from 'vant/es/locale/lang/zh-HK'

import localLang from './local'
import { Locale } from 'vant'
import storage from '@/utils/storage'
import config from '@/config'

export function requireLang(lang:string) {
  // 获取缓存数据
  const storageKey = config.name + 'Language-' + lang
  let lang__:any = localStorage.getItem(storageKey) ? storage.getItem(storageKey) : null
  if (lang__) {
    // 语言包本地缓存未过期直接取缓存资源
    return lang__
  }
  if (config.postLanguage) {
    // 开启远程获取语言包
    if (import.meta.env.MODE === 'development') {
      // 开发化境直接获取src/i18n/local目录下的本地语言包资源
      lang__ = localLang[lang]
    } else {
      try {
        // 请求远程多语言数据 
        const _url = import.meta.env.VITE_APP_API_LANG
        const xhr = new XMLHttpRequest()
        xhr.open('GET', `${_url}?&device=web&lang=${lang}&_t=${Date.now()}`, false)
        xhr.send()
        lang__ = JSON.parse(xhr.responseText).data
      } catch (error) {
        lang__ = {}
      }
    }
  } else {
    // 不需要远程获取语言包
    lang__ = localLang[lang]
  }
  storage.setItem({
    key: storageKey, // 存储的key
    value: lang__, // 存储的值
    validity: 600000 // 过期时间 单位：毫秒 缓存10分钟有效
  })
  return lang__
}

const language = storage.getItem('language') ? storage.getItem('language') : 'zh-CN'

// ui 语言包
export const vantLang: any = {
    'zh-CN': zhCN,
    'zh-HK': zhHK,
    'en-US': enUS,
}

// 合并ui和本项目语言包
const messages = {
  [language]: Object.assign(requireLang(language), vantLang[language])
}
// 
Locale.use(language, Object.assign(requireLang(language), vantLang[language]));

const i18n: any = createI18n({
  locale: language,
  messages
})

export default i18n
