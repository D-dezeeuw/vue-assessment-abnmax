<template>
  <header class="flex px-4 lg:px-0">
    <div class="flex items-center justify-between w-full max-w-6xl mx-auto">
      <a href="/" title="Home" class="relative lg:-ml-2" >
        <img src="/assets/abnmax_teal.webp" alt="ABN Max logo" width="64px" height="64px" />
        <span class="sr-only">To the homepage</span>
      </a>
    <nav>
    <ul class="flex space-x-4">
      <li><ButtonPrimary class="relative"><NuxtLink class="block px-4 py-2" to="/tv-shows">TV Shows</NuxtLink></ButtonPrimary></li>
      <li><ButtonPrimary class="relative"><NuxtLink class="block px-4 py-2" to="/credits">About me</NuxtLink></ButtonPrimary></li>
    </ul>
    </nav>
  </div>
  </header>
</template>

<script setup lang="ts">
  import ButtonPrimary from '~/components/ui/ButtonPrimary.vue';
</script>

<style scoped>
  header {
    background: #077a6b;
    background: linear-gradient(180deg,rgb(1, 50, 44) 0%, rgb(0, 14, 11) 100%);
  }
</style>