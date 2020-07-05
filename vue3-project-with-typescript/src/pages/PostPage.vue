<template>
  <div class="bg-white pin px-8 py-8 text-left rounded-lg shadow">
    <div class="font-bold text-xl mb-2">{{ post.title }}</div>
    <p class="text-gray-700 text-base">
      {{ post.body }}
    </p>
  </div>
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
