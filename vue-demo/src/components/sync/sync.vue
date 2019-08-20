<template>
  <div class="sync-div_box">
    <Show :show.sync='valueChild'></Show>
    <button @click="changeValue">toggle</button>
  </div>
</template>
<script>
import Show from "./show"
export default {
  data() {
    return {
      valueChild:true
    }
  },
  components: {
    Show
  },
  methods: {
    changeValue(){
      this.valueChild = !this.valueChild
    }
  }
};
</script>
<style scoped>
</style>