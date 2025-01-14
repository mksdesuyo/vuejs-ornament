<script setup>
import NavMenu from './NavMenu.vue';
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-40 px-8 pt-6 md:px-16 lg:px-48">
    <nav class="flex items-center justify-between">
      <router-link
        to="/"
        class="text-base font-medium duration-150 ease-in-out xs:text-lg md:text-2xl no-active max-lg:hover:ml-2"
        data-discover="true"
        aria-current="page"
        >MKS.proc</router-link
      >
      <div class="flex items-center">
        <button @click="isOpen = !isOpen" class="grid w-auto lg:hidden">
          <font-awesome-icon
            :icon="isOpen ? ['fas', 'x'] : ['fas', 'bars']"
            class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
        </button>
        <NavMenu :class="[isOpen ? 'right-8 md:right-16' : '-right-full']" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
