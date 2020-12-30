<template>
  <div
    class="p-6 cursor-pointer bg-white rounded border-solid border border-gray-900 max-w-xs shadow-sm transform hover:scale-105 hover:shadow-md transition duration-100"
  >
    <span class="text-gray-500 text-sm"
      >{{ event.time }} on {{ event.date }}</span
    >
    <h4 class="text-gray-900 font-semibold">{{ event.title }}</h4>
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
