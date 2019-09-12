import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Sync = () => import("../components/sync/sync")
const MsoPic = () => import("../components/mso-pic/msoPic")

const routes = [
  {
    path: "/sync", component: Sync
  },
  {
    path:'/mso-pic', component: MsoPic
  }
]

const router = new VueRouter({ routes })

export default router