<template>
  <BaseRadio
    v-for="{ value, label } in options"
    :key="value"
    :label="label"
    :value="value"
    :name="name"
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
import BaseRadio from './BaseRadio.vue'

type Option = {
  value: string | number
  label: string
}
const { options, name, modelValue } = defineProps<{
  options: Option[]
  name: string
  modelValue: string | number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', data: string | number): void
}>()
</script>

<style scoped></style>
