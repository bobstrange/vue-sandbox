<template>
  <div class="app-container">
    <AppHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'

export default defineComponent({
  components: { AppHeader },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
