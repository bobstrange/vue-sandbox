export type Getter<S, G> = {
  [K in keyof G]: (state: S) => G[K]
}
export type Mutation<S, M> = {
  [K in keyof M]: (state: S, payload: M[K]) => void
}

export type Commit<MI> = <T extends keyof MI>(type: T, payload?: MI[T]) => void
export type Dispatch<AI> = <T extends keyof AI>(type: T, payload?: AI[T]) => any
export type Context<S, AI, MI, GI, RS, RG> = {
  commit: Commit<MI>
  dispatch: Dispatch<AI>
  state: S
  getters: GI
  rootState: RS
  rootGetters: RG
}
export type Action<S, AI, MI = {}, GI = {}, RS = {}, RG = {}> = {
  [K in keyof AI]: (ctx: Context<S, AI, MI, GI, RS, RG>, payload: AI[K]) => any
}
