import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useTvShowsStore } from '../../../stores/tvshows'
import type { TvShow } from '../../../types/tvshows'

// Mock data
const mockShows: TvShow[] = [
  {
    id: 1,
    name: 'Breaking Bad',
    image: {
      medium: 'https://example.com/bb-medium.jpg',
      original: 'https://example.com/bb-original.jpg',
    },
  },
  {
    id: 2,
    name: 'Stranger Things',
    image: {
      medium: 'https://example.com/st-medium.jpg',
      original: 'https://example.com/st-original.jpg',
    },
  },
]

// Mock global fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockShows),
  })
) as any

describe('tvshows store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('fetchShows() should fetch and store data', async () => {
    const store = useTvShowsStore()

    await store.fetchShows()

    expect(fetch).toHaveBeenCalledOnce()
    expect(store.shows).toHaveLength(2)
    expect(store.shows[0].name).toBe('Breaking Bad')
  })

  it('fetchShows() should not re-fetch if data is already loaded', async () => {
    const store = useTvShowsStore()
    store.shows = [...mockShows] // preload data

    await store.fetchShows()

    expect(fetch).not.toHaveBeenCalled()
    expect(store.shows).toHaveLength(2)
  })

  it('sets isLoading correctly during fetch', async () => {
    const store = useTvShowsStore()
    const fetchPromise = store.fetchShows()

    expect(store.isLoading).toBe(true)
    await fetchPromise
    expect(store.isLoading).toBe(false)
  })
})
