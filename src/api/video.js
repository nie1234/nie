import axios from '../utils/axios'

// 获取播放凭证

export function getPlayAuth (videoId) {
  return axios({
    baseURL: '//dev-api-vrs.chejieren.net',
    url: '/admin/video/play/playAuth',
    method: 'post',
    data: {
      video_id: videoId
    }
  })
}