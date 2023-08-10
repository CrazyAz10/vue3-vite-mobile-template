<template>
    <van-popup v-model:show="show_" round style="padding: 15px" closeable @open="open">
        <div class="applyForAva">
            <div class="title">申请收录</div>
            <van-form @failed="onFailed" @submit="onSubmit">
                <van-cell-group inset>
                    <!-- 通过 pattern 进行正则校验 -->
                    <van-field
                        v-model="formData.siteName"
                        name="siteName"
                        label="站点"
                        placeholder="站点"
                        :rules="[{ emptyCheck, message: '请输入站点' }]"
                    />
                    <van-field
                        v-model="formData.webSite"
                        name="webSite"
                        label="网址"
                        placeholder="网址"
                        :rules="[{ emptyCheck, message: '请输入网址' }]"
                    />
                    <van-field
                        v-model="formData.advertType"
                        is-link
                        readonly
                        name="advertType"
                        label="类型"
                        placeholder="请选择类型"
                        @click="showPicker = true"
                    />
                    <van-field
                        v-model="formData.contacts"
                        name="contacts"
                        label="联系人"
                        placeholder="联系人"
                        :rules="[{ emptyCheck, message: '请输入联系人' }]"
                    />
                    <van-field
                        v-model="formData.introduction"
                        name="introduction"
                        label="简介"
                        placeholder="简介"
                        :rules="[{ emptyCheck, message: '请输入简介' }]"
                    />
                    <div class="az-field">
                        <van-uploader v-model="fileList" :max-count="1" :max-size="500 * 1024" accept="image/png, image/jpeg" :after-read="afterRead" @onOversize="onOversize" :before-read="beforeRead">
                            <van-button icon="plus" size="small" type="default">上传统计截图</van-button>
                        </van-uploader>
                    </div>
                </van-cell-group>
                <div style="margin: 16px">
                    <van-button block type="primary" size="small" native-type="submit"> 提交 </van-button>
                </div>
            </van-form>
        </div>
    </van-popup>
</template>

<script lang="ts" name="applyForAva" setup>
import { uploadFile } from '@/api/user'
import { applyAdv } from '@/api/ava'
import { showToast, showLoadingToast, closeToast } from 'vant'
import { ref, reactive, computed } from 'vue'
// props
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})

// 表单数据
const formData = reactive({
    webSite: '',
    advertName: '',
    contacts: '',
    introduction: '',
    statisticsPic: ''
})

// 校验空
const emptyCheck = (val) => val === ''

// emits
const $emits = defineEmits(['update:show'])

const show_ = computed({
    get() {
        return props.show
    },
    set(val) {
        $emits('update:show', val)
    }
})

// 上传文件预览列表
const fileList = ref([])

// 显示弹窗
const open = () => {
    fileList.value = []
}

// 表单校验回调
const onFailed = (error) => {
    console.log(error)
}

// 上传图片
const uploadFilePromise = (file) => {
    showLoadingToast('统计截图上传中')
    const fileData = new FormData()
    fileData.append('file', file)
    uploadFile(fileData)
    .then((res) => {
        closeToast()
        showLoadingToast('申请提交中')
        formData.statisticsPic = res.fileName
        const postData = Object.assign({}, formData)
        applyAdv(postData)
        .then((res:any) => {
            closeToast()
            if (res.code === 200) {
                showToast('保存成功')
            }
        }, () => {
            closeToast()
        })
    },
    ()=>{
        showToast('上传图片未知失败！请联系管理员')
        closeToast()
    })
}

// 图片大小限制
const onOversize = (file) => {
    showToast('文件大小不能超过 500kb')
};
// 上传文件前校验
const beforeRead = (file) => {
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
    showToast('请上传 jpg/png 格式图片')
    return false
    }
    return true
}
// 文件读取完成后回调
const afterRead = (file) => {
    // 此时可以自行将文件上传至服务器
    console.log(file)
}

// 提交表单
const onSubmit = () => {
    if (!fileList.value.length) {
        showToast('请先上传统计截图')
        return 
    }
    uploadFilePromise(fileList.value[0].file)
}
</script>

<style scoped lang="scss">
.applyForAva{
    .title{
        font-size: 16px;
        font-weight: bold;
    }
    .az-field{
        padding: var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding);
    }
}
.van-cell-group{
    margin: 0;
    padding: 10px 0;
}
</style>
