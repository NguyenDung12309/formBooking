<template>
  <component
    :is="tag"
    class="font-bold"
    :class="[classStyle, getHeadingLevel]"
    >{{ title }}</component
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HeadingType } from '~/common/type'
interface props {
  level: HeadingType
}

export default defineComponent({
  name: 'AtomTitle',
  props: {
    tag: {
      type: String,
      required: true,
    },
    classStyle: {
      type: String,
      default() {
        return ''
      },
    },
    title: {
      type: String,
      required: true,
    },
  },
  data(): props {
    return {
      level: {
        h1: '  leading-[46px] text-[34px] ',
        h2: ' text-2xl leading-[35px]',
      },
    }
  },
  computed: {
    getHeadingLevel(): String {
      return this.tag in this.level ? this.level[this.tag] : ''
    },
  },
})
</script>