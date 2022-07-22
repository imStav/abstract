<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="fixed bottom-0">
    <nav class="navbar">
      <RouterLink
        to="/"
        class="nav-link"
        >Abstract
      </RouterLink>
      
      <RouterLink
        to="/about"
        class="nav-link"
        >About</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>
