const userRouter = [
    {
        path: '/user',
        name: 'UserPage',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '用户',
        },
      },
      {
        path: '/userSetting',
        name: 'UserSetting',
        component: () => import('@/views/user/userSetting/index.vue'),
        meta: {
          title: '用户设置',
          loginAuth: true // 登录权限访问
        },
      },
      {
        path: '/userComments',
        name: 'UserComments',
        component: () => import('@/views/user/userComments/index.vue'),
        meta: {
          title: '我的评论',
          loginAuth: true // 登录权限访问
        },
      }
]
export default userRouter