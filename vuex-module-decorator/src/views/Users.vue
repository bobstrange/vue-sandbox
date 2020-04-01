<template>
  <div class="users">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
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
ul {
  list-style: none;
}

li {
  font-size: 1.6rem;
  text-align: left;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
