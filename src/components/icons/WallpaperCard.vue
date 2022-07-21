<script setup>
import { useWallpaperStore } from "../../stores/wallpapers";
const getWallpaper = useWallpaperStore();
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
    <div v-for="wallpaper in getWallpaper.wallpapers" :key="wallpaper.name">
      <img
        :src="wallpaper.src"
        class="wallpaper-styles"
        :alt="`${wallpaper.name} wallpaper`"
      />

      <div class="wallpaper-description">
        <p class="font-display text-2xl">{{ wallpaper.name }}</p>

        <a :href="wallpaper.src" class="download-btn" download>
          <i class="fa-solid fa-circle-chevron-down text-sm mr-2"></i> Download
        </a>
      </div>
    </div>
  </div>
</template>
