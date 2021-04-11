<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SimpleCounter',
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value = count.value + 1
    }
    return {
      count,
      increment,
    }
  },
})
</script>
