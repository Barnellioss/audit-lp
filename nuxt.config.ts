// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    "usebootstrap",
    "@nuxtjs/tailwindcss",
    ["@nuxtjs/google-fonts",  {
      families: {
        Mulish: {
          wght: [300 , 400, 700, 900],
          ital: [300]
        }
      }}
  ],
    '@pinia/nuxt',
    "@nuxt/icon"
  ],
  /*pinia: {
    storesDirs: ['./stores/**'],
  },*/
  css: [
    '@/assets/css/tailwind.css',
  ]
})