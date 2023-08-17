/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        base: {
          tasty: {
            100: '#EBD8DD',
            200: '#F0A49F',
            300: '#D38788',
            400: '#CD5255',
            500: '#B82531'
          }
        }
      }
    },
  },
  plugins: [],
}
