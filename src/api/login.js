import axios from '../utils/axios'

/**
 * 登录
 */
export function login ({ username, password, captcha }) {
  return axios({
    url: '/admin/auth/login/index',
    method: 'post',
    data: { 
      userName: username,
      pwd: password,
      captcha: captcha
    }
  })
}

// 退出登录
export function loginOut (uid, token) {
  return axios({
    url: '/admin/auth/login/out',
    method: 'post',
    data: {
      uid,
      token
    }
  })
}

// 获取用户信息
export function userInfo (id, token) {
  return axios({
    url: '/admin/auth/login/userInfo',
    method: 'get',
    params: {
      id,
      token
    }
  })
}