<script setup>
import { RouterView } from 'vue-router';
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
</script>

<template>
  <HeaderApp />
  <transition
    enter-active-class="animate-fadeIn"
    leave-active-class="animate-fadeOut"
    mode="out-in"
  >
    <RouterView />
  </transition>
  <FooterApp />
</template>
