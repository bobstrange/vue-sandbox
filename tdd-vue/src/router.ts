import { createRouter, createWebHistory } from 'vue-router'
import PostList from './views/PostList.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: PostList }],
})
