<template>
  <div class="book">
    <slot name="title" :bookTitle="bookTitle" />
  </div>
</template>

<script setup lang="ts">
const bookTitle = 'Child Providing data'
</script>

<style scoped></style>
