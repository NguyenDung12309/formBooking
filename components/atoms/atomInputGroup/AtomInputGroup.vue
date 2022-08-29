<template>
  <div class="flex flex-col">
    <AtomLabel :title="formControl.title" :html-for="formControl.id" />
    <AtomInputItem
      class-style="
        shadow-sx
        h-[66px]
        items-center
        px-5
        transition-colors"
    >
      <AtomInputText
        :id="formControl.id"
        :placeholder="formControl.placeholder"
      />
      <img
        :alt="formControl.id"
        :src="getImgUrl(formControl.iconName)"
        class="transitionFocus transition-opacity"
      />
    </AtomInputItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomInputGroup',
  props: {
    formControl: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImgUrl(pic: String) {
      return require('~/assets/icon/' + pic + '.svg')
    },
  },
})
</script>