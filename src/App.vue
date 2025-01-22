<script setup>
import { RouterView } from 'vue-router';
import { ref, watch } from 'vue';
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';

const themeMode = ref('light');

const setTheme = (mode) => {
  themeMode.value = mode;
  document.documentElement.className = mode;
};

const loadTheme = () => {
  const savedMode = localStorage.getItem('theme-mode') || 'light';
  setTheme(savedMode);
};

watch(themeMode, (newMode) => {
  localStorage.setItem('theme-mode', newMode);
});

loadTheme();
</script>

<template>
  <HeaderApp @set-theme="setTheme" :theme-mode="themeMode" />
  <transition
    enter-active-class="animate-fadeIn"
    leave-active-class="animate-fadeOut"
    mode="out-in"
  >
    <RouterView :theme-mode="themeMode" />
  </transition>
  <FooterApp />
</template>
