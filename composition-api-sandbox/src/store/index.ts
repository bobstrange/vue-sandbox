import Vue from 'vue'
import Vuex, { Action, Mutation, Store, Getter} from 'vuex'

import { User } from '@/model/User'
import { fakeUsers } from '@/util/fake_users'

Vue.use(Vuex)

type UserState = {
  users: User[]
}
const state: UserState = {
  users: []
}

const getters = {
  getUsers(state: UserState): User[] {
    return state.users
  }
}

const mutations = {
  UPDATE_USERS(state: UserState, users: User[]): void {
    state.users = users
  },
  DELETE_USER(state: UserState, id: number): void {
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
