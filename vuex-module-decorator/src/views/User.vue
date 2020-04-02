<template>
  <div class="users">
    <h1>User</h1>
    <div v-if="user">
      <ul>
        <li>Name: {{ user.name }}</li>
        <li>UserName: {{ user.username }}</li>
        <li>email: {{ user.email }}</li>
      </ul>
      <h2>Posts</h2>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          {{ post.title }}
        </li>
      </ul>
    </div>
    <div v-else>
      Unexist user
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount } from '@vue/composition-api'
import { getModule } from 'vuex-module-decorators'
import UserStoreModule from '@/store/user.store'
import PostStoreModule from '@/store/post.store'

import { User } from '@/models/User'
import { Post } from '@/models/Post'

export default defineComponent({
  name: 'UserPage',
  setup(props, { root }) {
    const userStore = getModule(UserStoreModule, root.$store)
    const postStore = getModule(PostStoreModule, root.$store)

    onBeforeMount(async () => {
      await userStore.fetchUsers()
      postStore.fetchPosts()
    })

    const userId = computed<number>(() => {
      return parseInt(root.$route.params.id)
    })
    const user = computed<User | undefined>(() => {
      return userStore.getUser(userId.value) || undefined
    })

    const posts = computed<Post[]>(() => {
      return postStore.getPostsByUserId(userId.value)
    })

    return {
      user,
      userId,
      posts
    }
  }
})
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
