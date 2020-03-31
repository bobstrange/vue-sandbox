<template>
  <div class="user-list">
    <h1>Users</h1>
    <button class="fetch-user" @click="fetchUsers">Fetch Users</button>
    <div class="search-user">
      <div class="search-user__search">
        <label class="search-user__label" for="search">
          Search User:
        </label>
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
      <li v-for="user in userList" :key="user.id">
        <button class="user__delete-button" @click="deleteUser(user.id)">
          Delete
        </button>
        <span class="user__id">id: {{ user.id }}</span>
        <span class="user__email">email: {{ user.email }}</span>
        <span class="user__name"
          >name: {{ user.first_name }} {{ user.last_name }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  defineComponent,
  onMounted,
  watch
} from '@vue/composition-api'

import { User } from '@/model/User'

type Props = {
  users: User[]
}

export default defineComponent({
  setup(props: Props, context) {
    /* lifecycle hook */
    onMounted(() => {
      console.log('On mounted called')
    })

    /**
     *  vue2
     *  data() {
     *    return {
     *      searchText: ''
     *    }
     *  }
     */
    const searchText = ref<string>('')
    const userList = ref<User[]>(props.users)

    /**
     * vue2
     * computed: {
     *   searchResult() {...}
     * }
     */
    const searchResult = computed<User | undefined>((): User | undefined => {
      /**
       * searchTextは、reactive propertyなので、値は`.value`で取得する
       */
      const search = searchText.value
      if (search.length === 0) {
        return
      }

      return userList.value.find(user => {
        return (
          user.first_name.includes(search) ||
          user.last_name.includes(search) ||
          user.email.includes(search)
        )
      })
    })

    function fetchUsers(): void {
      context.root.$store.dispatch('user/fetchUsers')
    }
    /*
     * vue2
     * method: {
     *  deleteUser(id) { ... }
     * }
     */
    function deleteUser(id: number): void {
      /**
       * setup(props, context)の第二引数 contextは、attrs, slots, emitなど
       * が存在する
       */
      context.emit('deleteUser', id)
    }

    /* watcher */
    watch<User[]>(
      /* 第一引数に、watchしたいもののrefもしくは、watchしたいものを返す即時関数を渡す */
      () => props.users,
      /* 第二引数に、watchの処理を渡す */
      (curr: User[], prev: User[]) => {
        console.log('previous users: ', prev)
        console.log('current users: ', curr)
        userList.value = curr
      }
    )

    /**
     * Templateで使用するdataや、methodを返す
     */
    return {
      searchText,
      userList,
      searchResult,
      deleteUser,
      fetchUsers
    }
  },
  props: {
    users: {
      type: Array,
      default: () => []
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

.fetch-user {
  margin-bottom: 2rem;
  border-radius: 5rem;
  border: none;
  padding: 0.5rem 2rem;
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

.user__delete-button {
  border-radius: 2px;
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
