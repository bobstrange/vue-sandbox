<template>
  <h1>Posts</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <div class="post-list__item">
        <router-link :to="{ name: 'PostPage', params: { id: post.id } }">{{
          post.title
        }}</router-link>
      </div>
    </li>
  </ul>
  <router-view :key="route.path" />
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'
import { Post } from '../types/Post'
import { fetchPosts } from '../apis/postClient'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const posts = ref<Post[]>([])
    const route = useRoute()

    onBeforeMount(async () => {
      posts.value = (await fetchPosts()).data
    })

    return {
      posts,
      route
    }
  }
})
</script>

<style></style>
