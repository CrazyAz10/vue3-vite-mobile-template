<template>
    <van-popup
    v-model:show="showBottom"
    round
    closeable
    @open="open"
    position="bottom"
    >
        <div class="form">
            <div class="name">
                <label>用户名称</label>
                <input type="text" v-model="userName">
            </div>
            <div class="save">
                <van-button round size="small" color="#000" style="width: 100%;" type="success" @click="save">保存</van-button>
            </div>
        </div>
    </van-popup>
</template>

<script lang='ts' name='SettingName' setup>
    import { ref, computed } from 'vue'
    import { showToast } from 'vant'
    import { updateUserData } from '@/api/user'
    
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

    const userName = ref('')
    const open = () => {
        userName.value = userStore.userInfo.name
    }

    // 保存操作
    const save = () => {
        updateUserData({name: userName.value})
        .then((res:any) => {
            if (res.code === 200) {
                showToast('保存成功')
                showBottom.value = false
                userStore.getUserInfo()
            }
        })
    }

</script>

<style scoped lang="scss">
.form {
    padding: 60px 30px;
    text-align: center;
    .tips{
        font-size: 12px;
        margin: 10px;
    }
    label{
        display: block;
        font-size: 16px;
        margin-bottom: 20px;
    }
    input{
        width: 100%;
        padding: 5px;
        border: 1px solid var(--normal-border-color);
        border-radius: 5px;
        background: transparent;
        line-height: 22px;
        text-align: center;
    }
    .save{
        margin-top: 30px;
    }
}
</style>