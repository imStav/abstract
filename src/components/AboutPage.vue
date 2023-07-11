<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="about-layout">
    <RouterLink to="/gallery" class="w-fit to-gallery">
      Back to gallery
    </RouterLink>
    
    <h2 class="heading">
      About Abstract
    </h2>

    <p class="text-lg my-8">
      Abstract is a small web app that provides free wallpapers for personal
      or commercial use. They are all in a 16 / 9 aspect ratio, and a FHD
      definition of 1920 x 1080 pixels.
    </p>

    <p class="text-lg">
      The website is subject to changes and will nearly receive UI updates.
    </p>
  </div>
</template>
