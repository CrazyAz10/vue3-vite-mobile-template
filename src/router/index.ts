/**
 * meta:
 *  activeMenu: 菜单激活状态比对字段
 *  isMenu: 是否是菜单路由
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const menuRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: Layout,
    children: [
      {
        path: '',
        name: 'yChatHome',
        component: () => import('@/views/index.vue'),
        meta: {
          title: '首页',
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
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/index.vue'),
    meta: {
      title: '注册',
    }
  },
]

const routes: Array<RouteRecordRaw> = [ ...conventionRoutes, ...menuRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
