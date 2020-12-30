<template>
  <div class="event-card">
    <span>{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
import dummyEvents from '@/dummy_events.json'

export default {
  name: 'EventCard',
  setup() {
    const event = dummyEvents[0]
    return { event }
  }
}
</script>

<style scoped lang="scss"></style>
