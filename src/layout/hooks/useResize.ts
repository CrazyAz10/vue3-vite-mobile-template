/**
 * 终端大小识别Hooks
 * 监听视窗大小判断设备类型 desktop(pc端)mobile(移动端)
 *
 */

import { watch, computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'
import { useAppStoreHook } from '@/store/modules/app'
export default function () {
  const { body } = document
  const WIDTH = 992 // refer to Bootstrap's responsive design
  const appStore = useAppStoreHook()
  const device = computed(() => {
    return appStore.device
  })

  const sidebar: any = computed(() => {
    return appStore.sidebar
  })

  const $_isMobile = function () {
    const rect = body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
  }

  const $_resizeHandler = function () {
    if (!document.hidden) {
      const isMobile = $_isMobile()
      appStore.updateDevice(isMobile ? 'mobile' : 'desktop')
      appStore.setFontSize()

      if (isMobile) {
        appStore.updateSidebarOpened(false)
      }
    }
  }

  watch(device, (device) => {
    if (device === 'mobile' && sidebar.value.opened) {
      appStore.updateSidebarOpened(false)
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
      appStore.updateDevice(isMobile ? 'mobile' : 'desktop')
      appStore.updateSidebarOpened(false)
    }
    // 修改主题字体大小
    appStore.setFontSize()
  })
}
