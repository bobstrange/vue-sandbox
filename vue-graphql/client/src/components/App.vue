<template>
  <div id="app">
    <p class="username">{{ currentUser.username }}'s posts:</p>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.content }}</li>
    </ul>
    <div>
      <input v-model="newPostContent" />
      <button @click="addPost()">Add Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      currentUser: { username: "user" },
      posts: [],
      newPostContent: ""
    };
  },
  methods: {
    addPost() {
      this.posts.push({ content: this.newPostContent });
      this.newPostContent = "";
    }
  }
};
</script>
