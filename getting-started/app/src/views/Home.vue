<template>
  <div class="home">
    <h1>Vue getting started</h1>
    <p>
      Hi, this is vue getting started page. You can login, logout, see any posts
      without login, and create/edit post if you've logged in.
    </p>

    <p v-if="!isLoggedIn">
      Have already account ? Please
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { injectAuthStore } from "@/store/authStore"
import { computed, defineComponent } from "vue"

export default defineComponent({
  name: "Home",
  setup() {
    const {
      getters: { loggedIn },
    } = injectAuthStore()
    const isLoggedIn = computed(() => loggedIn())
    return {
      isLoggedIn,
    }
  },
})
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  font-weight: bold;
}
</style>
