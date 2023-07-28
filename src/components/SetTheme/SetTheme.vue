<template>
  <div class="set-theme" v-click-outside="() => { show = false }">
    <div class="az-switch" :class="theme" @click="show = !show">
      <i class="iconfont icon-a-huaban2fuben9"></i>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div v-if="show" class="slide-bar">
        <ul>
          <li :class="{active: theme=='light'}" @click="changeTheme('light')">高亮主题</li>
          <li :class="{active: theme=='dark'}" @click="changeTheme('dark')">暗色主题</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" name="SetTheme" setup>
import { ref, watch, computed } from 'vue'
import { setCssVar } from '@/styles/setTheme'
import { appStore } from '@/stores/appStore'
const store = appStore()
import themeScss from '@/styles/theme.module.scss'
let themeLight: any = [] // 高亮主题
let themeDark: any = [] // 暗色主题
let show = ref(false)

// 驼峰转‘-’拼接
const toLine = (name:string) => {
  return name.replace(/([A-Z])/g, '-$1').toLowerCase()
}

const theme = computed(() => {
  return JSON.parse(JSON.stringify(store.theme))
})

// 初始化 将scss 主题资源转对象存储
for (let i in themeScss) {
  let class_ = toLine(i.replace(/(^dark\-)|(^light\-)/, ''))
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
// 切换主题
const changeTheme = (theme:string) => {
  store.updateTheme(theme)
}
// 编译主题
const setTheme = () => {
  if (theme.value === 'light') {
    for (let item of themeLight) {
      setCssVar(item.name, item.value)
    }
    store.updateTheme('light')
  } else {
    for (let item of themeDark) {
      setCssVar(item.name, item.value)
    }
    store.updateTheme('dark')
  }
}
// 修改body主题样式
const setBodyThemeClass = (n:string) => {
  // 切换主题后修改body class 样式
  let class__: any = document.body.getAttribute('class')
  if (class__) {
    class__ = /(light)|(dark)/.test(class__) ? class__.replace(/(light)|(dark)/gm, n) : n + ' ' + class__
  } else {
    class__ = n
  }
  document.body.setAttribute('class', class__)
}
setTheme()
setBodyThemeClass(theme.value)
watch(theme, (n) => {
  setTheme()
  setBodyThemeClass(n)
})
</script>

<style lang="scss" scoped>
.set-theme {
  position: relative;
  display: inline-block;
}
.az-switch {
  i{
    font-size: 35px;
  }
}
.slide-bar {
  position: absolute;
//   width: 140px;
  left: 50%;
  top: calc(100% + 20px);
  transform: translateX(-50%);
  padding: 5px;
  background: var(--normal-background-color);
  box-shadow: 0 0 10Px var(--normal-shadow-color);

  li {
    padding: 3px 10px;
    white-space: nowrap;
    &.active{
        color: var(--primary-color)
    }
  }
}
</style>
