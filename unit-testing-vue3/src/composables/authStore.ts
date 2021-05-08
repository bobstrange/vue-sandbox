import { ref, Ref } from '@vue/reactivity'
import { inject, InjectionKey, provide } from '@vue/runtime-core'

type AuthStore = {
  loggedIn: Ref<boolean>
  login: () => void
  logout: () => void
}

const injectKey: InjectionKey<AuthStore> = Symbol('AuthStore')
const authStore = () => {
  const loggedIn = ref(false)
  const login = () => {
    loggedIn.value = true
  }

  const logout = () => {
    loggedIn.value = false
  }

  return {
    loggedIn,
    login,
    logout,
  }
}

export const registerAuthStore = (): AuthStore => {
  const store = authStore()
  provide(injectKey, store)
  return store
}

export const useAuth = (): AuthStore => {
  const store = inject(injectKey)
  if (!store) {
    throw new Error('Please run registerAuthStore first')
  }
  return store
}
