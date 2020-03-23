<template>
  <nuxt-link :to="'/events/' + event.id">
    <div class="-shadow">
      <div class="eyebrow">@{{ event.time }} on {{ date }}</div>
      <h4 class="title">{{ event.title }}</h4>
      <span>{{ event.attendees.length }} attending</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    event: {
      type: Object
    }
  },
  computed: {
    date() {
      const eventDate = new Date(this.event.date)
      return eventDate.toDateString()
    }
  }
}
</script>

<style scoped>
div {
  padding: 2rem;
  margin-bottom: 2.4rem;
  transition: all 0.2s linear;
  cursor: pointer;
}

div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.title {
  margin: 0;
  color: #000;
}

a {
  text-decoration: none;
}
</style>
