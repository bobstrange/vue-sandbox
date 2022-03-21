<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <UserList :users="users" /> -->
    <!-- <CompositionUserList :users="users" @deleteUser="userDeleteClicked" /> -->
    <div class="my-text">
      <h3>My Text</h3>
      <MyText v-model="myTextValue" />
      <p>Input value: {{ myTextValue }}</p>
    </div>
    <h3>My Checkbox</h3>
    <div class="my-checkbox">
      <MyCheckbox v-model="myCheckboxValue" />
      <p>Checked: {{ myCheckboxValue }}</p>
    </div>
    <div class="my-checkbox-group">
      <h3>My Checkbox Group</h3>
      <MyCheckboxGroup
        v-model="myCheckboxGroupValue"
        :options="myCheckboxGroupOptions"
      />
      <pre>{{ JSON.stringify(myCheckboxGroupValue, null, 8) }}</pre>
    </div>
    <div class="my-radio">
      <h3>MyRadio</h3>
      <MyRadio v-model="myRadioValue" orgValue="myRadio" />
      <p>Input: {{ myRadioValue }}</p>
    </div>
    <div class="my-radio-group">
      <h3>MyRadioGroup</h3>
      <MyRadioGroup
        v-model="myRadioGroupValue"
        :options="myRadioGroupOptions"
      />
      <pre>{{ JSON.stringify(myRadioGroupValue, null, 8) }}</pre>
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
import MyRadioGroup from '@/components/MyRadioGroup.vue'
// import { User } from '@/model/User'

export default defineComponent({
  name: 'App',
  components: {
    // UserList,
    // CompositionUserList
    MyText,
    MyCheckbox,
    MyCheckboxGroup,
    MyRadio,
    MyRadioGroup
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
    const myCheckboxGroupValue = reactive([])
    const myCheckboxGroupOptions = [
      { name: 'checkbox1' },
      { name: 'checkbox2' },
      { name: 'checkbox3' }
    ]

    const myRadioValue = ref('true')
    const myRadioGroupValue = ref('picked')
    const myRadioGroupOptions = [
      { name: 'radio1' },
      { name: 'radio2' },
      { name: 'radio3' }
    ]

    return {
      myTextValue,
      myCheckboxValue,
      myCheckboxGroupValue,
      myCheckboxGroupOptions,
      myRadioValue,
      myRadioGroupValue,
      myRadioGroupOptions
    }
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
