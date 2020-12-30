import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/events/:id',
    name: 'EventDetails',
    props: true,
    component: () =>
      import(/* webpackChunkName: "events" */ '../views/EventDetails.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
