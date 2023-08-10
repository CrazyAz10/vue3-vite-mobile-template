<template>
  <div class="az-menu">
    <DropDownMenu>
        <template #title><i class="iconfont icon-menucaidan3 menu-icon" @click="openSlider"></i></template>
        <ul>
            <li @click="linkTo({path: '/test'})">1</li>
            <li>2</li>
        </ul>
    </DropDownMenu>
  </div>

</template>

<script lang='ts' name='Az-menu' setup>
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu.vue'
import { linkTo } from '@/utils/toolHook'
</script>

<style scoped lang="scss">
.az-menu{
  .menu-icon{
    font-size: 20px;
  }
}
</style>