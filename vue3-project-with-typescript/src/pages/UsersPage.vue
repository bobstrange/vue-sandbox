<template>
  <h1>Users Page</h1>
  <UserList :users="users" />
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'

import UserList from '../components/UserList.vue'
import { fetchUsers } from '../apis/userClient'
import { User } from '../types/User'

export default defineComponent({
  name: 'Users Page',
  setup() {
    const users = ref<User[]>([])
    onBeforeMount(async () => {
      const response = await fetchUsers()
      users.value = response.data
    })
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
