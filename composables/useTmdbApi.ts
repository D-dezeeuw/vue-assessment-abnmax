const API_KEY = 'f31fc8f73841ad1ca65c597c87aa7bc9';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchFromTmdb(endpoint: string, params: Record<string, string> = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', API_KEY);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value);
  }

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`TMDB API error: ${res.statusText}`);

  return await res.json();
}

async function fetchTvShowByName(name: string) {
  // Step 1: Search for the show
  const searchData = await fetchFromTmdb('/search/tv', { query: name });
  const firstResult = searchData.results?.[0];

  if (!firstResult) throw new Error('TV show not found');

  const tvId = firstResult.id;

  // Step 2: Fetch full details
  const show = await fetchFromTmdb(`/tv/${tvId}`);

  // Step 3: Fetch trailer videos
  const videos = await fetchFromTmdb(`/tv/${tvId}/videos`);

  // Step 4: Extract YouTube trailer
  const trailer = videos.results?.find(
    (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
  );

  return {
    show,
    trailer, // or trailer?.key for YouTube embed
  };
}

export function useTmdbApi() {
  return {
    fetchTvShowByName,
  };
}
