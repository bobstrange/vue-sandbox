<template>
  <div class="users">
    <h1>User</h1>
    {{ user.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount } from '@vue/composition-api'
import { getModule } from 'vuex-module-decorators'
import UserStoreModule from '@/store/user.store'
import { User } from '@/models/User'

export default defineComponent({
  name: 'UserPage',
  setup(props, { root }) {
    const userStore = getModule(UserStoreModule, root.$store)
    onBeforeMount(() => {
      userStore.fetchUsers()
    })
    const user = computed<User | {}>(() => {
      return userStore.getUser(parseInt(root.$route.params.id)) || {}
    })
    return {
      user
    }
  }
})
</script>

<style lang="scss" scoped></style>
