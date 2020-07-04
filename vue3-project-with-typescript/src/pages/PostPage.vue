<template>
  <h1>Post</h1>
  <div>Title: {{ post.title }}</div>
  <p>{{ post.body }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { Post } from '../types/Post'
import { fetchPost } from '../apis/postClient'

export default defineComponent({
  setup(_, context) {
    const postId = ref<number>(Number(useRoute().params.id))
    const post = ref<Post | {}>({})

    onBeforeMount(async () => {
      post.value = (await fetchPost(postId.value)).data
    })

    return {
      post
    }
  }
})
</script>

<style></style>
