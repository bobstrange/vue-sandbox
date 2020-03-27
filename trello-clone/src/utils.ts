import { Store, Mutation } from 'vuex'
export function uuid(): string {
  return Math.random()
    .toString(16)
    .slice(2)
}

export function saveStatePlugin<T>(store: Store<T>) {
  store.subscribe((mutation, state: any) =>
    localStorage.setItem(
      'board',
      JSON.stringify(state.boards)
    )
  )
}
