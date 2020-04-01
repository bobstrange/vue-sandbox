<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount } from '@vue/composition-api'
import { Post } from '@/models/Post'

export default defineComponent({
  name: 'PostsPage',
  setup(props, { root }) {
    onBeforeMount(() => {
      root.$store.dispatch('post/fetchPosts')
    })
    const posts = computed<Post[]>(() => {
      return root.$store.state.post.posts
    })
    return { posts }
  }
})
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

li {
  font-size: 1.6rem;
  text-align: left;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>>
