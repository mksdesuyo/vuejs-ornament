<script setup>
import NavMenu from './NavMenu.vue';
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-8 pt-5 bg-white">
    <nav class="flex items-center justify-between">
      <router-link
        to="/"
        class="text-base font-medium xs:text-lg no-active"
        data-discover="true"
        aria-current="page"
        >MKS.proc</router-link
      >
      <div class="flex items-center gap-2">
        <div>
          <select id="theme-selector" class="text-xs border-r-4 border-rose-500 xs:text-base">
            <option value="light">Light</option>
            <option value="warm">Warm</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <button @click="isOpen = !isOpen" class="grid w-4 h-4 place-self-center">
          <font-awesome-icon :icon="isOpen ? ['fas', 'x'] : ['fas', 'bars']" />
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
