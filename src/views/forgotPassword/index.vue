<template>
    <top-big-back title="忘记密码" />
    <div class="forgot-password">
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
                <van-field
                    v-model="formData.password"
                    name="password"
                    placeholder="请设置新密码"
                    :rules="[
                        { required: true, message: '请设置新密码' },
                        {
                            validator: verifyPassword,
                            message: '密码必须包含有大小写字母和数字，且长度为6-16位'
                        }
                    ]"
                >
                    <template #input>
                        <AzInput
                            v-model="formData.password"
                            type="password"
                            placeholder="请设置新密码"
                        />
                    </template>
                </van-field>
                <van-field
                    v-model="formData.confirmPassword"
                    name="confirmPassword"
                    placeholder="请确认新密码"
                    :rules="[
                        { required: true, message: '请确认新密码' },
                        { validator: verifyConfirmPassword, message: '确认密码与设置密码不一致！' }
                    ]"
                >
                    <template #input>
                        <AzInput
                            v-model="formData.confirmPassword"
                            type="password"
                            placeholder="请确认新密码"
                        />
                    </template>
                </van-field>
            </van-cell-group>
            <div style="margin: 16px">
                <van-button color="linear-gradient(-30.96deg, rgb(100, 158, 255) 21.842%, rgb(0, 64, 254) 87.694%)" block type="primary" native-type="submit"> 注册 </van-button>
            </div>
        </van-form>
        <div class="tips-chunk">
            <p>提示：密码长度为6-16位数字或字母</p>
        </div>
    </div>
</template>

<script lang="ts" name="ForgotPassword" setup>
import { ref } from 'vue'
import { showToast } from 'vant'
import TopBigBack from '@/components/TopBigBack/TopBigBack.vue'
import PhoneNumberInput from '@/components/PhoneNumberInput/PhoneNumberInput.vue'
import { isPhoneNumber, verifyPassword } from '@/utils/validate'
import AzInput from '@/components/AzInput/AzInput.vue'

// 表单数据
const formData = ref({
    prefix: '86',
    phoneNumber: '',
    code: '',
    password: '',
    confirmPassword: ''
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

// 密码和设置密码比对
const verifyConfirmPassword = () => {
    return formData.value.password === formData.value.confirmPassword
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

<style lang="scss" scoped>
.forgot-password {
    // height: 100vh;
    padding: 20px 0;
    .tips-chunk {
        margin: 30px;
        text-align: center;
        font-size: 12px;
    }
}
</style>
