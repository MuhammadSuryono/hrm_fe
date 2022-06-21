var webpack = require('webpack')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.APP_NAME ?? 'HRM Application',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Muhammad Suryono'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: "text/css", href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800'},
      { rel: 'stylesheet', type: "text/css", href: 'https://fonts.googleapis.com/css?family=Quicksand:500,700'},
      { rel: 'stylesheet', type: "text/css", href: '/assets/css/bootstrap.min.css'},
      { rel: 'stylesheet', type: "text/css", href: '/assets/css/waves.min.css'},
      { rel: 'stylesheet', type: "text/css", href: '/assets/css/feather.css'},
      { rel: 'stylesheet', type: "text/css", href: '/assets/css/font-awesome-n.min.css', media: 'all'},
      { rel: 'stylesheet', type: "text/css", href: '/assets/css/style.css'},
      { rel: 'stylesheet', type: "text/css", href: '/assets/css/widget.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/static/assets/js/jquery.min.js', type:'text/javascript', mode: 'client'},
    { src: '@/static/assets/js/jquery-ui.min.js', type:'text/javascript', mode: 'client'},
    { src: '@/static/assets/js/bootstrap.min.js', type:'text/javascript', mode: 'client'},
    { src: '@/static/assets/js/waves.min.js', type:'text/javascript', mode: 'client'},
    { src: '@/static/assets/js/jquery.slimscroll.js', type:'text/javascript', mode: 'client'},

    { src: '@/static/assets/js/pcoded.min.js', type:'text/javascript', mode: 'client'},
    { src: '@/static/assets/js/vertical-layout.min.js', type:'text/javascript', mode: 'client'},
    { src: '@/static/assets/js/script.min.js', type:'text/javascript', mode: 'client'},
    { src: '@/static/assets/js/rocket-loader.min.js', type:'text/javascript', mode: 'client'},
    '@/plugins/axios',
    '@/plugins/general'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: 'http://127.0.0.1:8000/api/v1'
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
          global: true
        },
        user: {
          property: 'data.user',
          autoFetch: true
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          user: { url: 'auth/me', method: 'get' },
          logout: false
        }

        // tokenRequired: true,
        // tokenType: 'Bearer',
        // tokenName: 'Authorization'
      }
    },
    rewriteRedirects: false,

    redirect: {
      login: "/login",
      logout: "/login",
      home: "/redirect"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.Waves': 'node-waves',
        Waves: 'node-waves'
      })
    ]
  }

}
