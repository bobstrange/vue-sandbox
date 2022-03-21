<template>
  <label v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: (event) => {
        emit('update:modelValue', event.target.value)
      },
    }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
const { label = '', modelValue = '' } =
  defineProps<{
    label?: string
    modelValue?: string | number
    options: string[]
  }>()
const emit = defineEmits<{
  (e: 'update:modelValue', data: string | number): void
}>()
</script>

<style scoped></style>
