<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="emit('update:modelValue', $event.target.checked)"
    class="field"
    v-bind="$attrs"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script setup lang="ts">
const { label = '', modelValue = false } =
  defineProps<{ label?: string; modelValue?: boolean }>()
const emit = defineEmits<{ (e: 'update:modelValue', data: boolean): void }>()
</script>

<style scoped></style>
