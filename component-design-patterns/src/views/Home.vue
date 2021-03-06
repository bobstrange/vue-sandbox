<template>
  <div class="home">
    <MoviePoster
      title="Test Title"
      :watched="true"
      :image="require('@/assets/logo.png')"
    />
    <BaseButton></BaseButton>
  </div>
</template>

<script setup lang="ts">
import MoviePoster from '@/components/MoviePoster.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>
