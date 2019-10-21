import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import "./static/fonts/iconfont.css"

// runtime 模式
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// compiler 模式
// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: "<App/>"
// })
