<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="mr-1"
  />
  <label class="text-gray-600 text-base" v-if="label">{{ label }}</label>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
})
</script>

<style scoped></style>
