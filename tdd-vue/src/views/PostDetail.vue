<template>
  <div>
    <h2 class="post-title text-lg">{{ post?.title }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { client } from '../lib/api/client'
import { Post } from '../types'

export default defineComponent({
  name: 'PostDetail',
  setup() {
    const { id } = useRoute().params
    const post = ref<Post>()
    client
      .get<Post>(`/posts/${id}`)
      .then((res) => {
        post.value = res.data
      })
      .catch((error) => console.error(error))
    return { post }
  },
})
</script>

<style scoped></style>
