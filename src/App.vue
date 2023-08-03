<template>
  <keep-alive>
    <van-config-provider :theme="theme" size="small">
      <!-- <Transition
      mode="out-in"
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutLeft"
    > -->
      <router-view />
      <!-- </Transition> -->
    </van-config-provider>
  </keep-alive>
</template>
<script lang="ts" setup>
import config from '@/config'
import { computed, onMounted } from 'vue'
import { appStore } from './stores/appStore'
import setTheme from '@/components/SetTheme/hooks/setTheme'
// 主题色监听
setTheme()
const store = appStore()
const theme = computed(() => {
  return store.theme
})
onMounted(() => {
  // 判断是否开启750宽度限制
  if (config.mobileLimitWidth) {
    let oldClass = document.body.getAttribute('class') || ''
    oldClass = oldClass ? oldClass + ' limit-width-body' : 'limit-width-body'
    document.body.setAttribute('class', oldClass)
  }
})
</script>
<style lang="scss">
#app {
}
</style>
