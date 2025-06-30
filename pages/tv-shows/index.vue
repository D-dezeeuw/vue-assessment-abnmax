<template>
  <!-- page for the overview of tv show items -->
  <main class="w-screen max-w-6xl pt-8 mx-auto">
    
    <h1>TV Shows</h1>
    
    <!-- horizontal navigation menu containing separate cards with tv-shows -->
    <NavHorizontal>
      <CardTvshow v-for="show in tvStore.shows" :key="show.id" :model="show" />
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
