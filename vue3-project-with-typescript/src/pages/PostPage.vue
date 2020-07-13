<template>
  <form
    class="flex flex-col bg-white pin px-8 py-8 text-left rounded-lg shadow"
  >
    <input
      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
      type="text"
      v-model="post.title"
    />
    <textarea
      class="flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
      v-model="post.body"
    />

    <div class="items-center flex-row justify-end">
      <div class="w-1/3 block">
        <button
          class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          @click="save"
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Post } from '../types/Post'
import { fetchPost } from '../apis/postClient'
import { usePostsStore } from '@/store/posts'

export default defineComponent({
  setup(_, context) {
    const postsStore = usePostsStore()

    const postId = ref<number>(Number(useRoute().params.id))
    const post = computed<Post | {}>(
      () => postsStore.postById(postId.value) || {}
    )

    const save = async ({ target }: { target: HTMLInputElement }) => {
      const data = { ...post.value, body: target.value } as Post
      await postsStore.updatePost(data)
    }

    onBeforeMount(async () => {
      // post.value = (await fetchPost(postId.value)).data
    })

    return {
      post,
      save
    }
  }
})
</script>

<style></style>
