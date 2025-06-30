<template>
  <div class="relative">
    <!-- First slogan SVG image with diagonal animated gradient in ABN colours. -->
    <div class="slogan z-50 relative w-64 h-80 bg-gradient-to-br 
            from-green-400 via-teal-300 
            to-amber-500 animated-background"
    ></div>

    <!-- Second slogan SVG graphic but blurred behind as a glow (Like the TV) -->
    <div class="z-10 blurred absolute top-0 left-0">
      <div class="slogan relative z-10 w-64 h-80 bg-gradient-to-br 
                from-green-400 via-teal-300 to-amber-500 animated-background"
      ></div>
    </div>
</div>
</template>

<style scoped>
  /* Setting up mask here, as it is a hassle in Tailwind */
  .slogan {
      position: relative;
      mask-size:cover;
      -webkit-mask-image: url('/assets/slogan.svg');
      mask-image: url('/assets/slogan.svg');
      mask-repeat: no-repeat;
      mask-position: 0 0;
    }

  /* Setting up blur here, for fine grained control (0.05) */
  .blurred {
    filter:blur(10px) brightness(1.5);
    transform:scale(1.05);
    opacity:0.4;
  }

  /* Animated background for the gradient */
  .animated-background {
    background-size: 300%;

    -webkit-animation: animation 8s ease infinite;
    -moz-animation: animation 8s ease infinite;
    animation: animation 8s ease infinite;
  }

    @keyframes animation {
        0%,
        100% {
            background-position: 0% 50%;
        }
        
        50% {
            background-position: 100% 50%;
        }
    }
  </style>