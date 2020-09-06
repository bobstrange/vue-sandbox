<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <template v-if="!isLoading">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>
      Loading contents...
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import EventCard from "./EventCard.vue";
import { Event } from "../types";

export default defineComponent({
  name: "Dashbaord",
  setup() {
    const isLoading = ref(true);
    const events = ref<Event[]>([
      { title: "foo", time: "aaa", date: new Date() },
    ]);
    isLoading.value = false;
    return {
      isLoading,
      events,
    };
  },
  components: {
    EventCard,
  },
});
</script>

<style></style>
