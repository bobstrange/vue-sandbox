<template>
  <div class="login">
    <p v-if="!loggedIn">Please login</p>
    <p v-else>You've already logged in</p>
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
.login {
  display: flex;
  align-items: center;
  flex-direction: column;
}

button {
  height: 30px;
  padding: 5px 10px;
  border-radius: 5px;
  border-style: none;
  background-color: gray;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

p {
  font-size: 20px;
}
</style>
