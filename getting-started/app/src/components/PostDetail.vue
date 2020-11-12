<template>
  <div>
    <div class="title">{{ post.title }}</div>
    <div class="text">{{ post.text }}</div>
    <div class="posted-by">{{ email }}</div>
  </div>
</template>

<script lang="ts">
import { computed, inject, PropType, Ref } from "vue"
import { defineComponent } from "vue"

import { Post } from "../models/post"
import { User } from "../models/user"

export default defineComponent({
  name: "PostDetail",
  setup(props) {
    const [users, _] = inject("usersContext")
    console.log(users)
    const email = computed(() => {
      console.log("props ", props.post)
      const user = users.find((user) => user.id === props.post.userId)
      console.log("users ", users)
      console.log("user ", user)
      return user?.email
    })
    return { email }
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
})
</script>

<style scoped></style>
