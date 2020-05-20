import Vue from 'vue'
import router from './router'
import App from './App.vue'
// import toast from './views/chajian-demo/toast'
import store from '@/store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/style/index.less'

Vue.use(iView)

// Vue.use(toast, {
//   duration: 2500
// })

Vue.config.productionTip = false
Vue.directive('demo-directive', {
  
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// Git rebase 测试
// 测试1
