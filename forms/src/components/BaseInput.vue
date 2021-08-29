<template>
  <div class="base-input">
    <label>{{ label }}</label>
    <input
      v-bind="$attrs"
      :placeholder="label"
      class="field"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
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
  },
})
</script>

<style scoped>
.base-input {
  display: flex;
  align-items: center;
}

label {
  display: inline-block;
  margin-right: 1rem;
}
</style>
