<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"
import { useEventStore } from "../stores/EventStore"

const eventStore = useEventStore()
const props = defineProps<{ id: string }>()
const event = computed(() => eventStore.event)
const router = useRouter()
eventStore.fetchEvent(props.id)?.catch((error) => {
  router.push({
    name: "ErrorDisplay",
    params: { error },
  })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
