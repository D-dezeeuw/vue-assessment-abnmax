<template>
  
  <div class="grid h-screen w-screen [grid-template-rows:76px_1fr_32px] overflow-x-hidden">
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>


<script setup lang="ts">
  import Header from '~/components/layout/Header.vue';
  import Footer from '~/components/layout/Footer.vue';
</script>

<style>
body {
  background-color: black;
  color: white; /* To ensure text is visible on a black background */
}
</style>