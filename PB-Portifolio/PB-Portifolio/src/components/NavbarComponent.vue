<template>
  <nav class="bg-black text-green-500 py-4 px-8 shadow-md rounded-b-lg">
    <div class="flex items-center max-w-7xl mx-auto">

      <!-- Links de navegação à esquerda -->
      <ul class="flex gap-8 text-lg font-semibold flex-1">
        <li>
          <router-link
            to="/"
            class="hover:text-green-300 transition-colors duration-200"
          >Início</router-link>
        </li>
        <li>
          <router-link
            to="/sobre"
            class="hover:text-green-300 transition-colors duration-200"
          >Sobre</router-link>
        </li>
        <li>
          <router-link
            to="/contato"
            class="hover:text-green-300 transition-colors duration-200"
          >Contato</router-link>
        </li>
      </ul>

      <!-- Título centralizado -->
      <div class="flex flex-col items-center flex-none mx-auto">
        <h1 class="text-2xl font-extrabold tracking-wide text-green-500 drop-shadow-sm whitespace-nowrap">
          PORTFÓLIO PB
        </h1>
      </div>

      <!-- Espaço vazio para equilibrar o layout -->
      <div class="flex-1"></div>
    </div>
  </nav>
</template>
