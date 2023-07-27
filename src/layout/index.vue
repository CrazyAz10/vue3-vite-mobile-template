<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout" :class="{ mobile: device === 'mobile' }">
    <header class="fixed-max-width-top-center">
      <NavBar />
    </header>
    <main>
      <AppMain />
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts" setup name="layout">
import AppMain from '@/layout/components/AppMain.vue'
import NavBar from '@/layout/components/NavBar.vue'
import config from '@/config'
import useResize from '@/layout/hooks/useResize'
useResize()
import { computed, onMounted } from 'vue'
import { appStore } from '@/stores/appStore'
onMounted(() => {
  // 判断是否开启750宽度限制
  if (config.mobileLimitWidth) {
    let oldClass = document.body.getAttribute('class') || ''
    oldClass = oldClass ? oldClass + ' limit-width-body' : 'limit-width-body'
    document.body.setAttribute('class', oldClass)
  }
})
const store = appStore()
const device = computed(() => {
  return store.device
})

</script>

<style scoped lang="scss">
//@import 'xxx.scss';引入公共css类
.layout {
  padding-top: 60px;
  font-size: var(--normal-font-size);

  header {
    z-index: 9999;
    background: var(--normal-background-color);
    box-shadow: 0 5px 5px var(--normal-shadow-color);
  }

  &.mobile {
    .container-box {
      padding: 0 20px;
    }
  }
}
</style>