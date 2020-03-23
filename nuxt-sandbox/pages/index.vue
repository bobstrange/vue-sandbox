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
import { mapState } from 'vuex'
import EventCard from '~/components/EventCard'

export default {
  components: {
    EventCard
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event. Please try again.'
      })
    }
  },
  computed: {
    ...mapState({
      events: (state) => state.events.events
    })
  },
  head() {
    return {
      title: 'Event Listing'
    }
  }
}
</script>
