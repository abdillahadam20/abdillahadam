// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
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
    [
      '@nuxtjs/i18n',
      {
      }
    ]
  ],
})
