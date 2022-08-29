<template>
  <input
    :id="id"
    v-model="textData"
    spellcheck="false"
    :placeholder="placeHolder"
    class="
      h-5
      mr-5
      outline-none
      placeholder-secondary
      text-base
      leading-5
      w-full
    "
    :class="classStyle"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomInputText',
  props: {
    id: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
      default() {
        return 'enter here'
      },
    },
    classStyle: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      textData: '',
    }
  },
})
</script>
