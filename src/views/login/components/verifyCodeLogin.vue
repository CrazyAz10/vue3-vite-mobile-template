<template>
    <van-form @failed="onFailed" @submit="onSubmit">
        <van-cell-group inset>
            <!-- 通过 pattern 进行正则校验 -->
            <van-field
                v-model="formData.phone"
                name="phone"
                placeholder="请输入手机号码"
                :rules="[{ validator: isPhoneNumber, message: '请输入正确的手机号码' }]"
            >
                <template #input>
                    <PhoneNumberInput
                        v-model="formData.phone"
                        v-model:prefix="formData.prefix"
                        @sendCode="sendCode"
                    />
                </template>
            </van-field>
            <van-field
                v-model="formData.code"
                name="code"
                :maxlength="4"
                placeholder="请输入验证码"
                :rules="[{ required: true, message: '请输入验证码' }]"
            >
                <template #input>
                    <AzInput v-model="formData.code" placeholder="请输入验证码" />
                </template>
            </van-field>
        </van-cell-group>
        <div style="margin: 16px">
            <van-button color="linear-gradient(-30.96deg, rgb(100, 158, 255) 21.842%, rgb(0, 64, 254) 87.694%)" block type="primary" native-type="submit"> 登录 </van-button>
        </div>
    </van-form>
</template>

<script lang="ts" name="VerifyCodeLogin" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast, showSuccessToast } from 'vant'
import PhoneNumberInput from '@/components/PhoneNumberInput/PhoneNumberInput.vue'
import { isPhoneNumber } from '@/utils/validate'
import { login } from '@/api/user'
import AzInput from '@/components/AzInput/AzInput.vue'
import { useUserStoreHook } from '@/store/modules/user'

const router = useRouter()
const userStore = useUserStoreHook()

// 表单数据
const formData = ref({
    loginWay: 1,
    prefix: '86',
    phone: '',
    code: ''
})

// 发送验证码
const sendCode = (fn: any) => {
    if (!isPhoneNumber(formData.value.phone)) {
        showToast('请先输入有效的电话号码！')
        fn(false)
        return
    }
    // 发送验证码
    fn(true)
}

// 校验表单反馈
const onFailed = (errorInfo: any) => {
    console.log(errorInfo)
    showToast('请先按要求填写表单！')
}

// 提交表单
const onSubmit = () => {
    const data = {
        loginWay: formData.value.loginWay,
        prefix: formData.value.prefix,
        phone: formData.value.phone,
        code: formData.value.code,
    }
    login(data)
    .then(res => {
        if (res.code === 200) {
            showSuccessToast('登录成功！')
            userStore.updateToken(res.data.token)
            userStore.updateUserInfo(res.data.user)
            router.replace({
                path: '/'
            })

        }
    })
}
</script>

<style scoped lang="scss"></style>
