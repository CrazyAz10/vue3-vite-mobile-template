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
import useResize from '@/layout/hooks/useResize'
useResize()
import { computed } from 'vue'
import { useAppStoreHook } from '@/store/modules/app'
const appStore = useAppStoreHook()
const device = computed(() => {
  return appStore.device
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