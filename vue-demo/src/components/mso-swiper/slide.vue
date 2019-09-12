<template>
  <div 
    class="mso-swiper_slide"
  >
    <slot />
  </div>
</template>
<style scoped>
.mso-swiper_slide{
  width: 100%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  z-index: 10;
  min-height:  100px
}
.mso-swiper_slide img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>