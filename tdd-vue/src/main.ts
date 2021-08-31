import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'
import PostList from './views/PostList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: PostList }],
})

createApp(App).use(router).mount('#app')
