<template>
  <header class="h-[126px]">
    <nav
      class="
        container
        flex
        items-center
        justify-center
        sm:justify-between
        h-full
      "
    >
      <AtomLogo />
      <AtomButton title="Clone now" class-style="hidden sm:block" />
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OrganismHeader',
})
</script>
