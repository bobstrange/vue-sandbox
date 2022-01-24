<script setup lang="ts">
const emit = defineEmits<{
  (event: 'add-count', num?: number): void
  (event: 'reset-count'): void
}>()
</script>

<template>
  <div>
    <button @click="emit('add-count')">Add 1</button>
    <button @click="emit('reset-count')">Reset</button>
  </div>
</template>
