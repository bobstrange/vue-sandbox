<template>
  <h1>Posts</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'
import { Post } from '../types/Post'
import { fetchPosts } from '../apis/postClient'

export default defineComponent({
  setup() {
    const posts = ref<Post[]>([])
    onBeforeMount(async () => {
      posts.value = (await fetchPosts()).data
    })

    return {
      posts
    }
  }
})
</script>

<style></style>
