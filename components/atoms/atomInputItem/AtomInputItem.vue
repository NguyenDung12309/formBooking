<template>
  <div
    class="
      flex
      items-center
      shadow-md
      border border-solid border-gray-300
      rounded-full
      focus-within:border-primary
    "
    :class="classStyle"
  >
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomInputItem',
  props: {
    classStyle: {
      type: String,
      default() {
        return ''
      },
    },
  },
})
</script>