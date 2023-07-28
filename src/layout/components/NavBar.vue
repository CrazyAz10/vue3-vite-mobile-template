<template>
  <div class="container-wrap">
    <div class="nav-bar container-box">
      <div class="laft-nav-bar">
        <div class="logo" @click="linkTo({ path: '/' })">
          <img src="@/assets/logo.png" alt="" />
          <span>CrazyAz</span>
        </div>
      </div>
      <div v-if="device == 'desktop'" class="right-nav-bar">
        <main-menu mode="horizontal" />
      </div>
      <div class="right-nav-bar" v-else>
        <div class="item">
          <set-language />
        </div>
        <div class="item">
          <set-theme />
        </div>
        <div class="item">
          <mini-menu />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import mainMenu from '@/layout/components/menuBar/mainMenu.vue'
import miniMenu from '@/layout/components/menuBar/miniMenu.vue'
import SetLanguage from '@/components/SetLanguage/SetLanguage.vue'
import { appStore } from '@/stores/appStore'
import { useRouter } from 'vue-router'
import SetTheme from '@/components/SetTheme/SetTheme.vue'
export default {
  name: 'NavBar',
  components: {
    mainMenu,
    miniMenu,
    SetLanguage,
    SetTheme
  },
  setup() {
    const store = appStore()
    /***** computed */
    // 终端类型
    const device = computed(() => {
      return store.device
    })
    // 迷你菜单展开状态
    const sliderOpend = computed(() => {
      return store.sidebar.opened
    })
    /** computed ****/
    const router = useRouter()
    // 路由跳转
    const linkTo = function (to:any) {
      router.push(to)
    }
    return {
      device,
      sliderOpend,
      linkTo
    }
  }
}
</script>

<style scoped lang="scss">
.nav-bar {
  height: 60px;
  display: flex;
  justify-content: space-between;

  .laft-nav-bar {
    display: flex;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        height: 50px;
        margin-right: 10px;
      }

      font-weight: bold;
      font-size: 18px;
    }
  }

  .right-nav-bar {
    display: flex;
    align-items: center;
    .item{
      margin-left: 20px;
    }
    .menu-icon {
      height: 30px;
    }
    
  }
}
</style>
