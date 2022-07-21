import { defineStore } from "pinia";

export const useWallpaperStore = defineStore({
  id: "database",
  state: () => ({
    wallpapers: {
      1: {
        name: "Core",
        src: "/assets/core.jpg",
      },

      2: {
        name: "Borealis",
        src: "/assets/borealis.jpg",
      },

      3: {
        name: "Sunrise",
        src: "/assets/sunrise.jpg",
      },

      4: {
        name: "Festival",
        src: "/assets/festival.jpg",
      },

      5: {
        name: "Vapor",
        src: "/assets/vapor.jpg",
      },

      6: {
        name: "Fogg",
        src: "/assets/fogg.jpg",
      },
    },
  }),
});
