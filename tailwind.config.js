/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        left: 'left',
      }
    },
  },
  corePlugins: {
    aspectRatio: true,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

