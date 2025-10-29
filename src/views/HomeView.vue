<template>
  <header class="flex flex-col items-center gap-4">
    <h1
      class="text-5xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-cyan-400 to-emerald-400 tracking-widest"
    >
      Simulary
    </h1>
    <p class="text-lg">Zasymuluj rzeczywistość</p>
    <RouterLink
      :to="{ name: 'simulations' }"
      class="block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
    >
      Idź do symulacji
    </RouterLink>
  </header>
</template>
