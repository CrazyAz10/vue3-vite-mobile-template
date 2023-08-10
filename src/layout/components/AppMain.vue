<template>
    <router-view v-slot="{ Component }">
        <transition name="router_animate" mode="out-in">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script lang="ts">
export default {
    name: 'AppMain',
    // import引入的组件需要注入到对象中才能使用
    components: {},
    setup() {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    // created () {

    // },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    // mounted () {

    // },
    methods: {}
}
</script>

<style scoped lang="scss">
//@import 'xxx.scss';引入公共css类
</style>
