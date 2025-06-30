export interface TvShow {
  id: number;
  name: string;
  genres: string[];
  image: {
    medium: string;
    original: string;
  } | null;
}

export interface TvShowDetails {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null; 
  averageRuntime: number | null; 
  premiered: string | null;        // Dates might be nullable
  ended: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];  // Array of strings, not fixed length tuple
  };
  rating: {
    average: number | null;  // Can be null if no rating
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
    officialSite: string | null;
  } | null;
  webChannel: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
    officialSite: string | null;
  } | null;
  dvdCountry: {
    name: string;
    code: string;
    timezone: string;
  } | null;
  externals: {
    tvrage: number | null;
    thetvdb: number | null;
    imdb: string | null;
  };
  image: {
    medium: string | null;
    original: string | null;
  } | null;
  summary: string | null;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: { 
      href: string;
      name?: string;
    };
  };
}
