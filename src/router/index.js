import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import user from '../store/user'
import store from '../store'
import VW from './vw'

Vue.use(Router)
Vue.use(iView)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import ('@/views/index.vue')
    },
    {
      path: '/chajiandemo',
      name: 'chajianDemo',
      component: () => import ('@/views/chajian-demo/index.vue')
    },
    {
      path: '/propsdemo',
      name: 'propsDemo',
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
    },
    {
      path: '/vw',
      name: 'VW',
      component: () => import('@/vw-views/index'),
      children: VW
    }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const { userId, token } = store.getters
  // console.log('before')

  if (!userId && !token) {
    // console.log('未登录', to)
    if (to.path === '/login') { // 未登录时前往登录页可以直接跳转
      next()
      return
    }
    next({ // 未登录时前往登录页其他的页面跳转到登录页
      name: 'login'
    })
    return
  }
  if (userId && token && to.path === '/login') {
    // console.log('已经登录，不能访问登录页')
    next({...from})
    // iView.LoadingBar.finish()
    return
  }
  next()
})

// 全局后置钩子
router.afterEach(() => {
  // console.log('after')
  iView.LoadingBar.finish()
})

export default router