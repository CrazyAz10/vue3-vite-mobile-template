<template>
<div>
    <top-big-back>
        <div class="top-back-other">
            <div class="left-chunk">
                <p class="title">
                    设置
                </p>
                <p class="tips">可更换头像和昵称，以及修改密码，或退出登录</p>
            </div>
        </div>
    </top-big-back>
    <div class="setting">
        <van-cell is-link value="更换头像" @click="setAvatar">
            <template #title>
                <div class="avatar">
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
            </template>
        </van-cell>
        <van-cell is-link title="我的昵称" :value="userStore.userInfo.name" @click="setName"></van-cell>
        <van-cell is-link title="修改密码" value="" @click="linkTo({path: '/forgotPassword'})"></van-cell>
        <div class="logout">
            <van-button round size="small" color="#000" style="width: 100%;" type="success" @click="logout">退出登录</van-button>
        </div>
        <settingAvatar v-model:show="showSettingAvatar" />
        <settingName v-model:show="showSettingName" />
    </div>
</div>
</template>

<script lang="ts" name="UserSetting" setup>
import TopBigBack from '@/components/TopBigBack/TopBigBack.vue'
import settingAvatar from './components/settingAvatar.vue'
import settingName from './components/settingName.vue'
import { ref } from 'vue'
import { linkTo } from '@/utils/toolHook'
import { useUserStoreHook } from '@/store/modules/user'
const userStore = useUserStoreHook()
userStore.getUserInfo()
import { getImage } from '@/utils/getAssets'
const showSettingAvatar = ref(false)
const showSettingName = ref(false)
// 设置头像
const setAvatar = () => {
    showSettingAvatar.value = true
}
// 设置名称
const setName = () => {
    showSettingName.value = true
}
// 退出登录
const logout = () => {
    userStore.logout()
}
</script>

<style lang="scss" scoped>
.top-back-other {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

.setting {
    padding: 10px;
     .van-cell{
        display: flex;
        align-items: center;
    }
    .avatar{
        width: 54px;
        height: 54px;
    }
    .logout{
        padding: 30px;
    }
}
</style>
