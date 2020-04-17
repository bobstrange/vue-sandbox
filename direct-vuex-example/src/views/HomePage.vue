<template>
  <div class="home">
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.username }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from '@vue/composition-api'
import { fetchUsers } from '@/services/user'
import { User } from '@/models/User'

export default defineComponent({
  name: 'HomePage',
  setup(_, { root }) {
    const users = ref<User[]>([])
    onBeforeMount(async () => {
      // const usersData = await fetchUsers()
      // users.value = usersData
    })
    return { users }
  }
})
</script>
