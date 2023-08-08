<template>
    <van-popup
    v-model:show="showBottom"
    round
    closeable
    @open="open"
    position="bottom"
    >
        <div class="form">
            <div class="avatar-wrap">
                <van-uploader name="avatar" preview-size="100%" v-model="fileList" reupload :max-count="1" :max-size="500 * 1024" accept="image/png, image/jpeg" :after-read="afterRead" @onOversize="onOversize" :before-read="beforeRead">
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
                </van-uploader>
            </div>
            <p class="tips">点击上传头像</p>
            <p class="tips">请上传大小不得大于500KB的jpg/png格式图片</p>
            <div class="save">
                <van-button round size="small" color="#000" style="width: 100%;" type="success" @click="save">保存</van-button>
            </div>
        </div>
    </van-popup>
</template>

<script lang='ts' name='SettingAvatar' setup>
    import { getImage } from '@/utils/getAssets'
    import { uploadFile, updateUserData } from '@/api/user'
    import { showToast, showLoadingToast, closeToast } from 'vant'
    import { ref, computed } from 'vue'
    
    import { useUserStoreHook } from '@/store/modules/user'
    const userStore = useUserStoreHook()

    const props = defineProps({
        show: {
            type: Boolean,
            default: false
        }
    })

    const emits = defineEmits(['update:show'])
    // 弹窗状态
    const showBottom = computed({
        get() {
            return props.show
        },
        set(val) {
            emits('update:show', val)
        }
    })

    const fileList = ref([])

    const open = () => {
        fileList.value = []
    }

    // 图片大小限制
    const onOversize = (file) => {
      showToast('文件大小不能超过 500kb')
    };

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

    const uploadFilePromise = (url) => {
        showLoadingToast('图片上传中')
        uploadFile({
            url: `${ import.meta.env.VITE_APP_API_URL }/common/uploadBbsPicVideo`,
            filePath: url,
            name: 'file',
            success: (res) => {
                closeToast()
                updateUserData({ avatar: res.fileName })
            },
            complete:()=>{
                showToast('上传图片未知失败！请联系管理员')
                closeToast()
            }
        })
    }

    // 开始上传图片
    const save = () => {
        console.log(fileList.value.length)
        console.log(fileList.value[0].file)
        if (!fileList.value.length) {
            showToast('请先上传需要更新的头像图片')
            return 
        }
        // 上传头像
        uploadFilePromise(fileList.value[0].file.url)
    }

</script>

<style scoped lang="scss">
.form {
    padding: 60px 30px;
    text-align: center;
    :deep .van-uploader__preview{
        margin: 0;
    }
    :deep .van-uploader {
        // margin: 0 auto;
        border-radius: 10px;
    }
    .avatar-wrap{
        margin: 0 auto;
        width: 84px;
        height: 84px;
        border: 2px dashed #ccc;
        border-radius: 10px;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        .avatar{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            // position: absolute;
            // left: 50%;
            // top: 50%;
            // transform: translateX(-50%) translateY(-50%);
        }
    }
    .tips{
        font-size: 12px;
        margin: 10px;
    }
    .save{
        margin-top: 20px;
    }
}
</style>