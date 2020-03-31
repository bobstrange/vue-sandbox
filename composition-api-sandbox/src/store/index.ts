import Vue from 'vue'
import Vuex from 'vuex'

import { User } from '@/model/User'
import { fakeUsers } from '@/util/fake_users'
import { Getter, Mutation, Action } from '@/store/store_types'

Vue.use(Vuex)

type UserState = {
  users: User[]
}

const state: UserState = {
  users: []
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

type IUserAction = {
  fetchUsers: void
  deleteUser: number
}

const actions: Action<UserState, IUserAction, IUserMutation, IUserGetter> = {
  fetchUsers({ commit }) {
    commit('UPDATE_USERS', fakeUsers)
  },
  deleteUser({ commit }, payload) {
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
