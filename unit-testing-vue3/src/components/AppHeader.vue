<template>
  <div>
    <button v-show="loggedIn">Logout</button>
  </div>
</template>

<script setup>
import { reactive, toRefs } from '@vue/reactivity'

const state = reactive({ loggedIn: false })

const { loggedIn } = toRefs(state)
</script>
