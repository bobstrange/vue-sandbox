import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import UsersPage from './pages/UsersPage.vue'
import PostsPage from './pages/PostsPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: { name: 'PostsPage' } },
  { path: '/users', name: 'UsersPage', component: UsersPage },
  { path: '/posts', name: 'PostsPage', component: PostsPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
