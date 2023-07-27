import router from '@/router'
router.beforeEach((to: any, from, next) => {
  document.title = to.meta.title
  next()
})
