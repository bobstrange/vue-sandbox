<script setup lang="ts">
import { computed } from "vue"
import { useEventStore } from "../stores/EventStore"
import { useRouter } from "vue-router"
import EventCard from "../components/EventCard.vue"

const router = useRouter()

const eventStore = useEventStore()
eventStore.fetchEvents().catch((error) => {
  router.push({
    name: "ErrorDisplay",
    params: { error },
  })
})

const events = computed(() => {
  return eventStore.events
})
</script>

<template>
  <h1>{{ eventStore.numberOfEvents }} Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
