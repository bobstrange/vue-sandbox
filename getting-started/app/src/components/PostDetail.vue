<template>
  <div class="post-detail">
    <div class="title">{{ post.title }}</div>
    <div class="text">{{ post.text }}</div>
    <div class="posted-by">{{ email }}</div>
  </div>
</template>

<script lang="ts">
import { computed, PropType } from "vue"
import { defineComponent } from "vue"

import { Post } from "../models/post"
import { injectUsers } from "../composables/users"

export default defineComponent({
  name: "PostDetail",
  setup(props) {
    const { users, reloadUsers } = injectUsers()
    const screenName = computed(() => {
      const user = users.value.find((user) => user.id === props.post.userId)
      return user?.screenName
    })
    return { screenName }
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
})
</script>

<style scoped>
.post-detail {
  padding: 20px;
  text-align: left;
  border-style: dotted;
  border-radius: 10px;
  border-width: 1px;
}

.title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.text {
  font-size: 1rem;
  margin-bottom: 20px;
}

.posted-by {
  text-align: right;
}
</style>
