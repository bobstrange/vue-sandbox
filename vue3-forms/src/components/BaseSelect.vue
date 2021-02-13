<template>
  <label for="category" class="label" v-if="label">{{ label }}</label>
  <select
    name="category"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value)
      },
    }"
    :value="modelValue"
    class="mt-1 w-1/2 py-1 px-2 text-base text-gray-700"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
      class="text-sm text-gray-700"
    >
      {{ option }}
    </option>
  </select>
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
  options: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.label {
  @apply mt-2 block text-sm text-gray-500;
}
</style>
