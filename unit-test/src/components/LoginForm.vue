<template>
  <form @submit.prevent="onSubmit">
    <!-- テストのために、data-test属性を設定して class名やid名に依存しないようにする-->
    <input type="text" v-model="name" data-test="name-input" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', { name: this.name })
    }
  }
}
</script>
