<script setup>

</script>

<template>
  <main class="homeview">
    <div class="flex items-center">
      <div class="-mr-32 z-10 -mt-8">
        <h1 class="font-display text-6xl sm:text-8xl">Free <em class="font-glitch not-italic text-gradient">wall</em>pap<span class="text-white sm:text-black">ers</span></h1>

        <p class="font-sans text-xl opacity-70">For personal & commercial use</p>

        <RouterLink to="/gallery" class="to-gallery">Browse</RouterLink>
      </div>

      <div>
        <img src="https://images.unsplash.com/photo-1639493115941-a70fcef4f715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" class="w-96 shadow-2xl blur-3xl sm:blur-none" alt="">
      </div>
    </div>
  </main>
</template>
