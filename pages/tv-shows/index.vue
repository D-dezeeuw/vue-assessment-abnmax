<template>
  <!-- page for the overview of tv show items -->
  <main class="max-w-6xl w-screen pt-8 w-full mx-auto">
    
    <h1 class="text-4xl mb-12 px-4">TV Shows</h1>
    
    <NavHorizontal :genre="genre" v-for="(shows, genre) in tvStore.showsByGenre" :key="genre">
      <CardTvshow v-for="show in shows" :key="show.id" :model="show" />
    </NavHorizontal>


  </main>
</template>

<script setup lang="ts">
  import CardTvshow from '../../components/ui/CardTvshow.vue';
  import NavHorizontal from '../../components/layout/NavHorizontal.vue';

  // Load data via useAsyncData for SSR support & hydration reuse
  const tvStore = useTvShowsStore();
  const { pending, error } = await useAsyncData('tv-shows', () => tvStore.loadShows())
  

</script>
