<template>
    <top-big-back>
        <div v-if="userStore.token" class="top-back-other user-info">
            <div class="info">
                <div class="user-avatar">
                    <van-image
                        round
                        width="100%"
                        height="100%"
                        :src="getImage(userStore.userInfo.avatar)"
                    >
                        <template v-slot:error>
                            <img src="@/assets/logo.png" alt="" style="width: 100%;height: 100%;">
                        </template>
                    </van-image>
                </div>
                <!-- <img :src="getImage(userStore.userInfo.avatar)" class="user-avatar" /> -->
                <div class="left-chunk">
                    <p class="title">
                        {{ userStore.userInfo.name }}
                    </p>
                    <p class="tips">欢迎使用啊佐vue3+vite模板</p>
                </div>
            </div>
            <van-icon name="setting-o" @click="linkTo({path: '/userSetting'})" />
        </div>
        <div v-else class="top-back-other">
            <div class="left-chunk">
                <p class="title">
                    点击 <span @click="linkTo({path: '/login'})">登录</span> 或 <span @click="linkTo({path: '/register'})">注册</span>
                </p>
                <p class="tips">欢迎使用啊佐vue3+vite模板</p>
            </div>
            <van-icon name="setting-o" @click="linkTo({path: '/userSetting'})" />
        </div>
    </top-big-back>
    <div class="user">
        <div class="item-wrap collect">
            <div class="item">
                <div class="left-text">
                    <p class="title">我的收藏</p>
                    <p class="tips">My Collection</p>
                </div>
                <div class="handle-chunk">
                    <button @click="linkTo({path: '/userCollection'})">点击查看</button>
                </div>
            </div>
        </div>
        <div class="item-wrap comment">
            <div class="item">
                <div class="left-text">
                    <p class="title">我的评论</p>
                    <p class="tips">My Comments</p>
                </div>
                <div class="handle-chunk">
                    <button @click="linkTo({path: '/userComments'})">点击查看</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" name="UserPage" setup>
import TopBigBack from '@/components/TopBigBack/TopBigBack.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useUserStoreHook } from '@/store/modules/user'
const userStore = useUserStoreHook()
import { getImage } from '@/utils/getAssets'
// 跳转
const linkTo = (to:any) => {
    router.push(to)
}
</script>

<style lang="scss" scoped>
.top-back-other {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info{
        display: flex;
        align-items: center;
        .user-avatar{
            width: 54px;
            height: 54px;
            margin-right: 15px;
            border-radius: 50%;
        }
    }
    .title {
        padding-left: 10px;
        font-size: 16px;
        span{
            color: #FF9315;
        }
    }
    .tips {
        margin-top: 17px;
        padding-left: 10px;
        font-size: 12px;
        color: #fbfbfb;
    }
    i{
        font-size: 20px;
    }
}

.user {
    padding: 20px;
    .item-wrap {
        margin-bottom: 20px;
        border-radius: 5px;
        .item {
            display: flex;
            justify-content: space-between;
            padding: 22px;
            align-items: center;
            border-radius: 5px;
            .left-text{
                font-size: 16px;
                .title {
                    color: #fff;
                    margin-bottom: 8px;
                }
                .tips {
                    color: rgba(255, 255, 255, 0.55);
                }
            }
        }
        &.collect {
           background: linear-gradient(-30.96deg, rgb(255, 172, 74) 20.229%,rgb(255, 79, 0) 89.692%);
            .item{
                background: url('@/assets/images/userPage/collect.png') no-repeat 75% center;
                .handle-chunk {
                    button {
                        border: none;
                        height: 23px;
                        padding: 0 10px;
                        background: rgb(255, 255, 255);
                        border-radius: 20px;
                        color: #FF5001;
                        font-size: 12px;
                    }
                }
            }
        }
        &.comment {
           background: linear-gradient(-30.96deg, rgb(130, 177, 255) 20.091%,rgb(0, 64, 254) 89.692%);
            .item{
                background: url('@/assets/images/userPage/comment.png') no-repeat 75% center;
                .handle-chunk {
                    button {
                        border: none;
                        height: 23px;
                        padding: 0 10px;
                        background: rgb(255, 255, 255);
                        border-radius: 20px;
                        color: #165DFF;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>
