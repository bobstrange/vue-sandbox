import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPostsStore, PostsStoreKey } from '@/store/posts'
import './assets/styles/index.css'

const app = createApp(App)
app.provide(PostsStoreKey, createPostsStore())
app.use(router)
app.mount('#app')
