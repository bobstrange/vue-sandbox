<template>
  <div class="hello">
    <h1>Count: {{ currentCount }}</h1>
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'

const { currentCount, incrementCount } = useCounter()
</script>
