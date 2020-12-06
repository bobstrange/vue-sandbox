<template>
  <div class="post-list">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <PostItem :post="post" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { defineComponent } from 'vue'

import PostItem from '../components/PostItem.vue'
import { Post } from '../models/post'

export default defineComponent({
  name: 'PostList',
  setup() {
    return {}
  },
  props: {
    posts: {
      type: Object as PropType<Post[]>,
      required: true,
    },
  },
  components: { PostItem },
})
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 30px;
}

li:last-child {
  margin-bottom: 0;
}
</style>
