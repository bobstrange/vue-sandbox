<template>
  <div class="about">
    <h1>Please login</h1>
    <button v-show="!loggedIn" @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { useAuth } from '@/composables/authStore'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { loggedIn, login, logout } = useAuth()
    return {
      loggedIn,
      login,
      logout,
    }
  },
})
</script>

<style scoped>
button {
  height: 30px;
  padding: 5px 10px;
  border-radius: 5px;
  border-style: none;
  background-color: gray;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-right: 20px;
}
</style>
