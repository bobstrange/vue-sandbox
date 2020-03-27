<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.routeName"
        color="white"
        text
        rounded
        class="my-2"
        :to="{ name: link.routeName }"
      >
        {{ link.label }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} &dash; <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { navigationLinks } from '../router/index'

export default {
  data() {
    return {
      links: navigationLinks
    }
  }
}
</script>

<style>

</style>
