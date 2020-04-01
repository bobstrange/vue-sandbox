import 'vuex'
import * as User from '@/store/index'

declare module 'vuex' {
  export type ExpandedGetter<S, GI, RS = {}, RGI = {}> = {
    [K in keyof GI]: (
      state: S,
      getters: GI,
      rootState: RS,
      rootGetters: RGI
    ) => GI[K]
  }
  export type ExpandedMutation<S, MI> = {
    [K in keyof MI]: (state: S, payload: MI[K]) => void
  }

  export type ExpandedCommit<MI> = <T extends keyof MI>(
    type: T,
    payload?: MI[T]
  ) => void

  export type ExpandedDispatch<AI> = <T extends keyof AI>(
    type: T,
    payload?: AI[T]
  ) => any

  export type ExpandedContext<S, AI, MI, GI, RS, RG> = {
    commit: ExpandedCommit<MI>
    dispatch: ExpandedDispatch<AI>
    state: S
    getters: GI
    rootState: RS
    rootGetters: RG
  }

  export type ExpandedAction<S, AI, MI = {}, GI = {}, RS = {}, RG = {}> = {
    [K in keyof AI]: (
      ctx: ExpandedContext<S, AI, MI, GI, RS, RG>,
      payload: AI[K]
    ) => any
  }

  interface ExpandedStore extends Store<{}> {
    getters: User.IUserRootGetter
  }
}
