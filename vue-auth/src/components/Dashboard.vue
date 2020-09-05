<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <template v-if="!isLoading">
      <p v-for="event in events" :key="event.id">{event.title}</p>
    </template>
    <p v-else>
      Loading contents...
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isLoading = ref(true);
    const events = ref([]);

    return {
      isLoading,
      events,
    };
  },
});
</script>

<style></style>
