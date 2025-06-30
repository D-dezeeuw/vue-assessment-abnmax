import { ref } from 'vue'
import { defineStore } from 'pinia';
import type {TvShow, TvShowDetails} from '~/types/tvshows';
import { useTvShowApi } from '~/composables/useTvShowApi';

export const useTvShowsStore = defineStore('tvshows', () => {
  const { fetchShows, fetchShowById } = useTvShowApi();
  
  const shows = ref<TvShow[]>([]);
  const currentShow = ref<TvShowDetails | null>(null);
  const isLoading = ref(false);
  
  /* Fetch show(s) through api composable */
  async function loadShows() {
    if (shows.value.length > 0) return; // Already loaded, skip fetch

    isLoading.value = true;
    shows.value = await fetchShows();
    isLoading.value = false;
  }

  async function loadShowById(id: string) {
    isLoading.value = true;
    currentShow.value = await fetchShowById(id);
    isLoading.value = false;
  }

  /* Filters */
  const showsByGenre = computed(() => {
    const map: Record<string, TvShow[]> = {};
  
    shows.value.forEach(show => {
      show.genres.forEach(genre => {
        if (!map[genre]) {
          map[genre] = [];
        }
        map[genre].push(show);
      });
    });
  
    // Sort shows within each genre by rating (descending)
    for (const genre in map) {
      map[genre].sort((a, b) => {
        const ratingA = a.rating?.average ?? -1; // Treat null as -1 for sorting to put them at the end
        const ratingB = b.rating?.average ?? -1;
        return ratingB - ratingA; // Descending order
      });
    }
  
    return map;
  })

  return { shows, isLoading, currentShow, loadShowById, loadShows, showsByGenre };
});