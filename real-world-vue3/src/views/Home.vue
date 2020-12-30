<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <EventCard />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Home',
  components: {
    EventCard
  }
}
</script>
