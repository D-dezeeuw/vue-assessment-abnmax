<template>
  <main class="px-4">

    <div class="relative w-full h-screen overflow-hidden">

    <!-- Your foreground content columns -->
    <div class="relative z-10 text-white w-full max-w-6xl mt-12 mx-auto">
      

      <div v-if="pending">Loading TV show details...</div>
          <div v-else-if="error">Error loading TV show details: {{ error.message }}</div>
          <div v-else-if="currentShow" class="md:flex md:gap-4 lg:gap-12">

            <!-- column 1 for show info -->
            <div class="w-full md:w-1/2 mb-24 md:mb-0">
              <h1 class="text-5xl font-bold mb-8">{{ currentShow.name }}</h1>
              <div v-html="currentShow.summary" class="mb-8"></div>
             
              <p><strong>Genres:</strong> {{ currentShow.genres.join(', ') }}</p>
              <p><strong>Rating:</strong> {{ currentShow.rating.average || 'N/A' }}</p>
              <p><strong>Status:</strong> {{ currentShow.status }}</p>
              <p class="mb-12"><strong>Premiered:</strong> {{ currentShow.premiered }}</p>
              <NuxtLink to="/tv-shows">Back to TV Shows</NuxtLink>
            </div>

            <!-- column 2 for the shows trailer (fetched through TMDB api as amaze didn't have it) -->
            <div class="w-full md:w-1/2 min-h-80">
              <img v-if="currentShow.image" :src="currentShow.image.medium" :alt="currentShow.name" class="mb-12" />
              <iframe
                  v-if="tmdbData?.trailer"
                  class="rounded-lg shadow-md w-full md:w-inherit"
                  width="560"
                  height="315"
                  :src="`https://www.youtube.com/embed/${tmdbData.trailer.key}`"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
            </div>
          
        </div>
        <div v-else>Show not found</div>

      </div>




  </div>

    <!-- black overlay so its less distracting and more of a mood -->
    <div class="absolute inset-0 bg-black/70 z-[-1]"></div>
    <!-- YouTube Video Background -->
    <iframe
      class="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none z-[-2]"
      :src="`https://www.youtube.com/embed/${tmdbData.trailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${tmdbData.trailer.key}`"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  </main>
</template>

<script setup lang="ts">
import type {TvShow, TvShowDetails} from '~/types/tvshows';
const currentShow = ref<TvShowDetails | null>(null);
const route = useRoute();
const paramsId = route.params.id;
let TvShowId = '';

if (paramsId && typeof paramsId === 'string') {
  TvShowId = paramsId.replace(/-/g,' ');
}

// Load data via useAsyncData for SSR support & hydration reuse
const tvStore = useTvShowsStore();
const { pending } = await useAsyncData('tv-show-'+ paramsId, () => tvStore.loadShowById(TvShowId))
currentShow.value = tvStore.currentShow;


// Load additional information for Trailer (would be nice to watch at least something right.)

// Implementatie of TVDB Api
// const { fetchTvShowByName } = useTvdbApi();
// const { data: tvdbData } = await useAsyncData('tvdb-show', () =>
//   fetchTvShowByName('straw')
// );
// console.log('Show info:', tvdbData.value?.show);
// console.log('Trailer(s):', tvdbData.value?.trailers);

// Implementation of TMDB Api
const { fetchTvShowByName } = useTmdbApi();
const { data: tmdbData, error } = await useAsyncData('tmdb-show-' + paramsId, () =>
  fetchTvShowByName(TvShowId)
);
console.log(`TMDB ${TvShowId}:`, tmdbData.value?.trailer?.key, 'provider:', tmdbData.value?.trailer?.site)
</script>

<style scoped>

</style>