<template>
    <div class="container-wrap home">
        <div class="container-box">
            <div class="search-chunk">
                <input placeholder="站内搜索" v-model="searchText"/>
                <van-button type="primary" color="linear-gradient(-30.96deg, rgb(100, 158, 255) 21.842%, rgb(0, 64, 254) 87.694%)" style="width: 120px;" size="small">搜索</van-button>
            </div>
            <div class="region">
                <div class="region-list">
                    <span class="item" :class="{active: activeRegion == 1}">南宁</span>
                    <span class="item">河池</span>
                    <span class="item">桂林</span>
                </div>
                <div class="right-bth">挑码助手</div>
            </div>
            <div class="lottery-results common-chunk">
                <div class="top-title flex-space-between-center">
                    <div class="title">第x开奖结果</div>
                    <div class="right-tab flex-space-between-center"><van-icon name="play-circle" /><span>看直播</span></div>
                </div>
                <div class="result">
                    <lotteryResults :list="['01', '07', '35', '27', '20', '14', '19']" />
                </div>
            </div>
            <div class="history-results common-chunk">
                <div class="top-title flex-space-between-center">
                    <div class="title">第x期 2023-06-29 21点30分30秒 星期四</div>
                    <div class="right-tab flex-space-between-center">历史记录</div>
                </div>
                <div class="result">
                    <van-button type="primary" :icon="icons[0]" color="linear-gradient(-30.96deg, rgb(100, 158, 255) 21.842%, rgb(0, 64, 254) 87.694%)" size="small">走势图</van-button>
                    <van-button type="primary" :icon="icons[1]" color="linear-gradient(-30.96deg, rgb(100, 158, 255) 21.842%, rgb(0, 64, 254) 87.694%)" size="small">复式计算</van-button>
                    <van-button type="primary" :icon="icons[2]" color="linear-gradient(-30.96deg, rgb(100, 158, 255) 21.842%, rgb(0, 64, 254) 87.694%)" size="small">六合图库</van-button>
                    <van-button type="primary" :icon="icons[3]" color="linear-gradient(-30.96deg, rgb(100, 158, 255) 21.842%, rgb(0, 64, 254) 87.694%)" size="small">聊天室</van-button>
                </div>
            </div>
            <div class="region-results common-chunk">
                <div class="top-title flex-space-between-center">
                    <div class="title">南宁专区</div>
                    <div class="right-tab flex-space-between-center" @click="showApplyForAva = true"><span>点击申请广告位</span><van-icon name="arrow" /></div>
                </div>
                <div class="result">
                    <div class="list">
                        <div v-for="item in 12" :key="item" class="item">
                            <img src="" alt="">
                            <p class="title">UI UX Design</p>
                        </div>
                    </div>
                    <div class="region-list">
                        <span class="item">南宁</span>
                        <span class="item">河池</span>
                        <span class="item">桂林</span>
                        <span class="item">桂林</span>
                        <span class="item">桂林</span>
                        <span class="item">桂林</span>
                        <span class="item">桂林</span>
                        <span class="item">桂林</span>
                    </div>
                    <div class="more">
                        <span>查看更多</span>
                    </div>
                </div>
            </div>
            <div class="open-results common-chunk">
                <div class="top-title flex-space-between-center">
                    <div class="title">AAAAAAA级公开</div>
                </div>
                <div class="result">
                    <div class="tab-list">
                        <span class="item" :class="{active: activeOpen == 179}">179</span>
                        <span class="item">178</span>
                        <span class="item">177</span>
                        <span class="item">176</span>
                    </div>
                    <div class="open-result">
                        <span>开奖结果：特码</span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="prediction-list">
                        <div class="item">
                            <span class="type">推荐 ⑨ 肖：</span>
                            <span class="describe">虎鼠狗蛇兔鸡马羊猴</span>
                            <span class="label">这里稳</span>
                        </div>
                        <div class="item">
                            <span class="type">精选 ⑨ 码：</span>
                            <span class="describe">38.04.18.47.25.31.22.21.44.26</span>
                            <span class="label">稳准狠</span>
                        </div>
                    </div>
                    <div class="image-list">
                        <div class="title">图纸</div>
                        <div class="list">
                            <div class="item">
                                <img src="" alt="">
                                <p>澳门跑狗图</p>
                            </div>
                            <div class="item">
                                <img src="" alt="">
                                <p>澳门跑狗图</p>
                            </div>
                            <div class="item">
                                <img src="" alt="">
                                <p>澳门跑狗图</p>
                            </div>
                            <div class="item">
                                <img src="" alt="">
                                <p>澳门跑狗图</p>
                            </div>
                        </div>
                    </div>
                    <div class="more">
                        <span>查看更多澳门图纸</span>
                    </div>
                </div>
            </div>
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
        <applyForAva v-model:show="showApplyForAva" />
    </div>
</template>

