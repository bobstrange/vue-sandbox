<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
    v-bind="$attrs"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
})
</script>

<style scoped></style>
