<template>
  <div class="home">
    <AppHeader />
    <RandomNumber />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'
import RandomNumber from '@/components/RandomNumber'

export default {
  name: 'Home',
  components: {
    AppHeader,
    RandomNumber
  }
}
</script>
