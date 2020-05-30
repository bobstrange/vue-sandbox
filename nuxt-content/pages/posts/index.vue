<template>
  <div class="container">
    <h1>Posts</h1>
    <h2>Contents</h2>
    <ul>
      <li v-for="(content, index) in contents" :key="index">
        <nuxt-link :to="content.path">title: {{ content.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const contents = await $content('posts')
      .only(['title', 'path'])
      .where({
        isArchived: { $ne: true }
      })
      .fetch()
    return { contents }
  },
  components: {}
})
</script>
