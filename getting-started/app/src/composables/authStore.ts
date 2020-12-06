import { InjectionKey, inject, ref } from 'vue'
import { CurrentUser } from '@/models/user'
import {
  login as loginRequest,
  logout as logoutRequest,
  LoginAttrs,
} from '@/apis/authClient'

export const AuthStoreKey: InjectionKey<ReturnType<typeof authStore>> = Symbol(
  'AuthStore'
)

const getUserFromLocalStorage = (): CurrentUser | null => {
  const userString = localStorage.getItem('user')
  if (userString) {
    return JSON.parse(userString) as CurrentUser
  }
  return null
}

export const authStore = () => {
  const state = {
    user: ref<CurrentUser | null>(getUserFromLocalStorage()),
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
      localStorage.setItem('user', JSON.stringify(userData))
    }
    return result
  }

  const signup = async () => {
    console.log('signup')
  }

  const logout = async () => {
    await logoutRequest()
    localStorage.removeItem('user')
    location.reload()
  }

  const actions = {
    login,
    signup,
    logout,
  }

  return {
    state,
    getters,
    actions,
  }
}

export const useAuthStore = () => {
  const store = inject(AuthStoreKey)
  if (!store) {
    throw new Error('Please provide authStore before you inject.')
  }
  return store
}
