<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Users' }">Users</router-link> |
    <router-link :to="{ name: 'Posts' }">Posts</router-link>
  </div>
  <router-view class="router-view" />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue"
import { useCurrentUser, CurrentUserStoreKey } from "./composables/currentUser"
import { useUsers, UsersStoreKey } from "./composables/users"

export default defineComponent({
  name: "App",
  setup() {
    provide(CurrentUserStoreKey, useCurrentUser())
    provide(UsersStoreKey, useUsers())
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

.router-view {
  max-width: 800px;
  margin: auto;
}
</style>
