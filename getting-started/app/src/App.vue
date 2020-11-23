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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 56px);
}

</style>
