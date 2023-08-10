import { defineStore } from 'pinia'
import { store } from '@/store'
import { getUserData } from '@/api/user'
import Cookies from 'js-cookie'

//清除所有cookie函数
function clearCookie() {
    const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys) {
        for(let i = keys.length; i--;)
        Cookies.remove(keys[i])
    }
}

// 用户信息
const userInfo = localStorage.getItem('userInfo')
export const useUserStore = defineStore({
    id: 'user-store',
    state: () => {
        return {
            token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
            userInfo: userInfo ? JSON.parse(userInfo) : {}
        }
    },
    getters: {},
    actions: {
        // 修改token
        updateToken(token: string) {
            this.token = token
            localStorage.setItem('token', token)
        },
        // 修改用户基本信息
        updateUserInfo(info: any) {
            this.userInfo = info
            localStorage.setItem('userInfo', JSON.stringify(info))
        },
        removeLoginCache() {
            localStorage.clear()
            sessionStorage.clear()
            clearCookie()
        },
        // 退登
        logout() {
            localStorage.clear()
            location.reload()
        },
        // 获取用户信息
        getUserInfo() {
            getUserData()
            .then((res:any) => {
                this.userInfo = res.data
                localStorage.setItem('userInfo', JSON.stringify(res.data))
            })
        },
    }
})
export function useUserStoreHook() {
    return useUserStore(store)
}
