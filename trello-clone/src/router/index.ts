import Vue from 'vue'
import VueRouter from 'vue-router'
import BoardPage from '../views/BoardPage.vue'
import TaskPage from '../views/TaskPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BoardPage',
    component: BoardPage,
    children: [
      {
        path: 'tasks/:id',
        name: 'Task',
        component: TaskPage
      }
    ],
  },
  {
    path: '*',
    component: NotFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
