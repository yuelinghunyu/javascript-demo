import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Sync = () => import("../components/sync/sync")
const MsoPic = () => import("../components/mso-pic/msoPic")
const Video = () => import("../components/video/video")
const Focus = () => import("../components/focus/focus")

const routes = [
  {
    path: "/sync", component: Sync
  },
  {
    path:'/mso-pic', component: MsoPic
  },
  {
    path: "/video", component: Video
  },
  {
    path: "/focus", component: Focus
  }
]

const router = new VueRouter({ routes })

export default router