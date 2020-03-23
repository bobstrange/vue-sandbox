<template>
  <div class="user-list">
    <h1>Users</h1>
    <div class="search-user">
      <div class="search-user__search">
        <label class="search-user__label" for="search">Search User:</label>
        <input
          class="search-user__text"
          id="search"
          type="text"
          placeholder="Search ..."
          v-model="searchText"
        />
      </div>
      <div class="search-user__result">
        {{ searchResult }}
      </div>
    </div>
    <ul>
      <li v-for="user in users" :key="user.id">
        <span class="user__id">id: {{ user.id }}</span>
        <span class="user__email">email: {{ user.email }}</span>
        <span class="user__name"
          >name: {{ user.first_name }} {{ user.last_name }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      searchText: ''
    }
  },
  computed: {
    searchResult() {
      const searchText = this.searchText
      if (searchText.length === 0) {
        return {}
      }
      return this.users.find(user => {
        return (
          user.first_name.includes(searchText) ||
          user.last_name.includes(searchText) ||
          user.email.includes(searchText)
        )
      })
    }
  }
})
</script>

<style scoped>
.search-user__text {
  border-radius: 10rem;
  padding: 0.2rem 0.5rem;
}

.search-user__label {
  margin-right: 1rem;
}

ul {
  list-style: none;
}

li {
  text-align: left;
}

li:not(:last-child) {
  margin-bottom: 1rem;
}

.user__id,
.user__email,
.user__name {
  display: inline-block;
  margin-left: 0.5rem;
  text-overflow: ellipsis;
}

.user__id {
  width: 2.5rem;
}
.user__email {
  width: 20rem;
}
.user__name {
  width: 20rem;
}
</style>
