<template>
  <div class="my-checkbox">
    <input type="checkbox" v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'my-checkbox',
  props: {
    value: {}
  },
  watch: {
    value(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style></style>
