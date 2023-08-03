import router from '@/router'
import config from './config'
router.beforeEach((to: any, from, next) => {
  document.title = `${to.meta.title} - ${config.name}`
  next()
})
