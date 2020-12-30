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

<script lang="ts">
import EventCard from '@/components/EventCard.vue'
import { fetchEvents, Event } from '../apis/event'
import { defineComponent, onBeforeMount, reactive } from 'vue'

export default defineComponent({
  name: 'EventList',
  setup() {
    const events = reactive<Event[]>([])
    onBeforeMount(async () => {
      events.push(...(await fetchEvents()))
    })
    return { events }
  },
  components: {
    EventCard
  }
})
</script>
