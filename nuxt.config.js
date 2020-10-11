import { axios } from './config/index.js'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.min.css',
    '@/assets/css/index.styl'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/analytics.js',
    '@/plugins/axios.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  server: {
    port: 8088,
    host: '0.0.0.0'
  },
  // router: {
  //   middleware: 'redirect'
  // },

  serverMiddleware: [
    { path: '/', handler: '~/middleware-server/filter-ie.js' }
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  // 设置开发跨域
  modules: [
    '@nuxtjs/proxy'
  ],
  proxy: {
    [axios.baseURL]: {
      target: axios.api,
      pathRewrite: {
        ['^' + axios.baseURL]: '/'
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true
  }
}
