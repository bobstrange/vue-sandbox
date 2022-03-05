<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <UserList :users="users" /> -->
    <!-- <CompositionUserList :users="users" @deleteUser="userDeleteClicked" /> -->
    <div class="my-text">
      <MyText v-model="myTextValue" />
      <p>Input value: {{ MyTextValue }}</p>
    </div>
    <div class="my-checkbox">
      <MyCheckbox v-model="myCheckboxValue" />
      <p>Checked: {{ myCheckboxValue }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
// import UserList from './components/UserList.vue'
// import CompositionUserList from '@/components/CompositionUserList.vue'
import MyText from '@/components/MyText.vue'
import MyCheckbox from '@/components/MyCheckbox.vue'
// import { User } from '@/model/User'

export default defineComponent({
  name: 'App',
  components: {
    // UserList,
    // CompositionUserList
    MyText,
    MyCheckbox
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

    const myTextValue = ref('default')
    const myCheckboxValue = ref(false)

    return { myTextValue, myCheckboxValue }
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
