import { createRouter, createWebHistory } from 'vue-router'
import muiPlayer from '../pages/muiPlayer.vue'
import index from '../pages/index.vue'
import refArray from '../pages/refArray.vue'

const routes = [
  {
    path: '/mui_player',
    name: 'muiPlayer',
    component: muiPlayer,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/',
    name: '首页',
    component: index,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/ref_array',
    name: 'refArray',
    component: refArray,
    meta: {
      requireAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
