/**
 * 终端大小识别Hooks
 * 监听视窗大小判断设备类型 desktop(pc端)mobile(移动端)
 *
 */

import { watch, computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'
import { appStore } from '@/stores/appStore.ts'
export default function () {
  const { body } = document
  const WIDTH = 992 // refer to Bootstrap's responsive design
  const store = appStore()
  const device = computed(() => {
    return store.device
  })

  const sidebar: any = computed(() => {
    return store.sidebar
  })

  const $_isMobile = function () {
    const rect = body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
  }

  const $_resizeHandler = function () {
    if (!document.hidden) {
      const isMobile = $_isMobile()
      store.updateDevice(isMobile ? 'mobile' : 'desktop')
      store.setFontSize()

      if (isMobile) {
        store.updateSidebarOpened(false)
      }
    }
  }

  watch(device, (device) => {
    if (device === 'mobile' && sidebar.value.opened) {
      store.updateSidebarOpened(false)
    }
  })

  onBeforeMount(() => {
    window.addEventListener('resize', $_resizeHandler)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', $_resizeHandler)
  })

  onMounted(() => {
    const isMobile = $_isMobile()
    if (isMobile) {
      store.updateDevice(isMobile ? 'mobile' : 'desktop')
      store.updateSidebarOpened(false)
    }
    // 修改主题字体大小
    store.setFontSize()
  })
}
