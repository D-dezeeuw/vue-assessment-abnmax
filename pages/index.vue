<template>
  <main class="block relative full-bg overflow-auto flex justify-center overflow-hidden w-full max-w-7xl mx-auto">
    
    <!-- The graphic is nice but doesn't hold up in WCAG or SEO. providing added a nice H1 for that. -->
    <h1 class="sr-only">Op het puntje van je bank.</h1>
    <Slogan class="mt-8 md:mt-24" />

    <!-- Main CTA button, created component for it with an animated border gradient -->
    <!-- small detail: "Kijk Verder" is a reference to the old slogan of ABN AMRO "Look Beyond"-->
    <ButtonPrimary class="btn-primary--cta size-l absolute bottom-20">
      <NuxtLink class="" to="/tv-shows">Kijk Verder</NuxtLink>
    </ButtonPrimary>

    <!-- This shows random TV Shows on the television with masking and data from the pinia store -->
    <Preview class="brightness-50" />
   
  </main> 
</template>

<script setup lang="ts">
  import ButtonPrimary from '~/components/ui/ButtonPrimary.vue';
  import Slogan from '~/components/decorative/Slogan.vue';
  import Preview from '~/components/decorative/Preview.vue';
</script>

<style scoped>
  /* set fixed background to have more control over the Tv Shows preview overlay on the tv screen */
  .full-bg {
    background: black url('/assets/bg_black.webp') repeat;
    background-size: 1536px auto;
    background-position: 0 0;  
    background-repeat:no-repeat;
  }

</style>