<template>
  <footer
    class="h-[196px] border-0 border-t border-solid border-gray-400 mt-auto"
  >
    <div
      class="
        container
        h-full
        flex
        justify-center
        lg:justify-between
        items-center
      "
    >
      <div>
        <AtomLogo link-style="block text-center lg:text-left" size="small" />
        <AtomSpecialParagraph
          title="Copyright &#169; 2021 BRIX Templates &#124; All Rights Reserved"
        />
      </div>
      <div class="hidden lg:block">
        <MoleculeFormEmail />
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OrganismFooter',
})
</script>