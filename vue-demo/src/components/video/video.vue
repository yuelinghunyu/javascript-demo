<template>
  <div
    class="custom-video_container"
    @mouseover="handlehover('start')"
    @mouseout="handlehover('end')"
  >
    <video
      class="custom-video_video"
      ref="custom-video"
      :poster="videoOption.poster"
    >
      <source :src="videoOption.src" type="video/mp4">
      <p>设备不支持</p>
    </video>
    <span
      v-if="videoOption.play"
      class="custom-video_play custom-video_play-pause iconfont icon-zanting"
      @click="pause"
    >
    </span>
    <span
      v-else
      class="custom-video_play custom-video_play-play iconfont icon-bofang"
      @click="play"
    >
    </span>
    <!-- 控制区域背景 -->
    <transition
      name="fade"
    >
      <div
        class="custom-video_control"
        v-show="!videoOption.hideControl || !videoOption.play"
      >
        <!-- 进度条 -->
        <div
          class="custom-video_control-bg"
        >
          <div class="custom-video_control-bg-outside">
            <span 
              class="custom-video_control-bg-inside"
              ref="custom-video_control-bg-inside"
            ></span>
            <span 
              class="custom-video_control-bg-inside-point"
              ref="custom-video_control-bg-inside-point"
            ></span>
          </div>
        </div>
        <!-- 时间 -->
        <div
          class="custom-video_control-time"
        >
          <span>{{currentTime ? currentTime : "00:00"}}</span>
           / 
          <span>{{duration}}</span>
        </div>
        <span
          class="custom-video_control-full iconfont icon-quanping"
        ></span>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoOption: {
        src: require("../../static/media/taru.mp4"),
        poster: require("../../static/images/poster.jpg"),
        play: false,
        hideControl: false
      },
      videoDom: null,
      videoPro: null,
      videoPoi: null,
      duration: 0,
      currentTime: 0,
    }
  },
  mounted() {
    this.videoDom = this.$refs["custom-video"]
    this.videoPro = this.$refs['custom-video_control-bg-inside']
    this.videoPoi = this.$refs['custom-video_control-bg-inside-point']
    this.initMedaData()
  },
  methods: {
    play() {
      this.videoOption.play = true
      this.videoDom.play()
    },
    pause() {
      this.videoDom.pause()
      this.videoOption.play = false
    },
    initMedaData() {
      this.videoDom.addEventListener('loadedmetadata', () => {
        this.duration = this.timeTranslate(this.videoDom.duration)
      })
      this.videoDom.addEventListener("click", () => {
        if(this.videoDom.paused || this.videoDom.ended) {
            if(this.videoDom.ended) {
                this.videoDom.currentTime = 0
            }
            this.videoOption.play = true
            this.videoDom.play()
        } else {
            this.videoDom.pause()
            this.videoOption.play = false
        }
      })
      this.videoDom.addEventListener("play", () => {

      })
      this.videoDom.addEventListener("timeupdate", () => {
        const percentage = 100 * this.videoDom.currentTime / this.videoDom.duration
        this.videoPro.style.width = percentage + '%'
        this.videoPoi.style.left = percentage - 1 + '%'
        this.currentTime = this.timeTranslate(this.videoDom.currentTime)
      })
      this.videoDom.addEventListener("ended", () => {
        this.videoPro.style.width = 0
        this.videoPoi.style.left = 0
        this.currentTime = 0
        this.videoOption.play = false
        this.videoOption.hideControl = false
      })
    },
    timeTranslate(t) {
      let m = Math.floor(t / 60)
      m < 10 && (m = '0' + m)
      return m + ":" + (t % 60 / 100 ).toFixed(2).slice(-2)
    },
    handlehover(flag) {
      switch(flag) {
        case 'start': this.videoOption.hideControl = false;  break;
        case 'end': this.videoOption.hideControl = true;  break;
      }
    }
  }
}
</script>
<style scoped>
.custom-video_container{
  width: 500px;
  height: 300px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.custom-video_video{
  width: 500px;
  height: 300px;
  object-fit: fill;
}
/* 暂停 或者 播放 */
.custom-video_play{
  display: inline-block;
  position: absolute;
  right: 50px;
  bottom: 50px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 30px;
  color: cornflowerblue;
}
.custom-video_play-pause{
  display: none;
}
.custom-video_container:hover > .custom-video_play-pause{
  display: inline-block;
}
.custom-video_play:hover{
  box-shadow: 0 0 10px #5A4180;
  transition: all 0.4s;
}

.custom-video_control{
  position: absolute;
  width: 100%;
  height: 50px;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .55);
  display: flex;
  flex-direction: row;
  align-items: center;
}
.custom-video_control-bg-outside{
  width: 90%;
  height: 5px;
  border-radius: 2.5px;
  background-color: #aaa;
  position: relative;
  cursor: pointer;
}
.custom-video_control-bg-inside{
  position: absolute;
  display: inline-block;
  width: 0;
  height: 100%;
  border-radius: 2.5px;
  left: 0;
  top: 0;
  background-color: #fff;
}
.custom-video_control-bg-inside-point{
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: -2.5px;
  left: 0;
}
.custom-video_control-bg{
  flex: 1;
  display: flex;
  justify-content: center;
}
.custom-video_control-time, .custom-video_control-full{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.custom-video_control-time{
  font-size: 12px;
}
.custom-video_control-full{
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
</style>