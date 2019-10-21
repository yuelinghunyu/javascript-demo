<template>
  <div
    class="custom-video_container"
    @mouseover="handlehover($event, 'start')"
    @mouseout="handlehover($event, 'end')"
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
      v-if="videoState.play"
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
        v-show="!videoState.hideControl || !videoState.play"
      >
        <!-- 进度条 -->
        <div
          class="custom-video_control-bg"
          @mousedown="handlePrograssDown"
          @mousemove.stop="handlePrograssMove"
          @mouseup="handlePrograssUp"
        >
          <div 
            class="custom-video_control-bg-outside"
            ref="custom-video_control-bg-outside"
          >
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
        <!-- 声音 -->
        <div
          class="custom-video_control-voice"
        >
          <span
            class="custom-video_control-voice-play iconfont icon-shengyin"
          ></span>
        </div>
        <!-- 时间 -->
        <div
          class="custom-video_control-time"
        >
          <span>{{currentTime ? currentTime : "00:00"}}</span>
           / 
          <span>{{duration ? duration : "00:00"}}</span>
        </div>
        <!-- 全屏缩放 -->
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
        src: require("../../static/media/taru.mp4"), //视频
        poster: require("../../static/images/poster.jpg"), // 初始化占位图片
      },
      videoState: {
        play: false, //播放状态
        hideControl: false, // 控制栏状态
        distance: 0, // 移动的距离
        startX: 0, // 初始鼠标点击的x距离
      },
      processName: ["custom-video_control-bg", "custom-video_control-bg-outside", "custom-video_control-bg-inside", "custom-video_control-bg-inside-point"],
      videoDom: null, // video
      videoProOut: null, // 总进度条
      videoPro: null, // 进度条
      videoPoi: null, // 进度点
      duration: 0, // 总时长
      currentTime: 0, // 当前播放时长
      processWidth: 0, // 进度条总长度
      leftInit: 0, // 当前进度初始偏移量
    }
  },
  mounted() {
    // 初始化相关元数据
    this.videoDom = this.$refs["custom-video"]
    this.videoProOut = this.$refs['custom-video_control-bg-outside']
    this.videoPro = this.$refs['custom-video_control-bg-inside']
    this.videoPoi = this.$refs['custom-video_control-bg-inside-point']
    this.processWidth = this.videoProOut.clientWidth
    this.leftInit = this.getOffset(this.videoProOut).left
    this.initMedaData()
  },
  methods: {
    initMedaData() { // 初始化video相关事件
      this.videoDom.addEventListener('loadedmetadata', () => { // 获取视频总时长
        this.duration = this.timeTranslate(this.videoDom.duration)
      })
      this.videoDom.addEventListener("click", () => { // 点击视频区域可以进行播放或者暂停
        if(this.videoDom.paused || this.videoDom.ended) {
            if(this.videoDom.ended) {
                this.videoDom.currentTime = 0
            }
            this.videoState.play = true
            this.videoDom.play()
        } else {
            this.videoDom.pause()
            this.videoState.play = false
        }
      })
      this.videoDom.addEventListener("timeupdate", () => { // 监听视频播放过程中的时间
        const percentage = 100 * this.videoDom.currentTime / this.videoDom.duration
        this.videoPro.style.width = percentage + '%'
        this.videoPoi.style.left = percentage + '%'
        this.currentTime = this.timeTranslate(this.videoDom.currentTime)
      })
      this.videoDom.addEventListener("ended", () => { // 监听结束播放事件
        this.videoPro.style.width = 0
        this.videoPoi.style.left = 0
        this.currentTime = 0
        this.videoState.play = false
        this.videoState.hideControl = false
      })
    },
    play() { // 播放按钮事件
      this.videoState.play = true
      this.videoDom.play()
    },
    pause() { // 暂停按钮事件
      this.videoDom.pause()
      this.videoState.play = false
    },
    handlePrograssDown(ev) { // 监听点击进度条事件，方便获取初始点击的位置
      // 视频暂停
      this.pause()
      this.videoState.startX = ev.clientX
      this.videoState.distance = this.videoState.startX - this.leftInit
      // 进度条距离、点的位置
      this.videoPro.style.width = this.videoState.distance + 'px'
      this.videoPoi.style.left = this.videoState.distance + 'px'
    },
    handlePrograssMove(ev) { // 监听移动进度条事件，同步播放相关事件
      // console.log("移动")
    },
    handlePrograssUp(ev) { //松开鼠标，播放当前进度条视频
      // 视频播放
      this.videoDom.currentTime = this.videoState.distance / this.processWidth * this.videoDom.duration
      this.currentTime = this.timeTranslate(this.videoDom.currentTime)
      this.play()
    },
    handlehover(ev, flag) { // 监听离开或者进入视频区域隐藏或者展示控制栏
      const className = ev.target.className
      if(this.processName.includes(className)) {
        this.videoState.hideControl = false
      } else {
        console.log(flag)
        switch(flag) {
          case 'start': this.videoState.hideControl = false;  break;
          case 'end': this.videoState.hideControl = true;  break;
        }
      }
    },
    timeTranslate(t) { // 时间转化
      let m = Math.floor(t / 60)
      m < 10 && (m = '0' + m)
      return m + ":" + (t % 60 / 100 ).toFixed(2).slice(-2)
    },
    getOffset(node, offset) { // 获取当前屏幕下进度条的左偏移量和又偏移量
      if(!offset) {
        offset = {}
        offset.left = 0
        offset.top = 0
      }
      if(node === document.body) {
        return offset
      }
      offset.top += node.offsetTop
      offset.left += node.offsetLeft
      return this.getOffset(node.offsetParent, offset)
    }
  }
}
</script>
<style scoped>
/* 总容器 */
.custom-video_container{
  width: 500px;
  height: 300px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
/* 视频标签 */
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
/* 暂停隐藏 */
.custom-video_play-pause{
  display: none;
}
/* hover 显示 */
.custom-video_container:hover > .custom-video_play-pause{
  display: inline-block;
}
/* hover 播放按钮动画 */
.custom-video_play:hover{
  box-shadow: 0 0 10px #5A4180;
  transition: all 0.4s;
}
/* 控制栏 */
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
/* 控制栏进度条 */
.custom-video_control-bg{
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
}
/* 控制栏进度条 —— 总长度 */
.custom-video_control-bg-outside{
  width: 100%;
  height: 5px;
  border-radius: 2.5px;
  background-color: #aaa;
  position: relative;
  cursor: pointer;
}
/* 控制栏进度条 —— 播放长度 */
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
/* 控制栏进度条 —— 播放点 */
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
/* 控制栏 —— 声音、时间、全屏缩放 */
.custom-video_control-voice,
.custom-video_control-time,
.custom-video_control-full{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.custom-video_control-time{
  font-size: 12px;
}
.custom-video_control-voice,
.custom-video_control-full{
  width: 30px;
  height: 30px;
  cursor: pointer;
}
/* 控制栏隐藏动画 */
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