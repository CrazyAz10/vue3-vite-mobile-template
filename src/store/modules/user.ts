import { defineStore } from 'pinia'
import { store } from '@/store'

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
        // 退登
        logout() {
            localStorage.clear()
            location.reload()
        },
        getUserInfo() {
            
        },
    }
})
export function useUserStoreHook() {
    return useUserStore(store)
}
