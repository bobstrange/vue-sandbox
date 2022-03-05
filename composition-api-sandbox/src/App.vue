<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <UserList :users="users" /> -->
    <!-- <CompositionUserList :users="users" @deleteUser="userDeleteClicked" /> -->
    <MyText v-model="MyTextValue" />
    <p>Input value: {{ MyTextValue }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
// import UserList from './components/UserList.vue'
// import CompositionUserList from '@/components/CompositionUserList.vue'
import MyText from '@/components/MyText.vue'
// import { User } from '@/model/User'

export default defineComponent({
  name: 'App',
  components: {
    // UserList,
    // CompositionUserList
    MyText
  },
  setup(props, { root }) {
    // const users = computed<User[]>(() => {
    //   return root.$store.getters['user/getUsers']
    // })
    // function userDeleteClicked(id: number) {
    //   root.$store.dispatch('user/deleteUser', id)
    // }
    // return {
    //   users,
    //   userDeleteClicked
    // }

    const MyTextValue = ref('default')
    return { MyTextValue }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
