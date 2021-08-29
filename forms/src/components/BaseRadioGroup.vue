<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{ horizontal: !vertical }"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import BaseRadio from './BaseRadio.vue'

type Option = {
  label: string
  value: string | number
}

export default defineComponent({
  setup() {
    return {}
  },
  props: {
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BaseRadio,
  },
})
</script>

<style scoped>
.horizontal {
  margin-right: 1rem;
}
</style>
