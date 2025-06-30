<template>

<!-- the screen in the background is fixed, so I can absolute position the masked tvshow over it. -->
<div class="screen absolute">

<!-- Add a link to go directly to the show at hand, and show a nice preview image in the television -->
<NuxtLink :to="activeShowUrl">
  <img
    v-if="activeShow?.image?.medium"
    class="screenPreview h-full w-full opacity-60 hover:opacity-80 transition-all duration-300 ease-in-out"
    :src="activeShow?.image?.medium"
    :alt="`Preview image of ${activeShow?.name}`"
    loading="lazy"
  />
</NuxtLink>
</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type {TvShow} from '~/types/tvshows';
  let activeShowID:number;

  // Load data via useAsyncData for SSR support & hydration reuse
  const tvStore = useTvShowsStore();
  const { pending, error } = await useAsyncData('tv-shows', () => tvStore.loadShows())
  
  
  const activeShow = ref<TvShow | null>(null); // Start with null for safety
  const activeShowUrl = ref<string>('');    // Start with empty string

  function setNewShow() {
    if (tvStore.shows.length === 0) return;

    activeShowID = Math.floor(Math.random() * (tvStore.shows.length -1))
    activeShow.value = tvStore.shows[activeShowID];
    activeShowUrl.value = `/tv-show/${activeShow.value?.name.replace(/ /g, '-').toLowerCase()}`;
  }

  // Rotate the tv show randomly every 8 seconds
  onMounted(() => {
    setInterval(() => {
      setNewShow();
    }, 8000);
    setNewShow();
  });

</script>

<style scoped>

    /* Because the background is static, we can position this mask over the television in the background */
    /* We can't use tailwindcss much as we need very fine grained control, so we use this scoped style instead. */
    .screen {
      left: 204px;
      top: 243px;
      width: 138px;
      height: 347px;
      mask-size:138px 347px;
      -webkit-mask-image: url('/assets/mask_television_screen.webp');
      mask-image: url('/assets/mask_television_screen.webp');
      mask-repeat: no-repeat;
      mask-position: 2px 8px;
    }

    /* We skew the image a bit to match it closer to the angle of the tv in the background */
    .screenPreview{
      transform:skewY(-10deg) skewX(0deg) translate(0px, -10px);
    }
</style>