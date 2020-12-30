<template>
  <div v-if="event">
    <h1 class="text-gray-900 font-bold text-xl">{{ event.title }}</h1>
    <div class="mt-4 text-gray-500 text-sm">
      <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, PropType, ref } from 'vue'
import { fetchEvent, Event } from '../apis/event'

interface Props {
  readonly id: string
}

export default defineComponent({
  setup(props: Props) {
    const event = ref<Event | null>(null)

    onBeforeMount(async () => {
      event.value = await fetchEvent(props.id)
    })
    return { event }
  },
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped></style>
