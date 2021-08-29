<template>
  <label v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    class="field"
    v-bind="{
      ...$attrs,
      onChange: (event) => {
        $emit('update:modelValue', (event.target as HTMLInputElement).value)
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

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
})
</script>

<style scoped></style>
