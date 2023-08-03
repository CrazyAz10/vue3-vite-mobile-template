<!-- 
  啊佐 2023-08-02
  国家区域代码前缀 + 手机号码 + 发送验证码表单项
  验证表单规则/请求规则都从外层表单做逻辑判断
  props:
    modelValue 绑定v-model值
    prefix 代码编号 默认86
-->
<template>
  <div class="phone-nunber-input">
    <span @click="showPicker = true" class="prefix">+{{ prefix[0] }}</span>
    <AzInput style="flex: 1;" type="text" v-model="phoneNumber" placeholder="请输入手机号" />
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
        :columns="options"
        v-model="prefix"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
    <span v-if="useSendCode" class="send-code" @click="sendCode">{{ sendText }}</span>
  </div>
</template>
<script lang="ts" setup name="PhoneNumberInput">
import { ref, computed } from 'vue'
import { prefixDefault } from './prefixPhone'
import AzInput from '../AzInput/AzInput.vue'
const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: ''
  },
  prefix: {
    type: [Number, String],
    default: 86
  },
  showClearIcon: {
    type: Boolean,
    default: true
  },
  useSendCode: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['update:modelValue', 'update:prefix', 'sendCode'])

// 显示下拉选择框弹窗
const showPicker = ref(false)

// 国家区域后缀
const prefix = computed({
  get() {
    return [props.prefix]
  },
  set(val) {
    emits('update:prefix', val[0])
  }
})

const firstSend = ref(true)
const countdownTime = ref(60)
const countdown: any = ref(null)

// 发送验证码按钮文案
const sendText = computed(() => {
  let text = firstSend.value ? '发送验证码' : '重新发送'
  return !countdown.value ? text : countdownTime.value
})

// 电话号码
const phoneNumber = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  }
})

// 重组可选国家地区代码
const options = computed(() => {
  return prefixDefault.map((res: any) => {
    return { text: `${res.cn} ${res.prefix}`, value: res.prefix }
  })
})

// 清空输入框内容
const clearInput = () => {
  phoneNumber.value = ''
}

// 选择国家区域代码前缀
const onConfirm = (val: any) => {
  prefix.value = val.selectedValues
  showPicker.value = false
}

// 发送验证码
const sendCode = () => {
  if (!props.useSendCode)
    return
  emits('sendCode', (res: any) => {
    // 成功发送验证码 开启倒计时重发
    if (res) {
      firstSend.value = false
      countdownTimer()
    }
  })
}

// 开始倒计时
const countdownTimer = () => {
  countdown.value = setTimeout(() => {
    if (countdownTime.value <= 0) {
      clearTimeout(countdown.value)
      countdown.value = false
    }
    countdownTime.value -= 1
    countdownTimer()
  }, 1000)
}
</script>

<style lang="scss">
.phone-nunber-input {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  // border-bottom: 1px solid var(--normal-border-color);
  .prefix {
    min-width: 60px;
    text-align: center;
    position: relative;
    padding-right: 15px;
    &::after {
      content: '';
      display: block;
      position: absolute;
      right: 5px;
      top: 8px;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid #666;
    }
  }
  .send-code {
    // width: 80px;
    min-width: 80px;
    text-align: center;
    color: var(--primary-color);
  }
}
</style>
