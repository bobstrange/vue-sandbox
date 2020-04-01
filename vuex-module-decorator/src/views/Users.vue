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

<script>
import { defineComponent, computed, onBeforeMount } from '@vue/composition-api'
import { User } from '@/models/User'

export default defineComponent({
  setup(props, { root }) {
    onBeforeMount(() => {
      root.$store.dispatch['user/fetchUsers']
    })
    const users = computed(() => root.$store.state['user/users'])
    return { users }
  }
})
</script>

<style lang="scss" scoped></style>>
