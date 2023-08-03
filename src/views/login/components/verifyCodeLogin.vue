<template>
    <van-form @failed="onFailed" @submit="onSubmit">
        <van-cell-group inset>
            <!-- 通过 pattern 进行正则校验 -->
            <van-field
                v-model="formData.phoneNumber"
                name="phoneNumber"
                placeholder="请输入手机号码"
                :rules="[{ validator: isPhoneNumber, message: '请输入正确的手机号码' }]"
            >
                <template #input>
                    <PhoneNumberInput
                        v-model="formData.phoneNumber"
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
import { showToast } from 'vant'
import PhoneNumberInput from '@/components/PhoneNumberInput/PhoneNumberInput.vue'
import { isPhoneNumber } from '@/utils/validate'
import AzInput from '@/components/AzInput/AzInput.vue'

// 表单数据
const formData = ref({
    prefix: '86',
    phoneNumber: '',
    code: ''
})

// 发送验证码
const sendCode = (fn: any) => {
    if (!isPhoneNumber(formData.value.phoneNumber)) {
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
    showToast('表单验证通过！')
}
</script>

<style scoped lang="scss"></style>
