<template>
  <div class="home">
    <h1>Hi there!</h1>
    <div v-if="isLoggedIn">
      To use this app you'll need to
      <router-link :to="{ name: 'login' }">
        Login
      </router-link>
      or
      <router-link :to="{ name: 'register' }">
        Register
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthentication } from "../use/useAuthentication";

export default defineComponent({
  setup() {
    const { isLoggedIn } = useAuthentication();
    return {
      isLoggedIn,
    };
  },
});
</script>

<style></style>
