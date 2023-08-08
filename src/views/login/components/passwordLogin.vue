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
                        :useSendCode="false"
                    />
                </template>
            </van-field>
            <van-field
                v-model="formData.password"
                name="password"
                placeholder="登录密码"
                :rules="[{ required: true, message: '请设输入密码' }]"
            >
                <template #input>
                    <AzInput v-model="formData.password" type="password" placeholder="登录密码" />
                </template>
            </van-field>
        </van-cell-group>
        <div style="margin: 16px">
            <van-button color="linear-gradient(-30.96deg, rgb(100, 158, 255) 21.842%, rgb(0, 64, 254) 87.694%)" block type="primary" native-type="submit"> 登录 </van-button>
        </div>
    </van-form>
</template>

<script lang="ts" name="PasswordLogin" setup>
import { ref  } from 'vue'
import { useRouter } from 'vue-router'
import { showToast, showSuccessToast } from 'vant'
import md5 from 'js-md5'
import PhoneNumberInput from '@/components/PhoneNumberInput/PhoneNumberInput.vue'
import { isPhoneNumber } from '@/utils/validate'
import AzInput from '@/components/AzInput/AzInput.vue'
import { login } from '@/api/user'
import { useUserStoreHook } from '@/store/modules/user'
// console.log(useUserStoreHook)
const router = useRouter()
const userStore = useUserStoreHook()
// 表单数据
const formData = ref({
    loginWay: 0,
    prefix: '86',
    phone: '',
    password: ''
})

// 校验表单反馈
const onFailed = (errorInfo: any) => {
    showToast('请先按要求填写表单！')
}

// 提交表单
const onSubmit = () => {
    const data = {
        loginWay: formData.value.loginWay,
        prefix: formData.value.prefix,
        phone: formData.value.phone,
        password: md5(formData.value.password),
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
