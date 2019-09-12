<template>
  <div 
    class="show-div_box"
    v-if="show"
  >
      <p>默认初始值是{{show}}，所以是显示的</p>
      <button @click.stop="closeDiv">关闭</button>
  </div>
</template>
<script>
export default {
  props: ["show"],
  methods: {
    closeDiv() {
      // this.show = false
      this.$emit("update:show", false);
    }
  }
}
</script>
<style scoped>
.show-div_box{
  padding: 30px 20px 30px 5px;
  border:1px solid #ddd;
  margin-bottom: 10px;
}
</style>