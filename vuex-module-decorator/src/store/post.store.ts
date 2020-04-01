import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Post } from '@/models/Post'
import { PostAPI } from '@/api/post'

@Module({ namespaced: true })
export default class UserStore extends VuexModule {
  posts: Post[] = []

  @Mutation
  UPDATE_POSTS(posts: Post[]) {
    this.posts = posts
  }

  @Action({ commit: 'UPDATE_POSTS' })
  async fetchPosts() {
    const client = new PostAPI()
    return await client.fetchPosts()
  }
}
