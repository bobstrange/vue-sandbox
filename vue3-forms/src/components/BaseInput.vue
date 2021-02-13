<template>
  <label for="title" class="block text-sm text-gray-500">{{ label }}</label>
  <input
    :value="modelValue"
    :placeholder="label"
    class="mt-1 mb-2 px-2 pt-0.5 text-base"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})
</script>

<style scoped></style>
