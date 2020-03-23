<template>
  <div>
    <h2>Events</h2>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import EventCard from '~/components/EventCard'

export default {
  components: {
    EventCard
  },
  async asyncData({ $axios, error }) {
    try {
      const response = await $axios.get('http://localhost:3000/events')
      return {
        events: response.data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event. Please try again.'
      })
    }
  },
  head() {
    return {
      title: 'Event Listing'
    }
  }
}
</script>
