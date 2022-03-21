<template>
  <input
    type="radio"
    :value="value"
    :checked="modelValue === value"
    @change="emit('update:modelValue', value)"
    v-bind="$attrs"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script setup lang="ts">
const { label = '', modelValue = '' } = defineProps<{
  label?: string
  modelValue?: string | number
  value: string | number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', data: string | number): void
}>()
</script>

<style scoped></style>
