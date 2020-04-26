<template>
  <div class="home">
    <BaseButton
      text="Submit"
      :isLoading="loading"
      iconRightName="paper-plane"
      iconLeftName="right-arrow"
      :isLoadingLeft="loadingLeft"
      :isLoadingRight="loadingRight"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import BaseButton from '@/components/BaseButton'
export default defineComponent({
  name: 'Home',
  components: { BaseButton },
  setup() {
    const isLoading = ref(false)
    const isLoadingLeft = ref(false)
    const isLoadingRight = ref(false)
    return { isLoading, isLoadingLeft, isLoadingRight }
  }
})
</script>
