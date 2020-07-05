<template>
  <ul class="px-4 py-4">
    <li v-for="post in posts" :key="post.id">
      <div class="text-left text-lg px-2 py-1">
        <router-link :to="{ name: 'PostPage', params: { id: post.id } }">{{
          post.title
        }}</router-link>
      </div>
    </li>
  </ul>
  <div
    class="flex top-0 w-screen h-full fixed bg-black bg-opacity-25 justify-center items-center"
  >
    <router-view :key="route.path" class="inner-view" />
  </div>
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

<style scoped>
.inner-view {
  @apply w-2/3;
  height: 32rem;
}
</style>
