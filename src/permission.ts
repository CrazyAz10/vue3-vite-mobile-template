import router from '@/router'
import config from './config'
import { useUserStoreHook } from '@/store/modules/user'
router.beforeEach((to: any, from, next) => {
  // 登录状态不可进入的页面
  const loginWhiteList = ['/login', '/register']
  // const tokenWhiteList = ['/user', '/register', '/forgotPassword']
  if (useUserStoreHook().token) {
    if (loginWhiteList.includes(to.path)) {
      next({
        path: '/'
      })
      return
    }
  } else {
    // 登录授权访问页面 无token 跳转首页
    if (to.meta.loginAuth) {
      next({
        path: '/'
      })
      return
    }
  }
  document.title = `${to.meta.title} - ${config.name}`
  next()
})
