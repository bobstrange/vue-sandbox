<template>
  <label>{label}</label>
  <input :placeholder="label" class="field" />
</template>

<script setup lang="ts">
const { label = '' } = defineProps<{ label?: string }>()
</script>

<style scoped></style>
