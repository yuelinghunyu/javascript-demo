<template>
  <div class="div-main_pic">
    <template
      v-for="(item, index) in picList"
    >
      <img
        :src="item.src"
        :key="index"
        alt="pic"
      >
    </template>
    <MsoCameraShow
      :data = "picList"
    ></MsoCameraShow>
  </div>
</template>
<script>
import MsoCameraShow from './component/msoCameraShow'
export default {
  data() {
    return {
      picList: []
    }
  },
  components: {
    MsoCameraShow
  },
  created() {
    this.picList = [
      {
        src: require("../../static/images/turu1.jpg")
      },
      {
        src: require("../../static/images/turu2.jpg")
      },
      {
        src: require("../../static/images/turu3.jpg")
      },
      {
        src: require("../../static/images/turu4.jpg")
      },
      {
        src: require("../../static/images/turu5.jpg"),
      },
      {
        src: require("../../static/images/turu6.jpg")
      }
    ]
  }
}
</script>
<style scoped>
.div-main_pic{
  display: flex;
  flex-direction: column;
}
.div-main_pic>img{
  width: 100%;
}
</style>