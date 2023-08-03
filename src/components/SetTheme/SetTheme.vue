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
import { ref, computed } from 'vue'
import { appStore } from '@/stores/appStore'
const store = appStore()
let show = ref(false)

const theme = computed(() => {
  return JSON.parse(JSON.stringify(store.theme))
})

// 切换主题
const changeTheme = (theme:string) => {
  store.updateTheme(theme)
  show.value = false
}

</script>

<style lang="scss" scoped>
.set-theme {
  position: relative;
  display: inline-block;
}
.az-switch {
  i{
    font-size: 26px;
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
