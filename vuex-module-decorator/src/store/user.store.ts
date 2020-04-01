import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { User } from '@/models/User'
import { UserAPI } from '@/api/user'

@Module({
  name: 'user',
  namespaced: true,
  stateFactory: true,
})

export default class UserStoreModule extends VuexModule {
  users: User[] = []

  @Mutation
  UPDATE_USERS(users: User[]) {
    this.users = users
  }

  @Action({ commit: 'UPDATE_USERS' })
  async fetchUsers() {
    const client = new UserAPI()
    return await client.fetchUsers()
  }
}
