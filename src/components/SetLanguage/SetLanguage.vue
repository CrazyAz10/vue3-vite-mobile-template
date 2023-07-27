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
                    <li :class="{active: language=='cn'}" @click="handleSetLanguage('cn')">中文</li>
                    <li :class="{active: language=='en'}" @click="handleSetLanguage('en')">English</li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts" name="SetLanguage">
import { ref, computed } from 'vue'
// import { locale, mergeLocaleMessage } from 'vue-i18n'
// import { requireLang, elementLang } from '@/i18n'
import i18n from '@/i18n'
// console.log(i18n.global)
import { appStore } from '@/stores/appStore'
// const instance = getCurrentInstance()
// console.log(instance)
const store = appStore()
const show = ref(false)
const language = computed(() => {
    return store.language
})
const handleSetLanguage = (lang: string) => {
    i18n.global.locale = lang
    store.updateLanguage(lang)
    show.value = false
    // console.log(requireLang(lang))
    // i18n.global.mergeLocaleMessage(lang, Object.assign(requireLang(lang), elementLang[lang]))
}

const shangeShow = () => {
    show.value = !show.value
}

</script>

<style lang="scss" scoped>
.set-language {
    position: relative;
    .icon-qiehuanyuyan{
        font-size: 35px;
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