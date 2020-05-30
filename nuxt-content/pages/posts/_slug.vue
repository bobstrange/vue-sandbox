<template>
  <div class="container">
    <nuxt-content :document="doc" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const { slug } = params
    const doc = await $content('posts', slug || 'index').fetch()
    return {
      doc
    }
  },
  components: {}
})
</script>
