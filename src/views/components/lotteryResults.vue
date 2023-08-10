<template>
    <div class="lotteryResults">
        <div v-for="i in props.list.length - 1" class="item" :key="i" :class="setBose(props.list[i-1])">
            <p>{{ props.list[i - 1] }}</p>
            <p class="other">金/兔</p>
        </div>
        <div class="symbol">+</div>
        <div class="item" :class="setBose(props.list[props.list.length - 1])">
            <p>{{ props.list[props.list.length - 1] }}</p>
            <p class="other">金/兔</p>
        </div>
    </div>
</template>

<script lang="ts" name="LotteryResults" setup>

const props = defineProps({
    list: Array
})

const setBose = (item) => {
    // 红波（01,02,07,08,12,13,18,19,23,24,29,30） 蓝波（03,04,09,10,14,15,20,25,26,31） 绿波（05,06,11,16,17,21,22,27,28,32,33）
    let red = ['01', '02', '07', '08', '12', '13', '18', '19', '23', '24', '29', '30']
    let blue = ['03', '04', '09', '10', '14', '15', '20', '25', '26', '31']
    // let green = [05, 06, 11, 16, 17, 21, 22, 27, 28, 32, 33];
    if (red.includes(item)) {
        return ['red']
    } else if (blue.includes(item)) {
        return ['blue']
    }
    return ['green']
}
</script>

<style scoped lang="scss">
.lotteryResults {
    display: flex;
    align-items: center;
    .item {
        display: block;
        width: 100px;
        margin: 0 2px;
        padding: 5px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
        text-align: center;
        line-height: 20px;
        color: #fff;
        &.red {
            background: #f60100;
        }
        &.green {
            background: #00B500;
        }
        &.blue {
            background: #165dff;
        }
        p{
            font-size: 20px;
            font-weight: bold;
        }
        .other{
            margin-top: 10px;
            border-radius: 10px;
            background: #fff;
            color: #000;
            text-align: center;
            padding: 10px 0;
            font-size: 10px;
            line-height: 1em;
        }
    }
    .symbol{
        font-weight: bold;
        font-size: 20px;
        margin: 0 7px;
    }
}
</style>
