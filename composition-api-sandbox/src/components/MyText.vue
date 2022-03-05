<template>
  <div class="my-checkbox">
    <input type="text" v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'my-checkbox',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    value(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style></style>
