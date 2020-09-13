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
import { defineComponent, onBeforeMount, ref } from "vue";
import axios from "axios";
import EventCard from "../components/EventCard.vue";
import { Event } from "../types";

export default defineComponent({
  name: "Dashbaord",
  setup() {
    const isLoading = ref(true);
    const events = ref<Event[]>([]);
    onBeforeMount(async () => {
      const result = await axios.get<Event[]>("//localhost:8080/dashboard");
      events.value = result.data;
      isLoading.value = false;
    });
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
