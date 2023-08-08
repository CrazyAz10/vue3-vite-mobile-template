<template>
    <div class="set-language" v-click-outside="() => { show = false }">
        <div class="wrap">
            <i class="iconfont icon-qiehuanyuyan" @click="shangeShow"></i>
            <!-- <img src="@/assets/icons/lang.png" alt="" @click="shangeShow"> -->
        </div>
        <transition enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut">
            <div v-if="show" class="slide-bar">
                <ul>
                    <li :class="{active: language=='zh-CN'}" @click="handleSetLanguage('zh-CN')">中文</li>
                    <li :class="{active: language=='zh-HK'}" @click="handleSetLanguage('zh-HK')">繁體</li>
                    <li :class="{active: language=='en-US'}" @click="handleSetLanguage('en-US')">English</li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts" name="SetLanguage">
import { ref, computed } from 'vue'
import i18n from '@/i18n'
import { Locale } from 'vant'
import { requireLang, vantLang } from '@/i18n'
import { useAppStoreHook } from '@/store/modules/app'
const appStore = useAppStoreHook()
const show = ref(false)
const language = computed(() => {
    return appStore.language
})
const handleSetLanguage = (lang: string) => {
    i18n.global.locale = lang
    Locale.use(lang, Object.assign(requireLang(lang), vantLang[lang]))
    i18n.global.mergeLocaleMessage(lang, Object.assign(requireLang(lang), vantLang[lang]))
    appStore.updateLanguage(lang)
    show.value = false
    // console.log(requireLang(lang))
}

const shangeShow = () => {
    show.value = !show.value
}

</script>

<style lang="scss" scoped>
.set-language {
    position: relative;
    .icon-qiehuanyuyan{
        font-size: 26px;
    }
    .slide-bar {
        position: absolute;
        left: 50%;
        top: calc(100% + 20px);
        transform: translateX(-50%);
        padding: 5px;
        background: var(--normal-background-color);
        box-shadow: 0 0 10Px var(--normal-shadow-color);

        li {
            padding: 3px 10px;
            &.active{
                color: var(--primary-color)
            }
        }
    }
}
</style>