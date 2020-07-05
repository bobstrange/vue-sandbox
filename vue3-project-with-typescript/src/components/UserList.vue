<template>
  <div>
    <ul>
      <li v-for="user of users" :key="user.id">
        Name: {{ user.name }} (@{{ user.username }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
})
</script>

<style></style>
