// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        Poppins: true,
        download: true,
        inject: true,
        display: 'swap',
        preconnect: true,
        preload: true,
      },
    ],
  ],
})
