<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button v-show="loggedIn">Logout</button>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  setup() {
    const loggedIn = ref(false)
    return { loggedIn }
  },
})
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
