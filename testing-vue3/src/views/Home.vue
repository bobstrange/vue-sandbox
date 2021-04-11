<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SimpleCounter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SimpleCounter from '@/components/SimpleCounter.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    SimpleCounter,
  },
})
</script>
