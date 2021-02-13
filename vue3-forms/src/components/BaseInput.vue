<template>
  <div :class="$attrs.class">
    <label for="title" class="block text-sm text-gray-500">{{ label }}</label>
    <input
      :type="$attrs.type"
      :value="modelValue"
      :placeholder="label"
      class="mt-1 px-2 pt-0.5 text-base"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
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
