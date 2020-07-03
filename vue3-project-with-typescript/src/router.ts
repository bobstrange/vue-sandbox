import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import UsersPage from './pages/UsersPage.vue'
import PostsPage from './pages/PostsPage.vue'
import PostPage from './pages/PostPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: { name: 'PostsPage' } },
  { path: '/users', name: 'UsersPage', component: UsersPage },
  {
    path: '/posts',
    name: 'PostsPage',
    component: PostsPage,
    children: [
      {
        path: ':id',
        name: 'PostPage',
        component: PostPage
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
