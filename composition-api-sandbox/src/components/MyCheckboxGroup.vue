<template>
  <div class="my-checkbox-group">
    <div class="checkboxes" v-for="({ name }, index) in options" :key="index">
      <label>{{ name }}</label>
      <MyCheckbox v-model="value[index]" />
    </div>
  </div>
</template>

<script>
import MyCheckbox from '@/components/MyCheckbox.vue'

export default {
  name: 'my-checkbox-group',
  components: {
    MyCheckbox
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      required: true
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
