<template>
  <div class="">
    <TheNav />
    <router-view class="page">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNav from './components/TheNav.vue';

export default defineComponent({
  name: "App",
  components: {
    TheNav
  },
});
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>
