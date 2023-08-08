import clickOutside from '@/directives/click-outside'
// import lazyLoad from '@/directives/lazyLoad'
import copy from './copy'
const directives: any = {
  copy,
  clickOutside,
  // lazyLoad
}
export default {
  install(Vue: any) {
    Object.keys(directives).forEach((key) => {
      // 注册所有自定义指令
      Vue.directive(key, directives[key])
    })
  }
}
