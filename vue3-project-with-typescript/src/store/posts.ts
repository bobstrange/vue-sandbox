import { Post } from '@/types/Post'
import { reactive, UnwrapRef, InjectionKey, inject } from 'vue'

import { fetchPosts } from '@/apis/postClient'

export const createPostsStore = () => {
  const state: UnwrapRef<{ posts: Post[] }> = reactive({
    posts: []
  })

  return {
    get posts() {
      return state.posts
    },
    postsById(id: number) {
      return state.posts.find(post => post.id === id)
    },
    async updatePosts() {
      const response = await fetchPosts()
      state.posts = response.data
      return response.data
    }
  }
}

export type PostsStore = ReturnType<typeof createPostsStore>

export const PostsStoreKey: InjectionKey<PostsStore> = Symbol('PostsStore')

export const usePostsStore = () => {
  const store = inject(PostsStoreKey)
  if (!store) {
    throw new Error('PostsStoreKey is not provided')
  }
  return store
}
