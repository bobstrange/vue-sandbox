<template>
  <div>
    <h1>Top</h1>
    <CreateEvent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CreateEvent from './components/CreateEvent.vue'

export default defineComponent({
  name: 'App',
  components: {
    CreateEvent,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
  background-color: aliceblue;
}
</style>
