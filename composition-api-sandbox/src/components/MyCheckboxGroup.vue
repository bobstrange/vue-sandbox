<template>
  <div class="my-checkbox-group">
    <div class="checkboxes" v-for="(data, index) in value" :key="index">
      <label>{{ data.name }}</label>
      <MyCheckbox v-model="value[index].value" />
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
    value: {
      type: Array
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
