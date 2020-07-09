import { createStore } from 'vuex'
import { posts } from './posts'

export const store = createStore({
  modules: {
    posts
  }
})
