<template>
    <div
        class="set-theme"
        v-click-outside="
            () => {
                show = false
            }
        "
    >
        <DropDownMenu>
            <template #title
                ><i class="iconfont icon-a-huaban2fuben9 menu-icon" @click="openSlider"></i
            ></template>
            <ul>
                <li :class="{ active: theme == 'light' }" @click="changeTheme('light')">
                    高亮主题
                </li>
                <li :class="{ active: theme == 'dark' }" @click="changeTheme('dark')">暗色主题</li>
            </ul>
        </DropDownMenu>
    </div>
</template>

<script lang="ts" name="SetTheme" setup>
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu.vue'
import { ref, computed } from 'vue'
import { useAppStoreHook } from '@/store/modules/app'
const appStore = useAppStoreHook()
let show = ref(false)

const theme = computed(() => {
    return JSON.parse(JSON.stringify(appStore.theme))
})

// 切换主题
const changeTheme = (theme: string) => {
    appStore.updateTheme(theme)
    show.value = false
}
</script>

<style lang="scss" scoped>
.set-theme {
    position: relative;
    display: inline-block;
    .menu-icon {
        font-size: 20px;
    }
}
.az-switch {
    i {
        font-size: 26px;
    }
}
.slide-bar {
    position: absolute;
    //   width: 140px;
    left: 50%;
    top: calc(100% + 20px);
    transform: translateX(-50%);
    padding: 5px;
    background: var(--normal-background-color);
    box-shadow: 0 0 10px var(--normal-shadow-color);

    li {
        padding: 3px 0;
        white-space: nowrap;
        &.active {
            color: var(--primary-color);
        }
    }
}
</style>
