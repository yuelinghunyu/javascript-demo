<template>
  <section 
    class="mso-swiper_section"
    @touchmove="fn"
  >
    <div 
      class="mso-swiper_wrapper"
      :class="className"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
    >
      <slot/>
    </div>
    <div
      v-if="showDot"
      class="mso-swiper_dot"
    >
      <i 
        class="mso-swiper_dot-item"
        v-for="(dot, $dotIndex) in slidesSize"
        :key="$dotIndex"
      ></i>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    autoPlay: {
      default: true
    },
    duration: {
      default: 500
    },
    interval: {
      default: 2500
    },
    showDot: {
      default: true
    }
  },
  data() {
    return {
      slidesSize: 0,
      slideing: true,
      index: 1,
      _width: 0,
      auto: true,
      timer: null,
      className: '',
      dom: {}, //存储x轴动画状态
      t: { // 手指触发的坐标记录
        sx: 0,
        s: 0,
        m: 0,
        e: 0
      }
    }
  },
  mounted() {
    this.className = `mso-swiper_wrapper-${Math.random().toFixed(3) * 1000}`
    this.$nextTick(() => {
      this.startDom()
      this.dom.transform = `translate3d(${this._width * -1}px, 0px, 0px)`
      this.dom['-webkit-transform'] = `translate3d(${this._width * -1}px, 0px, 0px)`
      this.dom['-ms-transform'] = `translate3d(${this._width * -1}px, 0px, 0px)`
      if(this.autoPlay) {
        this.setTime()
      }
    })
  },
  methods: {
    fn(e) {
      e.preventDefault()
    },
    start(e) {
      if (this.slideing) {
        this.clearTimeOut()
        this.t.sx = this.getTransform() // 上次的开始位置
        this.t.s = e.touches[e.touches.length - 1].clientX
      }
    },
    move(e) {
      if(this.slideing && this.t.s !== -1) {
        this.clearTimeOut()
        this.t.m = e.touches[e.touches.length - 1].clientX - this.t.s // 移动过的位置
        this.setTransform(this.t.m + this.t.sx)
      }
    },
    end(e) {
      if(this.slideing && this.t.s !== -1) {
        this.clearTimeOut()
        this.setTransform(this.t.m + this.t.sx)
        let x = this.getTransform()
        x += this.t.m > 0 ? this._width * 0.3 : this._width * -0.3
        this.index = Math.round(x / this._width) * -1
        this.swiper('touch')
      }
    },
    setTransform(num) {
      // console.log(this.dom)
      this.dom.transform = `translate3d(${num}px, 0px, 0px)`
      this.dom['-webkit-transform'] = `translate3d(${num}px, 0px, 0px)`
      this.dom['-ms-transform'] = `translate3d(${num}px, 0px, 0px)`
    },
    getTransform() {
      let x = this.dom.transform || this.dom['-webkit-transform'] || this.dom['-ms-transform']
      x = x.substring(12) // 从translate3d后算起
      x = x.match(/(\S*)px/)[1]
      console.log(x)
      return Number(x)
    },
    swiper(type) {
      this.slideing = false
      this.dom.transition = type === 'touch' ? '250ms' : this.duration + 'ms'
      this.setTransform(this.index * -1 * this._width)
      this.t.m = 0
      this.t.s = -1
      if(this.autoPlay) {
        this.setTime()
      }
      let timeDuration = type === 'touch' ? '250' : this.duration
      setTimeout(() => {
        this.dom.transition = '0s'
        if(this.index >= this.slidesSize + 1) {
          this.index = 1
          this.setTransform(this.index * -1 * this._width)
        }
        if(this.index <= 0) {
          this.index = this.slidesSize
          this.setTransform(this.index * -1 * this._width)
        }
        this.auto = true
        this.slideing = true
      }, timeDuration)
    },
    setTime() {
      this.timer = window.setTimeout(() => {
        if(this.auto) {
          this.index ++
          this.swiper()
        } else {
          window.clearTimeout(this.timer)
        }
      }, this.interval)
    },
    startDom() {
      console.log(document.querySelector('.' + this.className))
      let slideDom = document.querySelector('.' + this.className).getElementsByClassName("mso-swiper_slide")
      this.slidesSize = slideDom.length
      if(this.slidesSize > 1) {
        // 前后克隆dom,无缝衔接
        let clone_dom_1 = slideDom[0].cloneNode(true) // 向后append
        let clone_dom_2 = slideDom[this.slidesSize - 1].cloneNode(true) // 向最前append
        document.querySelector('.' + this.className).insertBefore(clone_dom_2, slideDom[0])
        document.querySelector('.' + this.className).appendChild(clone_dom_1)
        this._width = document.querySelector('.' + this.className).offsetWidth
        console.log(this._width)
        this.dom = document.querySelector('.' + this.className).style
      }
    },
    clearTimeOut() {
      this.auto = false
      window.clearTimeout(this.timer)
    },
    // 手动操作
    prevSlide() {
      this.clearTimeOut()
      this.index --
      this.swiper()
    },
    nextSilde() {
      this.clearTimeOut()
      this.index ++
      this.swiper()
    },
    slideTo(index) {
      this.clearTimeOut()
      this.index = index + 1
      this.swiper()
    }
  }
}
</script>
<style scoped>
.mso-swiper_section {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.mso-swiper_wrapper{
  display: flex;
  transition-duration: 0s linear;
}
.mso-swiper_dot{
  position: absolute;
  bottom: 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: 0 0;
}
</style>