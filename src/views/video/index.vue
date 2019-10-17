<template>
  <div class="video-container">
    <div id="player-con" class="video-box"></div>
    <div>会计法克拉克森<br/>看看大姐夫<br/>科技离开的减肥<br/>了肯德基了的咖啡机的<br/>咖啡机打飞机了肯德基反垄断法接待来访设计费反间谍法坚实的法律</div>
  </div>
</template>
<script>
import AliPlayerComponent from 'AliPlayerComponent'
import Aliplayer from 'Aliplayer'
import { getPlayAuth } from '@/api/video'
export default {
  data () {
    return {
      endPreviewTemplate: '<div>ddd</div>',
      coverUrl: '',
      videoId: '',
      playAuth: '',
      showTip: false,
      firstFullscreen: true,
      videoShow: true
    }
  },
  created () {
    const videoId = '00c9fc51d5ca4b7a811687da7dc2cff9'
    getPlayAuth(videoId).then(res => {
      if (res.code !== 0) {
        this.message.error(res.message)
        return
      }
      this.coverUrl = res.data.VideoMeta.CoverURL
      this.videoId = res.data.VideoMeta.VideoId
      this.playAuth = res.data.PlayAuth
      this.initPlayer()
    })
  },
  methods: {
    initPlayer () {
      const _this = this
      new Aliplayer({
        id: "player-con",
        cover: this.coverUrl,
        vid: this.videoId,
        playauth: this.playAuth,
        width: "100%",
        height: "100%",
        autoplay: false,
        isLive: false,
        rePlay: false, // 播放器自动循环播放。
        playsinline: true, // H5是否内置播放，有的Android浏览器不起作用。
        preload: true, // 播放器自动加载，目前仅h5可用。
        useH5Prism: true, // 	指定使用H5播放器。
        // x5_type: 'h5',
        // x5_fullscreen: true,
        // x5_video_position: 'top',
        skinLayout: [
          { name: "bigPlayButton", align: "blabs", x: 30, y: 80 },
          { name: "H5Loading", align: "cc" },
          { name: "errorDisplay", align: "tlabs", x: 0, y: 0 },
          { name: "infoDisplay" },
          { name:"tooltip", align:"blabs",x: 0, y: 56 },
          { name: "thumbnail" },
          {
            name: "controlBar", align: "blabs", x: 0, y: 0,
            children: [
              { name: "progress", align: "blabs", x: 0, y: 44 },
              { name: "playButton", align: "tl", x: 15, y: 12 }
            ]
          }
        ],
        components: [{
          name: 'PreviewVodComponent',
          type: AliPlayerComponent.PreviewVodComponent,
          args: [2, '<div class="tip-box"><div class="tip-btnImage"></div><div class="tip-text">观看完整视频，请点击下载</div></div>', `<a href="https://www.aliyun.com/product/vod" class="vip-join">开通会员</a> 观看完整视频`]
        }]
        }, function (player) {
          // console.log("The player is created", player);

          // player.on('cancelFullScreen',(e)=>{
          //   let $video = (_this.player.el()).querySelector('video')
          //   console.log('cancelFullScreen', $video)
          //   alert('cancelFullScreen')
          //   $video.removeClass('center')
          // })


          player.on('timeupdate', () => {
            let time = player.getCurrentTime()
            if (time >= 2) {
              _this.videoShow = false
              document.querySelector('video').style.display = 'none'
              // document.querySelector('.preview-custom').innerHTML = '<p>test!</p>'
              // let div = document.createElement('div')
              // div.className = 'android-tip-box'
              // div.style.zIndex = 10000 
              // div.innerHTML = '<div class="tip-box"><div class="tip-btnImage"></div><div class="tip-text">观看完整视频，请点击下载</div></div>'
              // document.querySelector('#player-con').appendChild(div)
              player.off('timeupdate')
            }
            // console.log(player.getCurrentTime())
          })
          /* You can register a click event with the custom DOM string to trigger an action, for example, to pop up a dialog box for VIP registration. */
          // var vip_limit_btn = document.querySelector('.vip_limit_btn')
          // vip_limit_btn.addEventListener('click', function() {
          //   confirm('确认开通会员吗?')
          // })

          // var close_btn = document.querySelector('.vip_limit_close_btn')
          // close_btn.addEventListener('click', function() {
          //   /* Call the closePreviewLayer method to close the dialog box */
          //   player.getComponent('PreviewVodComponent').closePreviewLayer()
          // })
        }
      )
    }
  } 
}
</script>

<style lang="less">
.video-container {
  position: relative;
  #player-con {
    height: 400px !important;
    .prism-big-play-btn {
      background: url('../../assets/video-btn.png') no-repeat center/100%;
      width: 68px;height: 85px;left: 50% !important;top: 50%;
      transform: translate(-50%, -50%);
      .outter {
        border: none;
      }
    }
    .android-tip-box {
      width: 100%;height: 100%;position: absolute;
    }

    video.center {
      object-position:50% 50% !important;
    }
  }
  .tip-box {
    position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);
    width: 100%;text-align: center;font-size: 26px;font-weight: 500;
    .tip-btnImage {
      width: 68px;height: 85px;display: inline-block;
      background: url('../../assets/video-btn.png') no-repeat center/100%;
    }
    .tip-text {
      margin-top: 42px;
    }
  }
  .tip-box2 {
    width: 100%;height: 400px;
    position: relative;
    img {
      width: 100%;height: 100%;
    }
  }
}
.vip-join {
  color: #00c1de;
}

.vip_limit_content {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.vip_limit_content .title {
  font-size: 18px;
  line-height: 36px;
  color: #fff;
  text-align: center;
  width: 100%;
}

.vip_limit_button_box {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}

.vip_limit_btn {
  display: inline-block;
  min-width: 100px;
  position: relative;
  background: #f60;
  padding: 0 35px;
  margin: 0px 5px 20px 5px;
  border-radius: 38px;
  font-size: 18px;
  line-height: 38px;
  color: #623A0C;
  text-align: center;
  background-image: linear-gradient(-135deg, #FBE8A8 0%, #F8E7AC 15%, #E2C078 100%);
  cursor: pointer;
}

.vip_limit_close {
  text-align: center;
}
.vip_limit_close span {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 36px;
  background: rgba(165, 165, 165, 0.54);
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
}
</style>