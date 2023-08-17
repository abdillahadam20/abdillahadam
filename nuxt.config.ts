// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/motion/nuxt',
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
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  }
})
