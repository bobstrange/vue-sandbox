<template>
  <Book>
    <template v-slot:title="slotProps">
      <h1>{{ slotProps.bookTitle }}</h1>
    </template>
  </Book>
</template>

<script setup lang="ts">
import Book from '@/components/Book.vue'
</script>

<style scoped></style>
