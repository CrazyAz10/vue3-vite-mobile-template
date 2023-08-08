import { watch, computed } from 'vue'
import { setCssVar } from '@/styles/setTheme'
import { useAppStoreHook } from '@/store/modules/app'
import themeScss from '@/styles/theme.module.scss'
export default function () {
  const appStore = useAppStoreHook()
  const themeLight: any = [] // 高亮主题
  const themeDark: any = [] // 暗色主题

  // 驼峰转‘-’拼接
  const toLine = (name: string) => {
    return name.replace(/([A-Z])/g, '-$1').toLowerCase()
  }

  const theme = computed(() => {
    return JSON.parse(JSON.stringify(appStore.theme))
  })

  // 初始化 将scss 主题资源转对象存储
  for (const i in themeScss) {
    const class_ = toLine(i.replace(/(^dark\-)|(^light\-)/, ''))
    if (/^light/.test(i)) {
      themeLight.push({
        name: `--${class_}`,
        value: themeScss[i]
      })
    } else {
      themeDark.push({
        name: `--${class_}`,
        value: themeScss[i]
      })
    }
  }

  // 编译主题
  const setTheme = () => {
    if (theme.value === 'light') {
      for (const item of themeLight) {
        setCssVar(item.name, item.value)
      }
      appStore.updateTheme('light')
    } else {
      for (const item of themeDark) {
        setCssVar(item.name, item.value)
      }
      appStore.updateTheme('dark')
    }
  }

  // 修改body主题样式
  const setBodyThemeClass = (n: string) => {
    // 切换主题后修改body class 样式
    let class__: any = document.body.getAttribute('class')
    if (class__) {
      class__ = /(light)|(dark)/.test(class__)
        ? class__.replace(/(light)|(dark)/gm, n)
        : n + ' ' + class__
    } else {
      class__ = n
    }
    document.body.setAttribute('class', class__)
  }

  // 监听主题变动
  watch(theme, (n) => {
    setTheme()
    setBodyThemeClass(n)
  })

  setTheme()
  setBodyThemeClass(theme.value)
}
