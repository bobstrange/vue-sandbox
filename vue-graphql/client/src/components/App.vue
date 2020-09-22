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
import gql from "graphql-tag";
const CURRENT_USER = gql`
  query {
    currentUser {
      id
      username
    }
  }
`;

const POSTS_BY_USER = gql`
  query($userId: String!) {
    postsByUser(userId: $userId) {
      id
      content
    }
  }
`;

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
  },
  apollo: {
    currentUser: CURRENT_USER,
    posts: {
      query: POSTS_BY_USER,
      variables() {
        return { userId: this.currentUser.id };
      },
      update(data) {
        return data.postsByUser;
      }
    }
  }
};
</script>
