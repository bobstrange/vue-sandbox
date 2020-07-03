<template>
  <nav>
    <RouterLink :to="{ name: 'PostsPage' }">Posts</RouterLink> |
    <RouterLink :to="{ name: 'UsersPage' }">Users</RouterLink>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style></style>
