import { createStore } from 'vuex'
import { users } from './modules/users'

export const store = createStore({
  modules: {
    users
  }
})
