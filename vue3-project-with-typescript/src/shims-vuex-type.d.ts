import 'vuex'

declare module 'vuex' {
  type Getters<S, G> = {
    [K in keyof G]: (
      state: S,
      getters: G,
      rootState: RootState,
      rootGetters: RootGetters
    ) => G[K]
  }

  type Mutations<S, M> = {
    [K in keyof M]: (state: S, payload: M[K]) => void
  }
}
