<template>
  <h1>Events</h1>
  <div class="events">
    <EventCard v-for="event in state.events" :key="event.id" :event="event" />
  </div>
</template>

<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { EventService } from '@/services/EventService'
import { reactive, toRefs } from '@vue/reactivity'

const state = reactive({ events: [] })
EventService.getEvents().then(response => {
  state.events = response.data
})
</script>

<style lang="scss" module>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
