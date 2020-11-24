import { InjectionKey, inject, ref } from "vue"
import { CurrentUser } from "@/models/user"
import {
  login as loginRequest,
  logout as logoutRequest,
  LoginAttrs,
} from "@/apis/authClient"

export const AuthStoreKey: InjectionKey<typeof authStore> = Symbol("AuthStore")

const state = {
  user: ref<CurrentUser | null>(null),
}

const loggedIn = () => {
  return !!state.user.value
}

const getCurrentUser = () => {
  return state.user
}

const getters = { loggedIn, getCurrentUser }

const login = async (attrs: LoginAttrs) => {
  const result = await loginRequest(attrs)
  if (result.data) {
    const userData = result.data
    state.user.value = {
      ...userData,
    }
    localStorage.setItem("user", JSON.stringify(userData))
  }
  return result
}

const signup = async () => {
  console.log("signup")
}

const logout = async () => {
  await logoutRequest()
  localStorage.removeItem("user")
  location.reload()
}

const actions = {
  login,
  signup,
  logout,
}

export const authStore = {
  state,
  getters,
  actions,
}

export const injectAuthStore = () => {
  return inject(AuthStoreKey) as typeof authStore
}
