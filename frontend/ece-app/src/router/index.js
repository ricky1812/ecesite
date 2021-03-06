import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Faculty from '@/components/Faculty'
import Notice from '@/components/Notice'
import Member from '@/components/Member'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/faculty',
    name:'Faculty',
    component: Faculty
  },
  {
    path:'/notice',
    name:'Notice',
    component: Notice
  },
  {
    path:'/member',
    name:'Member',
    component: Member
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
