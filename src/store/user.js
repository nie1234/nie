import Cookies from 'js-cookie'
import { login, loginout, userInfo } from '@/api/login'
import { Message } from 'iview';
import * as types from './mutation-types'

const user = {
  state: {
    token: Cookies.get('token'),
    userName: Cookies.get('user_name'),
    userId: Cookies.get('user_id'),
    authRules: Cookies.get('auth_rules'),
    routers: Cookies.get('routers'),
    realName: Cookies.get('real_name')
  },
  getters: {
    token: state => state.token,
    userName: state => state.userName,
    userId: state => state.userId,
    authRules: state => state.authRules,
    routers: state => state.routers,
    realName: state => state.realName
  },
  actions: {
    // 登录
    login ({ commit }, account) {
      return login(account).then(res => {
        const { code, data } = res
        if (code === 0) {
          commit(types.SET_USER_ID, data.id) // 用户的ID
          commit(types.SET_USER_TOKEN, data.token) // 用户的token
          commit(types.SET_USER_AUTH_RULES, []) // 用户的规则数组
          return res
        } else {
          Message({
            message: res.message,
            type: 'error'
          })
        }
      })
    },
    // 登出
    loginOut ({ commit, state }) {
      return loginout(state.userId, state.token).then(res => {
        if (res.code === 0) {
          commit(types.SET_USER_ID, '')
          commit(types.SET_USER_TOKEN, '')
          commit(types.SET_USER_AUTH_RULES, [])
          return res
        }
        Message({
          message: res.message,
          type: 'error'
        })        
      })
    },
    // 获取用户信息
    userInfo ({ commit }) {
      return userInfo().then(res => {
        const data = res.data || {}
        commit(types.SET_USER_NAME, data.username)
        commit(types.SET_USER_AUTH_RULES, data.authRules)
        commit(types.SET_USER_REAL_NAME, data.real_name)
      })
    },
    // 用户信息校验失败后，登出 清空cookies
    fedLogout ({ commit }) {
      return new Promise(res => {
        commit(types.SET_USER_ID, '')
        commit(types.SET_USER_TOKEN, '')
        commit(types.SET_USER_AUTH_RULES, [])
        res()
      })
    }
  },
  mutations: {
    [types.SET_USER_ID] (state, userId) {
      state.userId = userId
      if (userId === '') {
        Cookies.remove(userId)
      } else {
        Cookies.set(userId)
      }  
    },
    [types.SET_USER_TOKEN] (state, token) {
      state.token = token
      if (token === '') {
        Cookies.remove(token)
      } else {
        Cookies.set(token)
      }  
    },
    [types.SET_USER_AUTH_RULES] (state, authRules) {
      state.authRules = authRules
    },
    [types.SET_USER_NAME] (state, username) {
      state.username = username
    },
    [types.SET_USER_REAL_NAME] (state, realName) {
      state.realName = realName
    }
  }
}

export default user