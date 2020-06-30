<template>
  <div class="modal">
    <div class="overlay" @click="onOverlayClicked"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, { emit }) {
    const onOverlayClicked = () => {
      emit('closeModal')
    }
    return {
      onOverlayClicked
    }
  }
})
</script>

<style></style>
