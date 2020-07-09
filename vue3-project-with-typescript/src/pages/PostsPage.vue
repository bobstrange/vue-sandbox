<template>
  <div>
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
      v-if="isModalOpen"
      @click="onModalClick"
    >
      <router-view :key="route.path" class="inner-view" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, computed, inject } from 'vue'
import { Post } from '../types/Post'
import { useRoute, useRouter } from 'vue-router'
import { usePostsStore } from '@/store/posts'

export default defineComponent({
  setup() {
    const postsStore = usePostsStore()

    const posts = computed(() => postsStore.posts)

    const route = useRoute()
    const router = useRouter()

    const onModalClick = () => {
      router.push({ name: 'PostsPage' })
    }

    const isModalOpen = computed(() => {
      return route.path !== '/posts'
    })

    onBeforeMount(() => {
      postsStore.updatePosts()
    })

    return {
      posts,
      route,
      isModalOpen,
      onModalClick
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
