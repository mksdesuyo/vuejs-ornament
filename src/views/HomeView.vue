<template>
  <main class="grid gap-2 px-8 py-4 leading-5 place-content-center h-dvh">
    <span class="text-sm opacity-75">Greetings, I'm known as</span>
    <h1 class="text-4xl font-bold leading-8 tracking-wider">Rizqi MKS</h1>
    <h2 class="text-lg font-bold opacity-75">An enthusiastic fresher in web development</h2>
    <p class="mt-2">
      I'm a Junior Web Developer based in Garut, Indonesia. Currently focusing on Front-End using
      <span class="bg-green-100 px-1 text-[#41B883] rounded-md">VueJs</span> and Back-End using
      <span class="px-1 text-[#F05340] bg-red-100 rounded-md">Laravel</span>.
    </p>
    <div class="flex flex-wrap mt-4 text-sm font-bold gap-x-2 gap-y-3">
      <router-link
        to="/about"
        class="p-2 px-4 text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md hover:bg-gray-700 hover:text-gray-50"
        data-discover="true"
        aria-current="page"
        >Know more about me ></router-link
      >
      <router-link
        to="#"
        class="p-2 px-4 text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md hover:bg-gray-700 hover:text-gray-50"
        data-discover="true"
        aria-current="page"
        >See my experiences >></router-link
      >
      <router-link
        to="/project"
        class="p-2 px-4 text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md hover:bg-gray-700 hover:text-gray-50"
        data-discover="true"
        aria-current="page"
        >Examine my projects >>></router-link
      >
    </div>
  </main>
</template>
