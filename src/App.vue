<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="sticky top-10 w-fit mx-auto z-50">
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
