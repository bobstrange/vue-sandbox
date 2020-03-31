import Vue from 'vue'
import Vuex, { Action, Mutation, Store, Getter} from 'vuex'

import { User } from '@/model/User'
import { fakeUsers } from '@/util/fake_users'

Vue.use(Vuex)

type UserState = {
  users: User[]
}
const state: UserState = {
  users: fakeUsers
}

const getters = {
  getUsers(state: UserState): User[] {
    return state.users
  }
}

const mutations = {
  UPDATE_USERS(state: UserState, payload: User[]) {
    state.users = payload
  }
}

const actions = {
  fetchUsers({ commit }: { commit: any }) {
    commit('UPDATE_USERS', fakeUsers)
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
