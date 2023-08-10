/**
 * meta:
 *  activeMenu: 菜单激活状态比对字段
 *  isMenu: 是否是菜单路由
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import userRouter from './modules/user'

export const menuRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/index.vue'),
        meta: {
          title: '首页',
          // activeMenu: '/',
          isMenu: true
        }
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/views/test/index.vue'),
        meta: {
          title: '测试页',
          // activeMenu: '/',
          isMenu: true
        }
      }
    ]
  },
]

const conventionRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      needToken: false
    }
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('@/views/register/index.vue'),
    meta: {
      title: '注册',
    }
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: () => import('@/views/forgotPassword/index.vue'),
    meta: {
      title: '忘记密码',
    }
  },
  ...userRouter
  
]

const routes: Array<RouteRecordRaw> = [ ...conventionRoutes, ...menuRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
