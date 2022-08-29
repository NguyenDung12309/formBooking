<template>
  <div id="app">
    <div class="mt-[52px] mb-[100px] container">
      <div class="mb-[42px]">
        <AtomTitle
          tag="h1"
          title=" Get a project quote"
          class-style="mb-3 text-center"
        />
        <AtomParagraph
          title=" Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed."
          class-style="mx-auto text-center w-[566px]"
        />
      </div>

      <v-form class="max-w-[689px] mx-auto">
        <div
          class="
            px-[51px]
            pb-[80px]
            shadow-lg
            border border-solid border-gray-300
            rounded-[34px]
          "
        >
          <div
            class="
              h-[99px]
              mb-[64px]
              border-0 border-b border-solid border-gray-400
            "
          ></div>
          <!-- <MoleculeContact /> -->
          <!-- <MoleculeService /> -->
          <MoleculeBudge />
        </div>
        <AtomButton title="Next Step" class-style="float-right mt-[31px]" />
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookForm',
}
</script>
