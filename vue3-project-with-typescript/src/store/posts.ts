import { Post } from '@/types/Post'
import { reactive, UnwrapRef } from 'vue'

import { fetchPosts } from '@/apis/postClient'

export const usePostsStore = () => {
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

export type PostStore = ReturnType<typeof usePostsStore>
