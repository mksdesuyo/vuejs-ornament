<script setup>
import NavMenu from './NavMenu.vue';
import { ref, onMounted, onUnmounted, watch } from 'vue';

const isMenuOpen = ref(false);

const props = defineProps(['themeMode']);
const emit = defineEmits(['set-theme']);

const selectedTheme = ref(props.themeMode);

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

const handleThemeChange = (theme) => {
  selectedTheme.value = theme;
  emit('set-theme', theme);
};

watch(
  () => props.themeMode,
  (newMode) => {
    selectedTheme.value = newMode;
  },
);
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
      <div class="flex items-center gap-1 xs:gap-2 lg:gap-4 lg:flex-row-reverse">
        <div class="flex items-center text-xs md:text-sm whitespace-nowrap xs:mt-1 lg:mt-0">
          <label for="themeSwitcher" class="opacity-75">Select theme:&nbsp;</label>
          <select
            id="themeSwitcher"
            v-model="selectedTheme"
            @change="handleThemeChange(selectedTheme)"
            class="bg-transparent border-2 rounded-md"
            :class="{
              'text-light-text border-light-beyond-color1 focus:bg-light-beyond-color2':
                themeMode === 'light',
              'text-warm-text border-warm-beyond-color1 focus:bg-warm-beyond-color2':
                themeMode === 'warm',
              'text-dark-text border-dark-beyond-color1 focus:bg-dark-beyond-color2':
                themeMode === 'dark',
            }"
          >
            <option value="light">Light</option>
            <option value="warm">Warm</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <button @click="toggleMenu" id="menuButton" class="grid w-auto xs:mt-1 lg:hidden">
          <font-awesome-icon
            :icon="isMenuOpen ? ['fas', 'x'] : ['fas', 'bars']"
            class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5"
          />
        </button>
        <NavMenu
          :theme-mode="themeMode"
          :class="[isMenuOpen ? 'right-8 md:right-16' : '-right-full']"
        />
      </div>
    </nav>
  </header>
</template>
