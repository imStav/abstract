<script setup>
import { useWallpaperStore } from "../../stores/wallpapers";
const getWallpaper = useWallpaperStore();
</script>

<template>
  <div class="wallpaper-grid" v-motion-fade>
    <div v-for="wallpaper in getWallpaper.wallpapers" :key="wallpaper.name" class="wallpaper-card">
      <a :href="wallpaper.src" class="cursor-zoom-in">
      <img
        :src="wallpaper.src"
        class="wallpaper-styles"
        :alt="`${wallpaper.name} wallpaper`"
      />
      </a>

      <div class="wallpaper-description">
        <p class="font-display text-xl px-4">{{ wallpaper.name }}</p>

        <a :href="wallpaper.src" class="download-btn" download> Download
        </a>
      </div>
    </div>
  </div>
</template>
