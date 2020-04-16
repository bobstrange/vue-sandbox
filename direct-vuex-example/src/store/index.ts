import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import { User } from '@/models/User'
import { fetchUsers } from '@/services/user'

Vue.use(Vuex);

type UserState = {
  users: User[]
}

const user = {
  namespaced: true,
  state: {
    users: []
  } as UserState,
  getters: {},
  mutations: {
    SET_USERS(state: UserState, users: User[]) {
      state.users = users
    }
  },
  actions: {
    async getUsers(ctx: ActionContext<UserState, {}> , payload: User[]) {
      const users = await fetchUsers()
      ctx.commit('SET_USERS', users)
    }
  }
}
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
