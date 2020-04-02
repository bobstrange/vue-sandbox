import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Post } from '@/models/Post'
import { PostAPI } from '@/api/post'

@Module({
  name: 'post',
  namespaced: true,
  stateFactory: true
})
export default class UserStore extends VuexModule {
  posts: Post[] = []

  get getPostsByUserId(): (userId: number) => Post[] {
    return (userId) => {
      return this.posts.filter(post => post.userId === userId)
    }
  }

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
