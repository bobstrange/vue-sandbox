import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import IndexPage from './pages/IndexPage.vue'
import UsersPage from './pages/UsersPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'IndexPage', component: IndexPage },
  { path: '/users', name: 'UsersPage', component: UsersPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
