<template>
  <label
    :for="htmlFor"
    class="leading-5 font-medium text-lg text-gray-800 mb-[18px]"
    :class="classStyle"
  >
    <slot />
    <span>
      {{ title }}
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomLabel',
  props: {
    title: {
      type: String,
      required: true,
    },
    htmlFor: {
      type: String,
      default() {
        return ''
      },
    },
    classStyle: {
      type: String,
      default() {
        return ''
      },
    },
  },
})
</script>