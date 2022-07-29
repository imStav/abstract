<script setup>
import { useWallpaperStore } from "../../stores/wallpapers";
const getWallpaper = useWallpaperStore();
</script>

<template>
  <div class="wallpaper-grid" v-motion-fade>
    <div v-for="wallpaper in getWallpaper.wallpapers" :key="wallpaper.name">
      <a :href="wallpaper.src" class="cursor-zoom-in">
      <img
        :src="wallpaper.src"
        class="wallpaper-styles"
        :alt="`${wallpaper.name} wallpaper`"
      />
      </a>

      <div class="wallpaper-description">
        <p class="font-display text-xl">{{ wallpaper.name }}</p>

        <a :href="wallpaper.src" class="download-btn" download>
          <i class="fa-solid fa-circle-chevron-down text-sm mr-2"></i> Download
        </a>
      </div>
    </div>
  </div>
</template>
