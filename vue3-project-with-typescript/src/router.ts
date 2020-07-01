import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import IndexPage from './pages/IndexPage.vue'
import ProductsPage from './pages/ProductsPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'IndexPage', component: IndexPage },
  { path: '/products', name: 'ProductsPage', component: ProductsPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
