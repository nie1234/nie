import axios from 'axios'
import { Message } from 'iview'
import store from '../store'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE, // 根路径
  timeout: 5000, // 请求超时时间
  withCredentials: true // 跨域
})

// 请求拦截
service.interceptors.request.use(
  config => {
    if (store.getters.userId && store.geeters.token) {
      // 登录后会获得到对应的ID和token 作为头部传递
      config.headers['X-Adminid'] = store.getters.userId
      config.headers['X-Token'] = store.getters.token
    }
    return config
  },
  err => {
    Promise.reject(err)
  }
)

// respone 拦截器 请求结果拦截
service.interceptors.response.use(
  response => {
    // 请求正常返回
    const data = response.data
    if (data.code && data.code === 2) { // 用户的身份信息失效code === 2
      // 清除cookie
      store.dispatch('fedLogout').then(() => {
        Message.error('登录失效，请重新登录')
      })
    }
    return data
  },
  err => {
    // 错误返回
    return Promise.reject(err)
  }
)
export default service