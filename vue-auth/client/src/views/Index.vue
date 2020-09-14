<template>
  <div class="home">
    <h1>Hi there!</h1>
    <div>
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

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style></style>
