import Vue from 'vue'
import Vuex from 'vuex'

import { User } from '@/model/User'
import { fakeUsers } from '@/util/fake_users'
import { Getter, Mutation, Action } from '@/store/store_types'

Vue.use(Vuex)

export type UserState = {
  users: User[]
}

export type UserRootState = {
  'user/users': UserState['users']
}

const state: UserState = {
  users: []
}

export type IUserGetter = {
  getUsers: User[]
}

export type IUserRootGetter = {
  'user/getUsers': IUserGetter['getUsers']
}

type UserGetters = Getter<
  UserState,
  IUserGetter,
  UserRootState,
  IUserRootGetter
>

const getters: UserGetters = {
  getUsers(state) {
    return state.users
  }
}

export type IUserMutation = {
  UPDATE_USERS: User[]
  DELETE_USER: number
}

type UserMutations = Mutation<UserState, IUserMutation>

const mutations: UserMutations = {
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

export type IUserAction = {
  fetchUsers: void
  deleteUser: number
}

type UserActions = Action<UserState, IUserAction, IUserMutation, IUserGetter>
const actions: UserActions = {
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
