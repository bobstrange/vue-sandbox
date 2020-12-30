<template>
  <div
    class="p-6 cursor-pointer bg-white rounded border-solid border border-gray-900 w-56 shadow-sm transform hover:scale-105 hover:shadow-md transition duration-100"
  >
    <span class="text-gray-500 text-sm"
      >{{ data.time }} on {{ data.date }}</span
    >
    <h4 class="text-gray-900 font-semibold">{{ data.title }}</h4>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'EventCard',
  setup(props) {
    const data = computed(() => {
      return props.event
    })

    return { data }
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss"></style>
