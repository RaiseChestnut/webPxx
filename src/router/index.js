import Vue from "vue";
import VueRouter from 'vue-router'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/home/hot'
  },
  {
    path: '/home/:type',
    component: () => import('views/home/Home')
  },
  {
    path: '/follow',
    component: () => import('views/follow/Follow')
  },
  {
    path: '/sort',
    component: () => import('views/sort/Sort')
  },
  {
    path: '/chat',
    component: () => import('views/chat/Chat')
  },
  {
    path: '/me',
    component: () => import('views/me/Me')
  },
  {
    path: '/search',
    component: () => import('views/search/Search')
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router