import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import { User } from '@/models/User'
import { fetchUsers } from '@/services/user'

import { createDirectStore } from 'direct-vuex'

Vue.use(Vuex);

type UserState = {
  users: User[]
}

const user = {
  namespaced: true,
  state: (): UserState => {
    return {
      users: []
    }
  },
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

const {
  store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
} = createDirectStore({
  modules: { user }
})

// Export the direct-store instead of the classic Vuex Store
export default store

export {
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
}

// Enable types in the injected store '$store'
export type AppStore = typeof store
declare module 'vuex' {
  interface Store<S> {
    direct: AppStore
  }
}
