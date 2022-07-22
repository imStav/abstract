<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="fixed bottom-0">
    <nav class="navbar">
      <RouterLink
        to="/"
        class="nav-link"
        >Ab<em class="font-glitch not-italic">stra</em>ct</RouterLink
      >
      <RouterLink
        to="/about"
        class="nav-link"
        >About</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>
