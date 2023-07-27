import { createI18n } from 'vue-i18n'

// import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
// import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
// import elementZhTwLocale from 'element-ui/lib/locale/lang/zh-TW'// element-ui lang
// import elementEsLocale from 'element-ui/lib/locale/lang/es'// element-ui lang
// import elementKoLocale from 'element-ui/lib/locale/lang/ko'// element-ui lang
// import elementFrLocale from 'element-ui/lib/locale/lang/fr'// element-ui lang
// import elementDeLocale from 'element-ui/lib/locale/lang/de'// element-ui lang
// import elementJaLocale from 'element-ui/lib/locale/lang/ja'// element-ui lang
// import elementViLocale from 'element-ui/lib/locale/lang/vi'// element-ui lang

import localLang from './local'
import storage from '@/utils/storage'
import config from '@/config'

export function requireLang(lang: string) {
  // 获取缓存数据
  const storageKey = config.name + 'Language-' + lang
  let lang__ = localStorage.getItem(storageKey) ? storage.getItem(storageKey) : null
  if (lang__) {
    return lang__
  }
  try {
    // 请求远程多语言数据 开发化境直接获取src/i18n/local目录下的本地语言包资源
    const _url =
      import.meta.env.NODE_ENV === 'development'
        ? `/i18n/local/${lang}.json`
        : import.meta.env.VITE_APP_API_LANG
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `${_url}?&device=web&lang=${lang}&_t=${Date.now()}`, false)
    xhr.send()
    lang__ = JSON.parse(xhr.responseText).data
  } catch (error) {
    lang__ = {}
  }
  storage.setItem({
    key: storageKey, // 存储的key
    value: lang__, // 存储的值
    validity: 600000 // 过期时间 单位：毫秒 缓存10分钟有效
  })
  return lang__
}
// console.log(storage.getItem('language'))
const language = storage.getItem('language') ? storage.getItem('language') : 'cn'

// ui 语言包
export const elementLang: any = {
  //   'zh-CN': elementZhLocale,
  //   'zh-TW': elementZhTwLocale,
  //   'cn': elementZhTwLocale,
  //   'es': elementEsLocale,
  //   'en': elementEnLocale,
  //   'ko': elementKoLocale,
  //   'fr': elementFrLocale,
  //   'de': elementDeLocale,
  //   'ja': elementJaLocale,
  //   'vi': elementViLocale
}

// 合并ui和本项目语言包
const messages = {
  ...localLang
  // [language]: Object.assign(requireLang(language), elementLang[language])
}

const i18n: any = createI18n({
  locale: language,
  messages
})

export default i18n
