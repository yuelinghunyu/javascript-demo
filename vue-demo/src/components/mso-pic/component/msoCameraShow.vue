<template>
  <div class="mso-camera_show">
    <Swiper 
      ref="swiper"
      v-if="data.length"
    >
      <Slide
        v-for="(item, index) in data"
        :key="index"
      >
        <img :src="item.src" alt="">
      </Slide>
    </Swiper>
  </div>
</template>
<script>
import {Swiper, Slide } from '../../../components/mso-swiper'
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  components: {
    Swiper,
    Slide
  }
}
</script>
<style scoped>
  .mso-camera_show{
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    filter: alpha(opacity=80);
    opacity: 0.8;
    overflow: hidden;
    background-color: #000;
  }
</style>