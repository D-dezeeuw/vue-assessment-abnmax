import type {TvShow, TvShowDetails} from '~/types/tvshows';

export function useTvShowApi() {
  const config = useRuntimeConfig();

  // Get all TV Shows
  async function fetchShows(): Promise<TvShow> {
    const { data } = await useFetch(config.public.apiBase + 'shows'); // or local JSON or any endpoint
    return data.value as TvShow
  }

  // Get a specific TV Show
  async function fetchShowById(id: string): Promise<TvShowDetails> {
    const { data } = await useFetch(config.public.apiBase + 'singlesearch/shows?q=' + id); // or local JSON or any endpoint
    return data.value as TvShowDetails;

  }

  return {
    fetchShows,
    fetchShowById,
  };
}