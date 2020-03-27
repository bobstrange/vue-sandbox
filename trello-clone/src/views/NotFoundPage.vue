<template>
  <div class="not-found-page">
    <v-container class="page-container">
      <h1 class="title-text">Not found</h1>
      <v-btn text color="white" class="link-btn" :to="{ name: 'BoardPage' }"
        >Go to top</v-btn
      >
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.not-found-page {
  background-color: #469961;
  min-height: 100vh;
}

.page-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title-text {
  color: white;
  font-size: 4rem;
  font-weight: 300;
}

.link-btn {
  margin-top: 3rem;
}
</style>
