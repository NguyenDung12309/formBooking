<template>
  <div>
    <AtomTitle title="What’s your project budget?" tag="h2" />
    <AtomParagraph
      title="Please select the project budget range you have in mind."
    />
    <div class="mt-[39px] grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-[21px]">
      <AtomRadio
        v-for="item in formControl"
        :key="item.id"
        :form-control="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MoleculeBudge',
  data() {
    return {
      formControl: [
        {
          title: '$5.000 - $10.000',
          id: 'pack1',
          valueRadio: 'pack1',
          nameGroup: 'budge',
        },
        {
          title: '$10.000 - $20.000',
          id: 'pack2',
          valueRadio: 'pack2',
          nameGroup: 'budge',
        },
        {
          title: '$20.000 - $50.000',
          id: 'pack3',
          valueRadio: 'pack3',
          nameGroup: 'budge',
        },
        {
          title: '$50.000 +',
          id: 'pack4',
          valueRadio: 'pack4',
          nameGroup: 'budge',
        },
      ],
    }
  },
})
</script>