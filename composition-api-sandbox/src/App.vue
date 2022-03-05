<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <UserList :users="users" /> -->
    <!-- <CompositionUserList :users="users" @deleteUser="userDeleteClicked" /> -->
    <div class="my-text">
      <h3>My Text</h3>
      <MyText v-model="myTextValue" />
      <p>Input value: {{ MyTextValue }}</p>
    </div>
    <div class="my-checkbox">
      <h3>My Checkbox</h3>
      <MyCheckbox v-model="myCheckboxValue" />
      <p>Checked: {{ myCheckboxValue }}</p>
    </div>
    <div class="my-checkbox-group">
      <h3>My Checkbox Group</h3>
      <MyCheckboxGroup v-model="myCheckboxGroupValue" />
      <pre>{{ JSON.stringify(myCheckboxGroupValue, null, 8) }}</pre>
    </div>
    <div class="my-radio">
      <h3>MyRadio</h3>
      <MyRadio v-model="myRadioValue" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive } from '@vue/composition-api'
// import UserList from './components/UserList.vue'
// import CompositionUserList from '@/components/CompositionUserList.vue'
import MyText from '@/components/MyText.vue'
import MyCheckbox from '@/components/MyCheckbox.vue'
import MyCheckboxGroup from '@/components/MyCheckboxGroup.vue'
import MyRadio from '@/components/MyRadio.vue'
// import { User } from '@/model/User'

export default defineComponent({
  name: 'App',
  components: {
    // UserList,
    // CompositionUserList
    MyText,
    MyCheckbox,
    MyCheckboxGroup,
    MyRadio
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
    const myCheckboxGroupValue = reactive([
      { name: 'checkbox1', value: false },
      { name: 'checkbox2', value: false },
      { name: 'checkbox3', value: false }
    ])

    const myRadioValue = ref('true')

    return { myTextValue, myCheckboxValue, myCheckboxGroupValue, myRadioValue }
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
