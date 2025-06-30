<template>
  <li class="group relative hover:scale-105 transition-all duration-100 snap-center flex-shrink-0 rounded h-64 w-1/2 md:w-1/4 lg:w-1/6"
  >
        <NuxtLink :to="`/tv-show/${model.name.replace(/ /g, '-').toLowerCase()}`">
          <div class="rounded-md shadow-md h-full w-full flex justify-items items-center">
            <img :src="model.image?.medium" :alt="model.name"
            class="w-auto shadow-md shadow-cyan-500/50 mx-auto h-full rounded-t-md group-hover:contrast-100 group-hover:brightness-75 group-hover:blur-[1px] group-hover:saturate-100 transition-all ease-in-out duration-300" />
            <div v-if="model.rating?.average" class="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs font-bold px-2 py-1 rounded">
              {{ model.rating.average.toFixed(1) }}
            </div>
          </div>
          <div class="z-10 opacity-0 group-hover:opacity-100 flex absolute bottom-0 top-0 left-0 right-0 rounded-md flex justify-center items-center transition-all ease-in-out duration-300">
            <h2 class="text-xl text-center text-white font-bold px-4"> {{ model.name }}</h2>
          </div>
        </NuxtLink>
       
  </li>
</template>

<script setup lang="ts">
  defineProps({
    model: {
      type: Object,
      required: true
    }
  })
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 16px;
}
</style>