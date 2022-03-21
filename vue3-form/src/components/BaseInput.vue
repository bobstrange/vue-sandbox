<template>
  <label>{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
const { label = '', modelValue = '' } = defineProps<{
  label?: string
  modelValue?: string | number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', data: string | number): void
}>()
</script>

<style scoped></style>
