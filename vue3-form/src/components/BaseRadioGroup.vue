<template>
  <component
    v-for="{ value, label } in options"
    :key="value"
    :is="vertical === true ? 'div' : 'span'"
    :class="{
      horizontal: !vertical,
    }"
  >
    <BaseRadio
      :label="label"
      :value="value"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="emit('update:modelValue', $event)"
    />
  </component>
</template>

<script setup lang="ts">
import BaseRadio from './BaseRadio.vue'

type Option = {
  value: string | number
  label: string
}
const {
  options,
  name,
  modelValue,
  vertical = false,
} = defineProps<{
  options: Option[]
  name: string
  modelValue: string | number
  vertical?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', data: string | number): void
}>()
</script>

<style scoped>
.horizontal {
  margin-right: 20px;
}
</style>
