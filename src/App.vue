<script setup>
import { RouterView } from 'vue-router';
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
</script>

<template>
  <HeaderApp v-once />
  <RouterView />
  <FooterApp v-once />
</template>
