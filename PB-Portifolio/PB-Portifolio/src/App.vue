<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <Navbar />
    <main class="container mx-auto px-4 py-6 flex-grow">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/NavbarComponent.vue'
</script>