<script lang="ts" name="Home" setup>
import { useAppStoreHook } from '@/store/modules/app'
import lotteryResults from './components/lotteryResults.vue'
import applyForAva from '@/views/components/applyForAva.vue'
import trendIcon from '@/assets/icons/trend.png'
import calcIcon from '@/assets/icons/calc.png'
import imageIcon from '@/assets/icons/image.png'
import chatIcon from '@/assets/icons/chat.png'
import { ref, computed, onMounted } from 'vue'
// import { testRequest } from '@/api/main'
const icons = [
    trendIcon,
    calcIcon,
    imageIcon,
    chatIcon
]
const searchText = ref('')
const showApplyForAva = ref(false)
// mounted
onMounted(() => {
    // testRequest({
    //     userName: 'crazyAz'
    // })
})
const appStore = useAppStoreHook()
// 终端类型
const device = computed(() => {
    return appStore.device
})

const activeRegion = ref(1)
const activeOpen = ref(179)

const currentPage = ref(1)

const show = ref(false)
const date = ref('')
const onConfirm = (date: any) => {
    date.value = date
}
</script>
<style scoped lang="scss">
.home {
    .flex-space-between-center{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .search-chunk{
        display: flex;
        align-content: center;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        input {
            flex: 1;
            height: 36px;
            padding: 0 20px;
            margin-right: 10px;
            border-radius: 18px;
            border: none;
            background: #F5F5F7;
        }
    }
    .region{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;
        .region-list{
            display: flex;
            .item{
                display: flex;
                height: 36px;
                margin-right: 10px;
                line-height: 36px;
                padding: 0 10px;
                border-radius: 10px;
                background: #F5F5F7;
                &.active{
                    background: linear-gradient(-30.96deg, rgb(100, 158, 255) 12.565%,rgb(0, 64, 254) 98.283%);
                    color: #fff;
                }
            }
        }
        .right-bth{
            color: #FF8400;
        }
    }
    .common-chunk{
        margin-top: 30px;
        .top-title{
            .title{
                font-weight: bold;
                font-size: 16px;
            }
            .right-tab{
                font-size: 14px;
                color: #165DFF;
                line-height: 1em;
                i{
                    font-size: 20px;
                    margin-right: 5px;
                }
            }
        }
        .result{
            margin-top: 20px;
        }
    }
    .lottery-results{
    }
    .history-results{
        .top-title{
            .title{
                font-weight: bold;
                font-size: 12px;
            }
        }
        .result{
            display: flex;
            justify-content: space-between;
            button{
                width: 23%;
                padding: 0 5px;
                font-size: 12px;
                .van-button__content .van-button__text{
                    font-size: 12px;
                }
            }
        }
    }
    .region-results{
        .result{
            .list{
                display: flex;
                flex-wrap: wrap;
                margin: 0 -5px;
                .item{
                    width: calc(25% - 10px);
                    margin: 0 5px 15px;
                    img{
                        display: block;
                        width: 100%;
                        height: 50px;
                        border-radius: 10px;
                    }
                    .title{
                        margin-top: 5px;
                        text-align: center;
                        font-size: 12px;
                    }
                }
            }
            .region-list{
                display: flex;
                flex-wrap: wrap;
                .item{
                    display: flex;
                    width: calc(25% - 10px);
                    margin: 0 5px 10px;
                    height: 36px;
                    line-height: 36px;
                    padding: 0 10px;
                    border-radius: 10px;
                    background: #F5F5F7;
                    &.active{
                        background: linear-gradient(-30.96deg, rgb(100, 158, 255) 12.565%,rgb(0, 64, 254) 98.283%);
                        color: #fff;
                    }
                }
            }
        }
    }
    .open-results{
        .tab-list{
            display: flex;
            flex-wrap: wrap;
            margin: 0 -5px;
            .item{
                display: flex;
                width: calc(25% - 10px);
                margin: 0 5px 10px;
                height: 36px;
                text-align: center;
                line-height: 36px;
                padding: 0 10px;
                border-radius: 10px;
                background: #F5F5F7;
                &.active{
                    background: linear-gradient(-30.96deg, rgb(100, 158, 255) 12.565%,rgb(0, 64, 254) 98.283%);
                    color: #fff;
                }
            }
        }
        .open-result{
            margin-top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }
        .prediction-list{
            margin-top: 25px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .item{
                width: 100%;
                margin-bottom: 10px;
                .describe{
                    margin-left: 5px;
                }
                .label{
                    margin-left: 10px;
                    color: #165DFF;
                }
            }
        }
        .image-list{
            .title{
                font-size: 14px;
                font-weight: bold;
                margin: 15px 0;
            }
            .list{
                display: flex;
                margin: 0 -5px;
                .item{
                    width: calc(25% - 10px);
                    margin: 0 5px;
                    img{
                        width: 100%;
                        height: 102px;
                        border-radius: 10px;
                    }
                    p{
                        margin-top: 10px;
                        font-size: 12px;
                        line-height: 1em;
                        text-align: center;
                    }
                }
            }
        }
        .more{
            margin-top: 20px;
            cursor: default;
        }
    }
    .more{
        padding: 10px;
        text-align: center;
    }
}
</style>
