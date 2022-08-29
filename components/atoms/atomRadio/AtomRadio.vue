<template>
  <div>
    <input
      :id="formControl.id"
      ref="input"
      type="radio"
      :name="formControl.nameGroup"
      :value="formControl.valueRadio"
      class="peer hidden"
    />
    <AtomLabel
      :title="formControl.title"
      :html-for="formControl.id"
      class-style="flex items-center mb-0 h-[114px] pl-[25px] w-full shadow-ssx border-solid border-gray-300 rounded-2xl border-2 hover:border-gray-800 peer-checked:border-primary transition-all
      "
    >
      <div
        v-if="formControl.iconName"
        class="
          w-[66px]
          h-[66px]
          bg-primary-light
          rounded-full
          mr-3
          flex
          items-center
          justify-center
        "
      >
        <img
          :src="getImgUrl(formControl.iconName)"
          alt=""
          class="h-8 w-[37px]"
        />
      </div>
      <div v-else>
        <img src="~/assets/icon/checked.svg" alt="checked" class="checked" />
        <img src="~/assets/icon/unCheck.svg" alt="uncheck" class="uncheck" />
      </div>
    </AtomLabel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomRadio',
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