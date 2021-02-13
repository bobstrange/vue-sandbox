<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
    v-bind="$attrs"
    class="mr-2"
  />
  <label class="text-gray-600 text-base" v-if="label">{{ label }}</label>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number],
    required: true,
  },
})
</script>

<style scoped></style>
