<template>
  <v-app class="app">
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({
    //
  })
})
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 62.5%;
}
</style>
