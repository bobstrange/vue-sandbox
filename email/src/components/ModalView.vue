<template>
  <div class="modal">
    <div class="overlay" @click="emit('close-modal')"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useKeydown } from '@/composables/useKeydown'

export default defineComponent({
  setup(props, { emit }) {
    useKeydown([
      {
        key: 'Escape',
        fn: () => {
          emit('close-modal')
        }
      }
    ])
    return { emit }
  }
})
</script>

<style scoped></style>
