import Vue from 'vue'
import Vuex from 'vuex'

import { User } from '@/model/User'
import { fakeUsers } from '@/util/fake_users'

Vue.use(Vuex)

type UserState = {
  users: User[]
}

const state: UserState = {
  users: []
}

type Getter<S, G> = {
  [K in keyof G]: (state: S) => G[K]
}
type IUserGetter = {
  getUsers: User[]
}
type UserGetter = Getter<UserState, IUserGetter>

const getters: UserGetter = {
  getUsers(state) {
    return state.users
  }
}

type IUserMutation = {
  UPDATE_USERS: User[]
  DELETE_USER: number
}

type Mutation<S, M> = {
  [K in keyof M]: (state: S, payload: M[K]) => void
}

const mutations: Mutation<UserState, IUserMutation> = {
  UPDATE_USERS(state, users): void {
    state.users = users
  },
  DELETE_USER(state, id): void {
    const users = state.users.filter(user => {
      return id !== user.id
    })

    state.users = users
  }
}

const actions = {
  fetchUsers({ commit }: { commit: any }) {
    commit('UPDATE_USERS', fakeUsers)
  },
  deleteUser({ commit }: { commit: any }, payload: any) {
    commit('DELETE_USER', payload)
  }
}

const userStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default new Vuex.Store({
  modules: {
    user: userStore
  }
})
