<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('events/fetchEvent', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event. Please try again.'
      })
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    ...mapState({
      event: (state) => state.events.event
    })
  },
  head() {
    return {
      title: `Event ${this.event.title}`
    }
  }
}
</script>
