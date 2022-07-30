<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="home-view">
    <div class="flex items-center px-6 sm:px-24" v-motion-fade>
      <div class="-mr-32 z-10 -mt-8">
        <h1 class="heading">
          Abstract wallpap<span class="text-white">ers</span>
        </h1>

        <p class="catchline">
          Free. Personal & commercial use.
        </p>

        <RouterLink to="/gallery" class="fixed to-gallery">Browse</RouterLink>
      </div>

      <div>
        <img
          src="/assets/sunrise.jpg"
          class="w-96 h-96 shadow-2xl blur-3xl"
          alt="A blurred picture"
        />
      </div>
    </div>
  </main>
</template>
