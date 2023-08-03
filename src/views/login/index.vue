<template>
    <top-big-back title="登录" />
    <div class="register">
        <div class="tabs">
            <div
                class="item"
                :class="{ active: loginType === 'pwd' }"
                @click="chageLoginType('pwd')"
            >
                密码登录
            </div>
            <div
                class="item"
                :class="{ active: loginType === 'vfcode' }"
                @click="chageLoginType('vfcode')"
            >
                验证码登录
            </div>
        </div>
        <Transition name="fade" mode="out-in">
            <component :is="loginComponent"></component>
        </Transition>
        <div class="tips-chunk">
            <span @click="linkTo('/forgotPassword')">忘记密码</span>
            <span @click="linkTo('/register')">立即注册</span>
        </div>
    </div>
</template>

<script lang="ts" name="LoginPage" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import TopBigBack from '@/components/TopBigBack/TopBigBack.vue'
import PasswordLogin from './components/passwordLogin.vue'
import VerifyCodeLogin from './components/verifyCodeLogin.vue'
const router = useRouter()
const loginType = ref('pwd')
const loginComponent = computed(() => {
    if (loginType.value === 'pwd') {
        return PasswordLogin
    }
    return VerifyCodeLogin
})
// 切换登录方式
const chageLoginType = (type: string) => {
    loginType.value = type
}

// 路由跳转
const linkTo = (path:string) => {
	router.push({
		path
	})
}
</script>

<style lang="scss" scoped>
.register {
    // height: 100vh;
    padding: 20px 0;
    .tabs {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0 30px;
        .item {
            width: 40%;
            text-align: center;
            line-height: 20px;
            // color: #c0c0c0;
            &.active {
                color: var(--primary-color);
            }
        }
    }
    .tips-chunk {
        margin: 30px;
        text-align: center;
        font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		span{
			width: 40%;
			padding: 5px;
			text-align: center;
		}
    }
}
</style>
