<template>
  <main class="grid gap-2 px-8 py-4 leading-5 place-content-center h-dvh">
    <span class="text-sm opacity-75">Greetings, I'm known as</span>
    <h1 class="text-4xl font-bold leading-8 tracking-wider">Rizqi MKS</h1>
    <h2 class="text-lg font-bold opacity-75">An enthusiastic fresher in web development</h2>
    <p class="mt-2">
      I'm a Junior Web Developer based in Garut, Indonesia. Currently focusing on Front-End using
      <span class="bg-green-100 px-1 text-[#41B883] rounded">VueJs</span> and Back-End using
      <span class="px-1 text-[#F05340] bg-red-100 rounded">Laravel</span>.
    </p>
    <div class="flex flex-wrap gap-2 mt-4">
      <router-link
        to="/about"
        class="p-2 duration-150 ease-in-out border-2 border-gray-700 rounded hover:rotate-3"
        data-discover="true"
        aria-current="page"
        >Know more about me</router-link
      >
      <a
        href="#"
        class="p-2 duration-150 ease-in-out border-2 border-gray-700 rounded hover:-rotate-3"
        >Examine my works</a
      >
      <a
        href="#"
        class="p-2 duration-150 ease-in-out border-2 border-gray-700 rounded hover:rotate-3"
        >See my experiences</a
      >
    </div>
  </main>
</template>
