<template>
  <div>
    <PostList :posts="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'
import { fetchPosts } from '../apis/postClient'
import { Post } from '../models/post'
import PostList from '../components/PostList.vue'

export default defineComponent({
  name: 'Posts',
  setup() {
    const posts = ref<Post[]>([])

    onBeforeMount(async () => {
      const data = await fetchPosts()
      posts.value = data
    })

    return { posts }
  },
  components: {
    PostList,
  },
})
</script>

<style scoped></style>
