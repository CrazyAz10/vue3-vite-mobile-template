<template>
    <div id="appMain">
        <!-- <v3-scroll size="5" color="#a96950" zIndex="2021"> -->
            <router-view v-slot="{ Component }">
                <van-config-provider :theme="theme" size="small">
                    <transition name="router_animate" mode="out-in">
                        <keep-alive>
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </van-config-provider>
            </router-view>
        <!-- </v3-scroll> -->
    </div>
</template>
<script lang="ts" setup>
import config from '@/config'
import { computed, onMounted } from 'vue'
import { useAppStoreHook } from './store/modules/app'
import setTheme from '@/components/SetTheme/hooks/setTheme'
import V3Scroll from './components/V3Scroll/V3Scroll.vue'
// 主题色监听
setTheme()
const appStore = useAppStoreHook()
const theme = computed(() => {
    return appStore.theme
})
onMounted(() => {
    // 判断是否开启750宽度限制
    if (config.mobileLimitWidth) {
        let oldClass = document.body.getAttribute('class') || ''
        oldClass = oldClass ? oldClass + ' limit-width-body' : 'limit-width-body'
        document.body.setAttribute('class', oldClass)
    }
})
</script>
<style lang="scss">
.router_animate-enter-active {
    animation: fadeInRight 0.3s;
}
.router_animate-leave-active {
    animation: fadeOutLeft 0.3s;
}
#appMain {
    height: 100%;
    overflow-y: auto;
}
</style>
