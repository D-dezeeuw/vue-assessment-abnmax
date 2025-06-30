<template>
  <!-- Button border with animated gradient -->
  <button :class="[`btn flex cursor-pointer items-center 
      justify-center overflow-hidden rounded-full border-none p-[2px]
      hover:shadow-lg shadow-cyan-500/50 transition-all duration-300 ease-out`,
      props.class]"
  >
      <!-- Black center with white text, goes transparent on hover, showing the glowing gradient -->
      <span class="btnSpan relative z-1 w-full rounded-full bg-black/100 text-base text-white backdrop-blur-2xl transition-all
              duration-300 ease-out hover:bg-cyan-700/20"
      >
        <slot>Button</slot>
      </span>
    </button>
</template> 

<script setup lang="ts">
  // Propagating class props.
  const props = defineProps<{ class?: string }>()
</script>


<style scoped>
  /* styling for conic gradient rotate animation in border */
  @property --animate-duration {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  @property --Color {
    syntax: '<color>';
    initial-value: #15c2a5;
  }
  
  @keyframes rotate {
    0% {
      --animate-duration: 0deg;
      --Color: #15c2a5;
    }
    100% {
      --animate-duration: 360deg;
      --Color: #15c2a5;
    }
  }
  
  /* Setting up the conic gradient, would be too big and custom for tailwind */
  .btn:after,
  .btn:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: 100%;
    border-radius: calc(100px + 1.5px);
    background-size: 100% 100%;
    background-position: 0px 0px;
    background-image: conic-gradient(
      from var(--animate-duration) at 50% 50%,
      #f0aa39 0%,
      #f0aa39 20%,
      var(--Color) 50%,
      var(--Color) 66%,
      #f0aa39 100%
    );
    animation: rotate 3s infinite linear;
  }
  
  .btn:before {
    animation: rotate 3s infinite linear;
    filter: blur(20px);
  }

  .btn.size-l span{
    padding: 24px 32px;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight:bold;
  }

  .btn:hover {
    box-shadow: 0 0 5vw 2px rgb(7, 245, 217, 0.8);
  }
</style>
