import { createStore } from 'vuex'
import { products } from './modules/products'

export const store = createStore({
  modules: {
    products
  }
})
