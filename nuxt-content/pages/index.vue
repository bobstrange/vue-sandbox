<template>
  <div class="container">
    <div>
      <article>
        <nuxt-content :document="doc" />
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const doc = await $content('home').fetch()
    return {
      doc
    }
  },
  components: {}
})
</script>
