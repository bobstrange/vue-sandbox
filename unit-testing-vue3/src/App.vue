<template>
  <div class="app-container">
    <AppHeader :loggedIn="loggedIn" :logout="logout" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import { registerAuthStore } from './composables/authStore'

export default defineComponent({
  setup() {
    const authStore = registerAuthStore()
    return {
      loggedIn: authStore.loggedIn,
      logout: authStore.logout,
    }
  },
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
