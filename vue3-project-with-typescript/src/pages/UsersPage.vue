<template>
  <h1>Users Page</h1>
  <UserList :users="users" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import UserList from '../components/UserList.vue'

export default defineComponent({
  name: 'Users Page',
  setup() {
    const users = ref([])
    return {
      users
    }
  },
  components: {
    UserList
  }
})
</script>

<style></style>
