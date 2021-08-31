<template>
  <div class="p-1">
    <h1 class="text-2xl">Post List</h1>
    <ul v-for="post in posts" :key="post.id" class="mt-1">
      <li class="post-item">
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">{{
          post.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { client } from '../lib/api/client'
import { Post } from '../types'

export default defineComponent({
  name: 'PostList',
  setup() {
    const posts = reactive<Post[]>([])
    client
      .get<Post[]>('/posts')
      .then((res) => {
        posts.push(...res.data)
      })
      .catch((e) => console.error(e))
    return { posts }
  },
})
</script>

<style scoped></style>
