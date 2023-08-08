<template>
  <div class="mini-menu-wrap" v-clickOutside:click="closeSlider">
    <i class="iconfont icon-menucaidan3 menu-icon" @click="openSlider"></i>
    <transition enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOutRight">
      <div v-if="sliderOpend" class="miniMenu">
        <mainMenu mode="vertical" />
      </div>
    </transition>
  </div>
</template>

<script setup name="miniMenu" lang="ts">
import mainMenu from '@/layout/components/menuBar/mainMenu.vue'
import { useAppStoreHook } from '@/store/modules/app'
const appStore = useAppStoreHook()
import { computed } from 'vue'

// 迷你菜单展开状态
const sliderOpend = computed(() => {
  return appStore.sidebar.opened
})

// 关闭迷你菜单
const closeSlider = function () {
  appStore.updateSidebarOpened(false)
}

// 展开迷你菜单
const openSlider = function () {
  appStore.updateSidebarOpened(!appStore.sidebar.opened)
}
</script>

<style scoped lang="scss">
.mini-menu-wrap{
  // position: relative;
}
.miniMenu {
  padding: 10px;
  position: fixed;
  width: 50%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  background: var(--normal-background-color);
  box-shadow: -5px 0 10Px var(--normal-shadow-color);
  border-radius: 5px;
  --animate-duration: 0.5s;
}

.right-nav-bar {
  display: flex;
  align-items: center;

  .menu-icon {
    font-size: 26px;
  }
}
</style>
