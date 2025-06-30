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
    const map: Record<string, TvShow[]> = {}
  
    shows.value.forEach(show => {
      show.genres.forEach(genre => {
        if (!map[genre]) map[genre] = []
        map[genre].push(show)
      })
    })
  
    return map
  })

  return { shows, isLoading, currentShow, loadShowById, loadShows,  };
});