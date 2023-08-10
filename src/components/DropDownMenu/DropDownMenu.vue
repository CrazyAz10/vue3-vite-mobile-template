<template>
    <div class="DropDownMenu" v-click-outside="() => { show = false }">
        <div class="menu" @click="shangeShow">
            <span v-if="title">{{ props.title }}</span>
            <slot v-else name="title"></slot>
        </div>
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <div v-if="show" class="slide-bar">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" name="DropDownMenu" setup>
import { ref } from 'vue'
const props = defineProps({
    title: {
        type: String,
        default: ''
    }
})
const show = ref(false)
const shangeShow = () => {
    show.value = !show.value
}
</script>

<style scoped lang="scss">
.DropDownMenu {
    position: relative;
    .menu{
        font-size: 14px;
    }
    .slide-bar {
        position: absolute;
        right: 0;
        top: calc(100% + 20px);
        // transform: translateX(-50%);
        padding: 10px;
        min-width: 80px;
        background: var(--normal-background-color);
        box-shadow: 0 0 10px var(--normal-shadow-color);
        border-radius: 10px;
        &::after{
            content: '';
            position: absolute;
            right: 10px;
            top: 0;
            transform: translateY(-100%);
            border-left: 8px solid transparent;
            border-bottom: 8px solid var(--normal-background-color);
            border-right: 8px solid transparent;
        }
        li {
            padding: 3px 10px;
            &.active {
                color: var(--primary-color);
            }
        }
    }
}
</style>
