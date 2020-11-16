<template>
  <div>
    <div class="title">{{ post.title }}</div>
    <div class="text">{{ post.text }}</div>
    <div class="posted-by">{{ email }}</div>
  </div>
</template>

<script lang="ts">
import { computed, PropType } from "vue";
import { defineComponent } from "vue";

import { Post } from "../models/post";
import { injectUsers } from "../composables/users";

export default defineComponent({
  name: "PostDetail",
  setup(props) {
    const { users, reloadUsers } = injectUsers();
    console.log(users);
    const email = computed(() => {
      console.log("props ", props.post);
      const user = users.value.find(user => user.id === props.post.userId);
      console.log("users ", users);
      console.log("user ", user);
      return user?.email;
    });
    return { email };
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true
    }
  }
});
</script>

<style scoped></style>
