<template>
  <div class="top-big-back">
    <div class="back">
      <span class="back-btn" @click="goBack">
        <van-icon name="arrow-left" />
      </span>
      <span class="title">{{ title }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" name="topBigBack" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// props
defineProps({
  title: {
    type: String,
    default: ''
  },
  tips: {
    type: String,
    default: '欢迎使用啊佐vue3+vite模板'
  }
})
// 返回按钮
const goBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.top-big-back {
  padding: 15px;
  background: linear-gradient(-30.96deg, rgb(100, 158, 255) 16.521%, rgb(0, 64, 254) 93.767%);
  border-radius: 0 0 5px 5px;
  color: #fff;
  .back {
    display: flex;
    align-items: center;
    .back-btn {
      display: inline-block;
      padding: 10px 5px;
      font-size: 20px;
      font-weight: bold;
    }
    .title{
      font-size: 16px;
      line-height: 1em;
      margin-left: 5px;
    }
  }
}
</style>
