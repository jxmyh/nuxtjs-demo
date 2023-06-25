// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // 只能用于服务端的 key
    apiSecret: '123',
    public: {
      apiBase: '/api'
    }
  },
  nitro: {
    preset: 'vercel'
  },
  // css: ['assets/_variables.css'],
  // css: ['assets/global.scss'],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "~/assets/_variables.scss";'
  //       }
  //     }
  //   }
  // },

  // ssr: false,
  // 自动导入目录
  imports: {
    dirs: ['store/**']
  },
  // seo meta
  app: {
    head: {
      charset: 'utf8',
      viewport: 'width=device-width,initial-scale=1',
      title: 'My App',
      meta: [
        {
          name: 'description',
          content: '我的第一个 nuxt '
        },
        {
          name: 'charset',
          content: 'utf-8'
        }
      ],
      link: [],
      style: [],
      script: []
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs']
      }
    ]
  ],
  naiveUI: {
    themeOverrides: {
      common: {
        primaryColor: '#ff0000',
        primaryColorHover: '#8b0000'
      }
    }
  }
});
