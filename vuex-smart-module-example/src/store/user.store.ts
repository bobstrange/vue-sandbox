import { Getters, Mutations, Actions, Module } from "vuex-smart-module"
import { User } from "@/models/User"
import { UserAPI } from "@/api/user"

export class UserState {
  users: User[] = []
}

export class UserGetters extends Getters<UserState> {
  get getUser(): (id: number) => User | undefined {
    return id => {
      return this.state.users.find(user => id === user.id)
    }
  }
}

export class UserMutations extends Mutations<UserState> {
  UPDATE_USERS(users: User[]): void {
    this.state.users = users
  }
}

export class UserActions extends Actions<
  UserState,
  UserGetters,
  UserMutations,
  UserActions
> {
  async fetchUsers() {
    const userApi = new UserAPI()
    const users = await userApi.fetchUsers()
    this.commit("UPDATE_USERS", users)
  }
}

export const user = new Module({
  namespaced: true,
  state: UserState,
  getters: UserGetters,
  mutations: UserMutations,
  actions: UserActions
})
