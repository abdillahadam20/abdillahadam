// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s | Adam Abdillah',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          sizes: '32x32',
          href: '/favicon-32x32.ico',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          sizes: '16x16',
          href: '/favicon-16x16.ico',
        },
      ],
    },
  },
  devtools: { enabled: true },
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
