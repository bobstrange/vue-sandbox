<template>
  <BaseLayout>
    <template v-slot:header>
      <h1>Page Title</h1>
    </template>
    <template v-slot:default>
      <p>Page content</p>
    </template>
    <template v-slot:sidebar>
      <ul>
        <li>Link 01</li>
        <li>Link 02</li>
      </ul></template
    >
    <template v-slot:footer>
      Footer
    </template>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
</script>

<style scoped></style>
