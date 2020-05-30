<template>
  <div class="container">
    <nuxt-content :document="doc" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params, error }) {
    const { slug } = params

    let doc

    try {
      doc = await $content('posts', slug).fetch()
    } catch (e) {
      return error({
        statusCode: 404,
        message: 'Page not found'
      })
    }
    return { doc }
  },
  components: {}
})
</script>
