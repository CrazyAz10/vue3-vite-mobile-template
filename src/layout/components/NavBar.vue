<template>
  <div class="container-wrap">
    <div class="nav-bar container-box">
      <div class="laft-nav-bar">
        <div class="logo" @click="linkTo({ path: '/' })">
          <h2>CrazyAz</h2>
          <span>azlll.com</span>
        </div>
      </div>
      <div v-if="device == 'desktop'" class="right-nav-bar">
        <main-menu mode="horizontal" />
      </div>
      <div class="right-nav-bar" v-else>
        <div class="item" @click="linkTo({path: '/user'})">
          <van-image
              round
              width="100%"
              height="100%"
              :src="getImage(userStore.userInfo.avatar)"
          >
              <template v-slot:error>
                  <img src="@/assets/logo.png" alt="" style="width: 100%;height: 100%;">
              </template>
          </van-image>
        </div>
        <div class="item">
          <set-language />
        </div>
        <div class="item">
          <set-theme />
        </div>
        <div class="item">
          <!-- <mini-menu /> -->
          <az-menu />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="NavBar">
import { computed } from 'vue'
import mainMenu from '@/layout/components/menuBar/mainMenu.vue'
import miniMenu from '@/layout/components/menuBar/miniMenu.vue'
import azMenu from '@/layout/components/menuBar/azMenu.vue'
import SetLanguage from '@/components/SetLanguage/SetLanguage.vue'
import { useAppStoreHook } from '@/store/modules/app'
import { linkTo } from '@/utils/toolHook'
import SetTheme from '@/components/SetTheme/SetTheme.vue'
import { useUserStoreHook } from '@/store/modules/user'
const userStore = useUserStoreHook()
import { getImage } from '@/utils/getAssets'
const appStore = useAppStoreHook()

/***** computed */
// 终端类型
const device = computed(() => {
  return appStore.device
})

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
      cursor: pointer;
      span{
        color: #54577A;
        font-size: 14px;
      }
    }
  }

  .right-nav-bar {
    display: flex;
    align-items: center;
    .item{
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      margin-left: 10px;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0,0,0,.2);
    }
    .menu-icon {
      height: 30px;
    }
    
  }
}
</style>
