import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { client } from '../lib/api/client'
import { Post } from '../types'

type State = {
  posts: Post[]
}

export const store = createStore<State>({
  state: {
    posts: [],
  },
  getters: {
    getPosts(state) {
      return state.posts
    },
    getPostById(state) {
      return (id: number) => {
        return state.posts.find((post) => post.id === id)
      }
    },
  },
  mutations: {
    save(state, { posts }: { posts: Post[] }) {
      state.posts = posts
    },
  },
  actions: {
    async fetchAll({ commit }) {
      try {
        const response = await client.get<Post[]>('/posts')
        const posts = response.data
        commit('save', { posts })
      } catch (e) {
        console.error(e)
      }
    },
  },
})

const key: InjectionKey<Store<State>> = Symbol()
export const useStore = () => baseUseStore(key)
