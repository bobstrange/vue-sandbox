import { MutationTree, ActionContext, ActionTree } from 'vuex'
import { Post } from '@/types/Post'
import { fetchPosts } from '@/apis/postClient'
export type PostState = {
  posts: Post[]
}

type PostMutations<S = PostState> = {
  UPDATE_POSTS(state: S, payload: Post[]): void
}

type ArgumentPostActionContext = {
  commit<K extends keyof PostMutations>(
    key: K,
    payload: Parameters<PostMutations[K]>[1]
  ): ReturnType<PostMutations[K]>
} & Omit<ActionContext<PostState, PostState>, 'commit'>

type PostActions = {
  fetchPosts(
    { commit }: ArgumentPostActionContext,
    payload: Post[]
  ): Promise<Post[]>
}

type PostGetters = {
  posts(state: PostState): Post[]
}

const state: PostState = {
  posts: []
}

const getters: PostGetters = {
  posts(state) {
    return state.posts
  }
}

const actions: ActionTree<PostState, PostState> & PostActions = {
  async fetchPosts({ commit }) {
    const posts = (await fetchPosts()).data
    commit('UPDATE_POSTS', posts)
    return posts
  }
}

const mutations: MutationTree<PostState> & PostMutations = {
  UPDATE_POSTS(state, payload) {
    state.posts = payload
  }
}

export const posts = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
