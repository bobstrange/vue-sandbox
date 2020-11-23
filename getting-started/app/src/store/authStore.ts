import { ref, InjectionKey, inject } from "vue"
import { CurrentUser } from "@/models/user"
import { login as loginRequest } from "@/apis/authClient"

export const AuthStoreKey: InjectionKey<AuthStore> = Symbol("AuthStore")

const getCurrentUser = () => {}

const getters = { getCurrentUser }

const login = async () => {}

const signup = async () => {}

const logout = async () => {}

const actions = {
  login,
  signup,
  logout,
}

export const authStore = {
  getters,
  actions,
}

export type AuthStore = ReturnType<typeof useCurrentUser>

export const injectAuthStore = () => {
  return inject(AuthStoreKey)
}
