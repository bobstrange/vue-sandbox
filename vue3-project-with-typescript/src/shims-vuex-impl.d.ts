import 'vuex'
import * as Posts from '@/vuex_store/posts/type'

declare module 'vuex' {
  type RootState = {
    posts: Posts.S
  }
  type RootGetters = Posts.RG
  type RootMutations = Posts.RM
  type RootActions = Posts.RA
}
