<template>
  <NuxtLink :to="path" class="outline-none border-none" :class="[linkStyle]">
    <img
      src="~/assets/images/Logo.png"
      alt="Logo"
      :class="[imageStyle, getSizeProps]"
    />
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TypeGroup } from '~/common/type'

interface props {
  options: Omit<TypeGroup, 'textSize' | 'level'>
}
export default defineComponent({
  name: 'AtomLogo',
  props: {
    path: {
      type: String,
      default() {
        return '/'
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator(value: string) {
        return ['medium', 'small'].includes(value)
      },
    },
    linkStyle: {
      type: String,
      default() {
        return ''
      },
    },
    imageStyle: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data(): props {
    return {
      options: {
        size: {
          medium: 'h-[40px]',
          small: 'h-[35px]',
        },
      },
    }
  },
  computed: {
    getSizeProps(): String {
      return this.size in this.options.size
        ? this.options.size[this.size].toLowerCase()
        : ''
    },
  },
})
</script>
