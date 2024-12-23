<template>
  <main class="grid gap-2 px-8 py-4 leading-5 place-content-center h-dvh">
    <span class="text-sm opacity-90">Greetings, I'm known as</span>
    <h1 class="text-4xl font-bold leading-8 tracking-wider">Rizqi MKS</h1>
    <h2 class="text-lg font-semibold opacity-90">An enthusiastic fresher in web development</h2>
    <p class="mt-2 text-base tracking-tight">
      I'm a Junior Web Developer based in
      <span id="garut-hover" class="text-yellow-600 underline cursor-pointer" @click="toggleMap"
        >Garut, Indonesia</span
      >. Currently focusing on Front-End field using VueJs.
    </p>

    <!-- Kontainer iframe map -->
    <div
      v-if="isMapVisible"
      class="absolute z-50 translate-y-8 bg-white border rounded-md shadow-lg"
    >
      <div class="flex items-center justify-between px-2 py-1 text-sm bg-gray-100">
        <span>Map</span>
        <button @click="toggleMap" class="text-red-500">Close</button>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506508.0495783945!2d107.77815345!3d-7.3433252000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68a6a364a7c085%3A0x301e8f1fc28b8f0!2sKabupaten%20Garut%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1734335790398!5m2!1sid!2sid"
        width="300"
        height="150"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isMapVisible: false,
    };
  },
  methods: {
    toggleMap() {
      this.isMapVisible = !this.isMapVisible;
    },
  },
};
</script>
