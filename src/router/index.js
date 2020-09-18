import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    redirect: '/index',
    component: () => import('@/views/Home.vue'),
    children: [{
      path: '/index',
      name: 'Index',
      component: () => import('@/views/index/Index.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
