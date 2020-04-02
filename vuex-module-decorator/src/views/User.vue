<template>
  <div class="users">
    <h1>User</h1>
    <div v-if="user">
      {{ user.name }}
    </div>
    <div v-else>
      Unexist user
    </div>
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
    const user = computed<User | undefined>(() => {
      return userStore.getUser(parseInt(root.$route.params.id)) || undefined
    })
    return {
      user
    }
  }
})
</script>

<style lang="scss" scoped></style>
