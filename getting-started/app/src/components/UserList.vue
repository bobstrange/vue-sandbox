<template>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.screenName }}</li>
  </ul>
</template>

<script lang="ts">
import { PropType } from "vue"
import { defineComponent } from "vue"
import { User } from "../models/user"

export default defineComponent({
  name: "UserList",
  setup(props) {
    return {}
  },
  props: {
    users: {
      type: Object as PropType<User[]>,
      default: [],
    },
  },
})
</script>

<style scoped></style>
