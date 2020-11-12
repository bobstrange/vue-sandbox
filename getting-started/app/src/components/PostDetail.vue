<template>
  <div>
    <div class="title">{{ post.title }}</div>
    <div class="text">{{ post.text }}</div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { defineComponent } from "vue";

import { Post } from "../models/post";

export default defineComponent({
  name: "PostDetail",
  setup() {
    return {};
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
