<!-- 
    啊佐 2023-08-02
    AzInput 
    输入框封装

    可清空
    可插入前后图标内容
    密文可自由切换明文/密文显示

    props:
      modelValue 绑定v-model值
      type 输入框类型
      placeholder 输入框描述
      showClearIcon 是否显示清空按钮

    slot: 
      before-icon(前图标)
      after-icon(后图标)
  -->
<template>
  <div class="lineInput">
    <span class="before-chunk">
      <slot name="before-icon"></slot>
    </span>
    <!-- 密码输入框时明文 -->
    <input
      v-show="!showPlaintext"
      ref="input"
      :type="props.type"
      :maxlenght="maxlenght"
      :placeholder="props.placeholder"
      v-model="value"
    />
    <!-- 密码输入框时密文 -->
    <input
      v-show="showPlaintext"
      ref="input2"
      type="text"
      :maxlenght="maxlenght"
      :readonly="readonly"
      :placeholder="props.placeholder"
      v-model="value"
    />
    <span class="after-chunk">
      <slot name="after-icon"></slot>
      <i v-show="isPassword" class="iconfont" :class="viewIconClass" @click.stop="checkType"></i>
      <van-icon v-show="showClear" name="clear" @click.stop="clearInput" />
    </span>
  </div>
</template>

<script lang="ts" name="LineInput" setup>
import { ref, computed, watch, onMounted } from 'vue'
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  maxlenght: {
    type: Number,
    default: Infinity
  },
  readonly: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  showClearIcon: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['update:modelValue'])
const isPassword = computed(() => {
  return props.type === 'password'
})
const showClear = ref(false)
const input = ref(null)
const input2 = ref(null)
const showPlaintext = ref(false)
onMounted(() => {
  input.value.onfocus = () => {
    if (props.showClearIcon) {
      showClear.value = true
    }
  }
  input.value.onblur = () => {
    if (!showPlaintext.value) {
      if (!value.value) {
        setTimeout(() => {
          showClear.value = false
        })
      }
    }
  }
  input2.value.onfocus = () => {
    if (props.showClearIcon) {
      showClear.value = true
    }
  }
  input2.value.onblur = () => {
    if (showPlaintext.value) {
      if (!value.value) {
        setTimeout(() => {
          showClear.value = false
        })
      }
    }
  }
})

// 双向绑定输入框内容
const value = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  }
})

// 监听输入框内容变化
watch(value, () => {
  if (value.value) {
    showClear.value = true
  }
})

// 密文类型输入框切换图标
const viewIconClass = computed(() => {
  if (showPlaintext.value) {
    return ['icon-yanjing1']
  } else {
    return ['icon-yanjing']
  }
})

// 切换密文/明文
const checkType = () => {
  showPlaintext.value = !showPlaintext.value
}

// 清空输入框内容
const clearInput = () => {
  value.value = ''
  if (showPlaintext.value) {
    input2.value.focus()
  } else {
    input.value.focus()
  }
}
</script>

<style scoped lang="scss">
.lineInput {
  width: 100%;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    border: none;
    padding: 0 10px;
    background-color: transparent;
    width: 0; // 防止flex:1失效
  }
  .after-chunk {
    display: flex;
    align-items: center;
    i {
      padding: 0 3px;
    }
  }
}
</style>
