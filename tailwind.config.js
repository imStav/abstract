/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['DM Serif Display', 'serif'],
      glitch: ['Rubik Glitch', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}
