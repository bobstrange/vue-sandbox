<template>
  <div>
    <button v-show="loggedIn" test-data="logout-button">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    }
  }
}
</script>
