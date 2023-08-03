<template>
  <div class="menu" :class="{ vrtical: mode === 'vertical' }">
    <ul>
      <li
        v-for="(item, index) in menuList"
        :key="index"
        :class="{ active: activeMenu === item.path }"
        @click="linkTo({ path: item.path })"
      >
        {{ item.children![0]!.meta!.title }}
        <!-- {{ $t(`menu.${ item.children![0]!.name }`) }} -->
      </li>
      <li
        :class="{ active: activeMenu === '/login' }"
        @click="linkTo({ path: '/login' })"
      >
        登录
      </li>
      <li
        :class="{ active: activeMenu === '/register' }"
        @click="linkTo({ path: '/register' })"
      >
        注册
      </li>
      <li
        :class="{ active: activeMenu === '/user' }"
        @click="linkTo({ path: '/user' })"
      >
        我的
      </li>
    </ul>
  </div>
</template>

<script setup name="mainMenu" lang="ts">

import { menuRoutes } from '@/router'
import { computed, ref } from 'vue'
import { appStore } from '@/stores/appStore';
const store = appStore()
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()

interface Props {
  mode?: string
}
const props = withDefaults(defineProps<Props>(), {
  mode: 'vertical'
})
const mode = computed(() => {
  return props.mode
})

const menuList = ref(menuRoutes)

const activeMenu = computed(() => {
  const { path } = route
  return path
})

// 路由跳转
const linkTo = function (to:any) {
  router.push(to)
  store.updateSidebarOpened(!store.sidebar.opened)
}

</script>

<style scoped lang="scss">
.menu {
  height: 100%;
  ul {
    height: 100%;
    display: flex;
    justify-items: start;
    align-items: center;
    align-content: start;
    flex-wrap: wrap;
    li {
      line-height: 28px;
      padding: 8px 0;
      // margin: 0 50px;
      margin-right: 100px;
      font-size: 18px;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      &:hover,
      &.active {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
    }
  }
  &.vrtical {
    width: 100%;
    ul {
      width: 100%;
      li {
        width: 100%;
        margin-right: 0;
      }
    }
  }
}
</style>
