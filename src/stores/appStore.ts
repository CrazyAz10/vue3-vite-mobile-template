// import Vuex from 'vuex'
// import Pinia from 'pinia'
import { defineStore } from 'pinia'
import { setCssVar } from '@/styles/setTheme'
import storage from '@/utils/storage'
export const appStore = defineStore('app', {
  state: () => {
    return {
      device: 'desktop',
      sidebar: {
        opened: false
      },
      language: storage.getItem('language') ? storage.getItem('language') : 'ch',
      theme: storage.getItem('theme') ? storage.getItem('theme') : 'light',
    }
  },
  getters: {
    // device: (store) => {
    //   return store.device
    // },
    // sidebar: (store) => {
    //   return store.sidebar
    // }
  },
  actions: {
    // 修改终端
    updateDevice(device: string) {
      this.device = device
    },
    updatetext(text: { opened: boolean }) {
      this.sidebar = text
    },
    // 设置语言
    updateLanguage(language:string) {
      this.language = language
      storage.setItem({
        key: 'language',
        value: language
      })
    },
    // 设置主题
    updateTheme(theme:string) {
      this.theme = theme
      storage.setItem({
        key: 'theme',
        value: theme
      })
    },
    // 更换迷你菜单状态
    updateSidebarOpened(opened: boolean) {
      this.sidebar.opened = opened
    },
    // 修改主题字体大小
    setFontSize() {
      if (this.device === 'mobile') {
        setCssVar('--theme-font-size', '12px')
        setCssVar('--theme-tips-font-size', '13px')
        setCssVar('--theme-default-title-font-size', '14px')
        setCssVar('--theme-tab-title-font-size', '16px')
        setCssVar('--theme-big-title-font-size', '18px')
        setCssVar('--theme-main-title-font-size', '24px')
      } else {
        setCssVar('--theme-font-size', '14px')
        setCssVar('--theme-tips-font-size', '16px')
        setCssVar('--theme-default-title-font-size', '18px')
        setCssVar('--theme-tab-title-font-size', '24px')
        setCssVar('--theme-big-title-font-size', '28px')
        setCssVar('--theme-main-title-font-size', '36px')
      }
    }
  }
})
