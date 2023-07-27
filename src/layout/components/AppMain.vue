<template>
  <div class="AppMain">
    <router-view />
  </div>
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
