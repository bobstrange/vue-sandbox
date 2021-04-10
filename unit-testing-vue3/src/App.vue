<template>
  <AppHeader />
  <router-view />
</template>

<script lang="ts">
import AppHeader from '@/components/AppHeader.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  components: { AppHeader },
})
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
