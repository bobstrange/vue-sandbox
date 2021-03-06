<template>
  <div class="home">
    <MoviePoster
      title="Test Title"
      :watched="true"
      :image="require('@/assets/logo.png')"
    />
  </div>
</template>

<script setup lang="ts">
import MoviePoster from '../components/MoviePoster.vue'
</script>
