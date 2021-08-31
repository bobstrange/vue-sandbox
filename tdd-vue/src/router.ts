import { createRouter, createWebHistory } from 'vue-router'
import PostList from './views/PostList.vue'
import PostDetail from './views/PostDetail.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: PostList },
    { path: '/posts/:id', name: 'PostDetail', component: PostDetail },
  ],
})
