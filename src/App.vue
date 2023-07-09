<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="fixed top-10 right-0 z-50 border border-r-0 border-slate-400/70">
    <nav class="navbar">
      <RouterLink
        to="/"
        class="nav-link"
        >A.
      </RouterLink>

      <RouterLink
        to="/gallery"
        class="nav-link"
        >Gallery</RouterLink
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
