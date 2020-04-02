<template>
  <div class="users">
    <h1>Users</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>User Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>
          <router-link :to="{ name: 'User', params: { id: user.id } }">
            {{ user.name }}
          </router-link>
        </td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount } from '@vue/composition-api'
import { getModule } from 'vuex-module-decorators'
import UserStoreModule from '@/store/user.store'
import { User } from '@/models/User'

export default defineComponent({
  name: 'UsersPage',
  setup(props, { root }) {
    const userStore = getModule(UserStoreModule, root.$store)
    onBeforeMount(() => {
      userStore.fetchUsers()
    })
    const users = computed<User[]>(() => {
      return userStore.users
    })
    return { users }
  }
})
</script>

<style lang="scss" scoped>
th,
td {
  font-size: 1.6rem;
  text-align: left;
}
</style>
