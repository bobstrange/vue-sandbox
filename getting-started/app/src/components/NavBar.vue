<template>
  <nav class="nav-bar">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Posts' }">Posts</router-link>
    <router-link :to="{ name: 'Login' }" class="button">Login</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {

    return {}
  }
})
</script>

<style lang="scss" scoped>

.nav-bar {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.2em 1em;
  background: #16c0b0;
}

a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
}

a:visited {
  color: #2c3e50;
}


.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  font-size: 1em;
  color: white;
  border: none;
  outline: none;
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #2c3e50;
}
</style>
