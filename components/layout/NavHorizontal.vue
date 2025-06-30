<template>
  <div class="relative w-full mb-12">
    <h2 class="mb-4 text-2xl px-4">{{ genre }}</h2>
    <ul data-id="horizontal-nav" class="block relative w-full flex gap-4 overflow-x-auto scroll-smooth snap-x pb-4 md:pb-8">
     <slot>Add cards here</slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    genre: {
      type: String,
      required: true
    }
  })
</script>