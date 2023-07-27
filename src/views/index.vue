<template>
  <div class="container-wrap home">
    <div class="container-box">
      {{ $t(`menu.Home`) }}<br />当前终端：{{ device }}
      <div v-for="item in 50" :key="item">{{ item }}</div>
      <div class="wow animate__fadeInUp" data-wow-duration=".5s" data-wow-delay="0s">
        <h3>动画进入</h3>
        <p>1.wow.js</p>
        <p>1.animate.css</p>
      </div>
      <div v-for="item in 50" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { appStore } from '@/stores/appStore'
import { computed, onMounted } from 'vue'
import { testRequest } from '@/api/main'
// mounted
onMounted(() => {
  testRequest({
    userName: 'crazyAz'
  })
})
const store = appStore()
// 终端类型
const device = computed(() => {
  return store.device
})
</script>
<style scoped lang="scss">
.home{
  
}
</style>
