/** @type {import('tailwindcss').Config} */
/** @source inline("w-1/2", "w-1/4", "w-1/6", "w-[50%]", "md:w-[25%]", "lg:w-[16.6667"); */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.ts",
  ],
  safelist: [
    'w-1/2',
    'w-1/4',
    'w-1/6',
    'w-[50%]',
    'md:w-[25%]',
    'lg:w-[16.6667%]'
  ],
  theme: {
    extend: {
      animation: {},
      fontFamily: {
        chicle: ['Chicle', 'cursive'],
        roboto: ['roboto', 'cursive']
      },
    },
  },
  plugins: [],
}