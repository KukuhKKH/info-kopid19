
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Info-Kopid19' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Covid-19 Ponorogo, Ponorogo, Informasi, Covid-19, Indonesia, Jawa Timur'},
      { name: 'google-site-verification', content: 'X7ISdwhbArSic2GMDbT0o3sj_Z-AkrkgsEvv8kiDqu8'},
      { hid: 'description', name: 'description', content: 'Situs ini merupakan front end dari Informasi Corona Virus Khususnya di Jawa Timur'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#bee3f8',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/moment',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  moment: {
    defaultLocale: 'id',
    locales: ['id']
  }
}
