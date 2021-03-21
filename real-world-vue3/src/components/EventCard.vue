<template>
  <router-link :to="{ name: 'Home' }" class="event-link">
    <div class="event-card">
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from '@vue/runtime-core'

const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
