import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Sync = () => import("../components/sync/sync")
const MsoPic = () => import("../components/mso-pic/msoPic")
const Video = () => import("../components/video/video")

const routes = [
  {
    path: "/sync", component: Sync
  },
  {
    path:'/mso-pic', component: MsoPic
  },
  {
    path: "/video", component: Video
  }
]

const router = new VueRouter({ routes })

export default router