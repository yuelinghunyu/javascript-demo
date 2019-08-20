import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Sync = () => import("../components/sync/sync")

const routes = [
  {
    path: "/sync", component: Sync
  }
]

const router = new VueRouter({ routes })

export default router