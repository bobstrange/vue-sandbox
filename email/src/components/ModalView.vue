<template>
  <div class="modal">
    <div class="overlay" @click="emit('close-modal')"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from 'vue'

export default defineComponent({
  setup(props, { emit }) {
    const onKeydown = (event: KeyboardEvent) => {
      console.log(event)
      if (event.key == 'Escape') {
        emit('close-modal')
      }
    }
    window.addEventListener('keydown', onKeydown)
    onBeforeUnmount(() => {
      window.removeEventListener('keydown', onKeydown)
    })
    return { emit }
  }
})
</script>

<style scoped></style>
