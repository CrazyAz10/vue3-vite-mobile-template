<template>
    <div class="container-wrap home">
        <div class="container-box">
            <br />
            <p>{{ $t(`menu.Home`) }}<br />当前终端：{{ device }}</p>
            <br />
            <hr />
            <div>
                <h3>vant ui 主题</h3>
                <van-space direction="vertical" fill>
                    <van-button type="primary" size="small">主要按钮</van-button>
                    <van-button type="success" size="small">成功按钮</van-button>
                    <van-button type="default" size="small">默认按钮</van-button>
                    <van-button type="warning" size="small">警告按钮</van-button>
                    <van-button type="danger" size="small">危险按钮</van-button>
                    <van-cell title="选择单个日期" :value="date" @click="show = true" />
                    <van-calendar v-model:show="show" @confirm="onConfirm" />
                    <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
                </van-space>
            </div>
            <br />
            <hr />
            <div>
                <h3>wow.js + animate.css 可视区首次进入动画</h3>
                <div v-for="item in 50" :key="item">{{ item }}</div>
                <div class="wow animate__fadeInUp" data-wow-duration=".5s" data-wow-delay="0s">
                    <h3>动画进入</h3>
                    <p>1.wow.js</p>
                    <p>1.animate.css</p>
                </div>
                <div v-for="item in 50" :key="item">{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" name="Home" setup>
import { appStore } from '@/stores/appStore'
import { ref, computed, onMounted } from 'vue'
import { testRequest } from '@/api/main'
// mounted
onMounted(() => {
    testRequest({
        userName: 'crazyAz'
    })
})
const store = appStore()
// 终端类型
const device = computed(() => {
    return store.device
})

const currentPage = ref(1)

const show = ref(false)
const date = ref('')
const onConfirm = (date: any) => {
    date.value = date
}
</script>
<style scoped lang="scss">
.home {
}
</style>
