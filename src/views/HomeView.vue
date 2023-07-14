<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="home-view" v-motion-fade>
    <h1 class="heading">Abstract wallpapers</h1>

      <p class="catchline">
        Free for personal & commercial use
      </p>

      <RouterLink to="/gallery" class="to-gallery">Browse</RouterLink>
  </main>
</template>
