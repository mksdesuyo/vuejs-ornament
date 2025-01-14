<script setup>
import NavMenu from './NavMenu.vue';
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-8 pt-5">
    <nav class="flex items-center justify-between">
      <router-link
        to="/"
        class="text-base font-medium duration-150 ease-in-out xs:text-lg sm:text-2xl no-active hover:ml-2"
        data-discover="true"
        aria-current="page"
        >MKS.proc</router-link
      >
      <div class="flex items-center gap-2">
        <button @click="isOpen = !isOpen" class="grid w-auto">
          <font-awesome-icon
            :icon="isOpen ? ['fas', 'x'] : ['fas', 'bars']"
            class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5"
          />
        </button>
      </div>
    </nav>
    <NavMenu :class="[isOpen ? 'right-8' : '-right-full']" />
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
