import Vue from 'vue'
import router from './router'
import App from './App.vue'
import '@/style/index.less'
import toast from './views/chajian-demo/toast'
import store from '@/store'

Vue.use(toast, {
  duration: 2500
})

Vue.config.productionTip = false
Vue.directive('demo-directive', {
  
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
