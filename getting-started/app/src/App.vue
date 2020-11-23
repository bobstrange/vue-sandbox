<template>
  <NavBar />
  <router-view class="router-view" />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue"
import NavBar from "@/components/NavBar.vue"
import { useCurrentUser, CurrentUserStoreKey } from "./composables/currentUser"
import { useUsers, UsersStoreKey } from "./composables/users"

export default defineComponent({
  name: "App",
  setup() {
    provide(CurrentUserStoreKey, useCurrentUser())
    provide(UsersStoreKey, useUsers())
  },
  components: {
    NavBar
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

.router-view {
  max-width: 800px;
  margin: auto;
}
</style>
