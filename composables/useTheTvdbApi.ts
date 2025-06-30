/* normally I would include api keys in my project, but it's just a fairly quick demo and its a limited api key anyway. */
const API_KEY = '51ee87ca-b127-4dc4-8f1b-de674490bb9c';
const BASE_URL = 'https://api4.thetvdb.com/v4';

let token: string | null = null;

async function authenticate() {
  if (token) return token;

  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apikey: API_KEY }),
  });

  if (!res.ok) throw new Error('Failed to authenticate with TheTVDB API');

  const data = await res.json();
  token = data.data.token;
  return token;
}

async function fetchTvShowByName(showName: string) {
  const authToken = await authenticate();

  // Search the show by name
  const searchRes = await fetch(`${BASE_URL}/search?query=${encodeURIComponent(showName)}`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });

  if (!searchRes.ok) throw new Error('Failed to search show');
  const searchData = await searchRes.json();

  const firstResult = searchData.data?.[0];
  if (!firstResult) throw new Error('Show not found');

  // Fetch detailed info for the first result
  const showId = firstResult.tvdb_id;
  const showRes = await fetch(`${BASE_URL}/series/${showId}`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });

  if (!showRes.ok) throw new Error('Failed to fetch show details');
  const showData = await showRes.json();

  // Optionally: fetch trailers from artworks or extended info
  const trailersRes = await fetch(`${BASE_URL}/series/${showId}/extended`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });

  const trailersData = await trailersRes.json();

  return {
    show: showData.data,
    trailers: trailersData.data?.trailers || [],
  };
}

export function useTvdbApi() {
  return {
    fetchTvShowByName,
  };
}
