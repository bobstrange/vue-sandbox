import { Getters, Mutations, Actions } from 'vuex'
import { S, G, M, A } from './type'

export const state = (): S => ({
  posts: []
})

export const getters: Getters<S, G> = {
  posts(state, getters, rootState, rootGetters) {
    return state.posts
  },
  postById(state, getters, rootState, rootGetters) {
    return id => {
      return state.posts.find(post => post.id === id)
    }
  }
}

export const mutations: Mutations<S, M> = {
  UPDATE_POSTS(state, payload) {
    state.posts = payload
  }
}

export const actions: Actions<S, A, G, M> = {
  UPDATE_POSTS({ commit }, payload) {
    commit('UPDATE_POSTS', payload)
  }
}
