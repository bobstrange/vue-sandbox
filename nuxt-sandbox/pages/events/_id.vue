<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error, params }) {
    try {
      const response = await $axios.get(
        `http://localhost:3000/events/${params.id}`
      )
      return {
        event: response.data
      }
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
    }
  },
  head() {
    return {
      title: `Event ${this.event.title}`
    }
  }
}
</script>
