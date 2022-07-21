<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="home-view">
    <div class="flex items-center px-6 sm:px-24">
      <div class="-mr-32 z-10 -mt-8">
        <h1 class="font-display text-6xl sm:text-8xl">
          Free
          <em class="font-glitch not-italic text-gradient">wall</em>pap<span
            class="text-white"
            >ers</span
          >
        </h1>

        <p class="font-sans text-xl opacity-70">
          For personal & commercial use
        </p>

        <RouterLink to="/gallery" class="to-gallery">Browse</RouterLink>
      </div>

      <div>
        <img
          src="/assets/sunrise.jpg"
          class="w-96 h-96 shadow-2xl blur-3xl xl:blur-none"
          alt=""
        />
      </div>
    </div>
  </main>
</template>
