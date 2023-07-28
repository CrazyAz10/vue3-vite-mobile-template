<template>
  <van-config-provider :theme="theme" size="small">
    <router-view />
  </van-config-provider>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { appStore } from './stores/appStore'
const store = appStore()
const theme = computed(() => {
  return store.theme
})
</script>
<style lang="scss">
#app {
}
</style>
