import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import ('@/views/chajian-demo/index.vue')
    },
    {
      path: '/propsDemo',
      name: 'index',
      component: () => import ('@/views/props-demo/index.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import ('@/views/vuex/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ('@/views/login')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import ('@/views/video/index.vue')
    }
  ]
})

export default router