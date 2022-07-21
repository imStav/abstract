<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed bottom-0 py-4 backdrop-blur-xl saturate-150">
    <nav class="flex justify-center w-screen">
      <RouterLink to="/" class="text-xl font-display mx-4 hover:opacity-60 duration-700">Ab<em class="font-glitch not-italic">stra</em>ct</RouterLink>
      <RouterLink to="/about" class="text-xl font-display mx-4 hover:opacity-60 duration-700">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
