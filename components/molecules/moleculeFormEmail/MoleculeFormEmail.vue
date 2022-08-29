<template>
  <v-form>
    <AtomInputItem class-style=" pl-[31px] pr-[17px] w-[507px] py-3">
      <AtomInputText placeholder="Enter your email" />
      <AtomButton type="submit" size="small" title="Subscribe" />
    </AtomInputItem>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MoleculeFormEmail',
})
</script>