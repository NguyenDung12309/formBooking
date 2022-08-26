<template>
  <div id="app">
    <header class="h-[126px]">
      <nav
        class="container flex items-center justify-center sm:justify-between h-full"
      >
        <NuxtLink to="/">
          <img src="~/assets/images/Logo.png" class="xl:h-10 h-auto" />
        </NuxtLink>
        <v-btn
          class="shadow-sm hidden sm:block max-w-[171px] bg-primary hover:bg-primary-bold py-5 px-10 border-0 border-b border-solid border-primary rounded-full h-auto"
        >
          <span class="text-white leading-5 text-lg font-bold normal-case"
            >Clone now</span
          >
        </v-btn>
      </nav>
    </header>
    <div class="mt-[52px] mb-[100px] container">
      <div class="mb-[42px]">
        <h1
          class="font-bold leading-[46px] text-[34px] text-center mb-3 text-gray-800"
        >
          Get a project quote
        </h1>
        <p
          class="max-w-[566px] leading-[30px] text-lg mx-auto text-center text-secondary"
        >
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </p>
      </div>
      <v-form
        class="px-[51px] pb-[80px] shadow-lg border border-solid border-gray-300 max-w-[689px] mx-auto rounded-[34px]"
      >
        <div
          class="h-[99px] mb-[64px] border-0 border-b border-solid border-gray-400"
        >
          <div class=""></div>
        </div>
        <div>
          <h3 class="font-bold text-2xl leading-[35px] text-gray-800">
            Contact details
          </h3>
          <p class="leading-[30px] text-lg text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisc.
          </p>
          <div class="mt-[39px] grid grid-cols-2 gap-x-7 gap-y-11">
            <div class="flex flex-col">
              <label
                for="nameUser"
                class="leading-5 font-medium text-lg text-gray-800 mb-[18px]"
                >Name</label
              >
              <div
                class="border border-solid border-gray-300 shadow-sx rounded-full h-[66px] flex items-center px-5 pointer-events-none focus-within:border-primary transition-colors"
              >
                <input
                  id="nameUser"
                  type="text"
                  placeholder="Enter Name"
                  class="placeholder-secondary w-full mr-5 outline-none pointer-events-auto"
                />
                <img
                  src="~/assets/icon/user.svg"
                  alt=""
                  class="filter-svg transition-opacity"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <label
                for="nameUser"
                class="leading-5 font-medium text-lg text-gray-800 mb-[18px]"
                >Name</label
              >
              <div
                class="border border-solid border-gray-300 shadow-sx rounded-full h-[66px] flex items-center px-5 pointer-events-none focus-within:border-primary transition-colors"
              >
                <input
                  id="nameUser"
                  type="text"
                  placeholder="Enter Name"
                  class="placeholder-secondary w-full mr-5 outline-none pointer-events-auto"
                />
                <img
                  src="~/assets/icon/user.svg"
                  alt=""
                  class="filter-svg transition-opacity"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <label
                for="nameUser"
                class="leading-5 font-medium text-lg text-gray-800 mb-[18px]"
                >Name</label
              >
              <div
                class="border border-solid border-gray-300 shadow-sx rounded-full h-[66px] flex items-center px-5 pointer-events-none focus-within:border-primary transition-colors"
              >
                <input
                  id="nameUser"
                  type="text"
                  placeholder="Enter Name"
                  class="placeholder-secondary w-full mr-5 outline-none pointer-events-auto"
                />
                <img
                  src="~/assets/icon/user.svg"
                  alt=""
                  class="filter-svg transition-opacity"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <label
                for="nameUser"
                class="leading-5 font-medium text-lg text-gray-800 mb-[18px]"
                >Nameadsasd</label
              >
              <div
                class="border border-solid border-gray-300 shadow-sx rounded-full h-[66px] flex items-center px-5 pointer-events-none group focus-within:border-primary transition-colors"
              >
                <input
                  id="nameUser"
                  type="text"
                  placeholder="Enter Name"
                  class="placeholder-secondary w-full mr-5 outline-none pointer-events-auto"
                />
                <img
                  src="~/assets/icon/user.svg"
                  alt=""
                  class="filter-svg transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </v-form>
    </div>
    <footer
      class="h-[196px] border-0 border-t border-solid border-gray-400 mt-auto"
    >
      <div
        class="container h-full flex justify-center lg:justify-between items-center"
      >
        <div>
          <NuxtLink to="/" class="block text-center lg:text-left">
            <img src="~/assets/images/Logo.png" class="h-[35px]" />
          </NuxtLink>
          <p class="text-secondary">
            Copyright &#169; 2021 BRIX Templates &#124; All Rights Reserved
          </p>
        </div>
        <div class="hidden lg:block">
          <v-form>
            <div
              class="flex items-center shadow-md border border-solid border-gray-300 pl-[31px] pr-[17px] py-3 rounded-full"
            >
              <input
                type="email"
                spellcheck="false"
                placeholder="Enter your email"
                class="h-5 w-[310px] mr-5 outline-none placeholder-secondary"
              />
              <v-btn
                type="submit"
                class="shadow-sm max-w-[129px] bg-primary hover:bg-primary-bold py-[14px] px-[26px] border-0 border-b border-solid border-primary rounded-full h-auto"
              >
                <span
                  class="text-white leading-[18px] text-base font-medium normal-case"
                  >Subcribe</span
                >
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BookForm',
}
</script>
