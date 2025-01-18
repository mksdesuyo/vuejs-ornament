<script setup>
import NavMenu from './NavMenu.vue';
import { ref, onMounted, onUnmounted, defineEmits } from 'vue';

let isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClickOutside = (event) => {
  const menu = document.getElementById('menuButton');
  if (menu && !menu.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});

const emit = defineEmits(['set-theme']);

const handleThemeChange = (theme) => {
  emit('set-theme', theme);
};

defineProps(['theme-mode']);
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-40 px-8 pt-6 md:px-16 lg:px-48">
    <nav class="flex items-center justify-between">
      <router-link
        to="/"
        class="text-base font-medium duration-150 ease-in-out xs:text-lg sm:text-2xl no-active max-lg:hover:ml-2"
        data-discover="true"
        aria-current="page"
        >MKS.proc</router-link
      >
      <div class="flex items-center">
        <div class="flex gap-4 px-2">
          <button
            class="rounded bg-light-bg text-light-text"
            :class="{
              'border-light-text': themeMode === 'light',
              'border-warm-text': themeMode === 'warm',
              'border-dark-text': themeMode === 'dark',
            }"
            @click="handleThemeChange('light')"
          >
            Light
          </button>
          <button class="rounded bg-warm-bg text-warm-text" @click="handleThemeChange('warm')">
            Warm
          </button>
          <button class="rounded bg-dark-bg text-dark-text" @click="handleThemeChange('dark')">
            Dark
          </button>
        </div>
        <button @click="toggleMenu" id="menuButton" class="grid w-auto lg:hidden">
          <font-awesome-icon
            :icon="isMenuOpen ? ['fas', 'x'] : ['fas', 'bars']"
            class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5"
          />
        </button>
        <NavMenu :class="[isMenuOpen ? 'right-8 md:right-16' : '-right-full']" />
      </div>
    </nav>
  </header>
</template>
