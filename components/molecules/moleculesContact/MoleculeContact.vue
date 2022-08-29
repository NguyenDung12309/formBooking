<template>
  <div>
    <AtomTitle title="Contact details" tag="h2" />
    <AtomParagraph title="Lorem ipsum dolor sit amet consectetur adipisc." />
    <div class="mt-[39px] grid grid-cols-2 gap-x-7 gap-y-11">
      <AtomInputGroup
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
          title: 'Name',
          placeholder: 'Full name',
          iconName: 'user',
          id: 'fullName',
        },
        {
          title: 'Email',
          placeholder: 'Email address ',
          iconName: 'email',
          id: 'emailAddress',
        },
        {
          title: 'Phone Number',
          placeholder: 'Phone number',
          iconName: 'phone',
          id: 'phoneNumber',
        },
        {
          title: 'Company',
          placeholder: 'Company Name',
          iconName: 'company',
          id: 'companyName',
        },
      ],
    }
  },
})
</script>