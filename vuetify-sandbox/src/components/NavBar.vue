<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>vuetify sandbox</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      text
      rounded
      :to="{ name: link.routeName }"
      v-for="(link, index) in links"
      :key="index"
    >
      {{ link.label }}
    </v-btn>

  </v-app-bar>
</template>

<script>
import { navigationLinks } from '../router/index'

export default {
  data() {
    return {
      links: navigationLinks
    }
  },
}
</script>

<style>

</style>
