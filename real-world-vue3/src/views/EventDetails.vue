<template>
  <div v-if="event">
    <h1 class="text-gray-900 font-bold text-xl">{{ event.title }}</h1>
    <div class="mt-4 text-gray-500 text-sm">
      <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import { fetchEvent } from '../apis/event'
export default {
  setup(props) {
    const event = ref(null)

    onBeforeMount(async () => {
      event.value = await fetchEvent(props.id)
    })
    return { event }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
