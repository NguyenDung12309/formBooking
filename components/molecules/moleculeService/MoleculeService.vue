<template>
  <div>
    <AtomTitle title="Our services" tag="h2" />
    <AtomParagraph title="Please select which service you are interested in" />
    <div class="mt-[39px] grid grid-cols-2 gap-x-7 gap-y-[21px]">
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
  name: 'MoleculeContact',
  data() {
    return {
      formControl: [
        {
          title: 'Development',
          iconName: 'webDevelop',
          id: 'development',
          valueRadio: 1,
          nameGroup: 'service',
        },
        {
          title: 'Web Design',
          iconName: 'webDesign',
          id: 'webDesign',
          valueRadio: 2,
          nameGroup: 'service',
        },
        {
          title: 'Marketing',
          iconName: 'marketing',
          id: 'marketing',
          valueRadio: 3,
          nameGroup: 'service',
        },
        {
          title: 'Other',
          iconName: 'setting',
          id: 'otherService',
          valueRadio: 4,
          nameGroup: 'service',
        },
      ],
    }
  },
})
</script>