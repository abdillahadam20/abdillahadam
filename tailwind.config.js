/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        tasty: {
          100: '#EBD8DD',
          200: '#F0A49F',
          300: '#D38788',
          400: '#CD5255',
          500: '#B82531',
        },
        sunsetorange: {
          100: '#FC7B15',
          200: '#F16002',
          300: '#D55102',
          400: '#B73F00',
        },
        surface: {
          100: '#908d96',
          200: '#76737e',
          300: '#5e5a66',
          400: '#46424f',
          500: '#2f2b3a',
          600: '#1a1625',
        },
      },
    },
  },
  plugins: [],
}
