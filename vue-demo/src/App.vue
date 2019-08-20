<template>
  <div id="app">
    <Common/>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Common from './components/common.vue'

export default {
  name: 'app',
  components: {
    Common
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
