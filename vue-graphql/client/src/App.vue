<template>
  <div>
    <p class="username">{{ currentUser.username }}'s posts:</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.content }}
      </li>
    </ul>
    <div>
      <input v-model="newPostContent" />
      <button @click="addPost()">AddPost</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const currentUser = ref<{ username: string }>({
      username: "user",
    });
    const posts = ref<{ content: string }[]>([]);
    const newPostContent = ref<string>("");
    const addPost = () => {
      posts.value.push({ content: newPostContent.value });
      newPostContent.value = "";
    };

    return {
      currentUser,
      posts,
      newPostContent,
      addPost,
    };
  },
});
</script>
