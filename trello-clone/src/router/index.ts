import Vue from 'vue'
import VueRouter from 'vue-router'
import BoardPage from '../views/BoardPage.vue'
import TaskPage from '../views/TaskPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BoardPage',
    component: BoardPage,
    children: [
      {
        path: 'task/:id',
        name: 'Task',
        component: TaskPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
