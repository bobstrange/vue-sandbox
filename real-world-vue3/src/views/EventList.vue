<template>
  <div class="event-list">
    <h1 class="text-gray-900 font-bold text-xl">Events For Good</h1>
    <ul class="mt-4 flex flex-col items-center">
      <li v-for="event in events" :key="event.id" class="first:mt-0 mt-4">
        <EventCard :event="event" />
      </li>
    </ul>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import dummyEvents from '@/dummy_events.json'

export default {
  name: 'EventList',
  setup() {
    const events = dummyEvents
    return { events }
  },
  components: {
    EventCard
  }
}
</script>
