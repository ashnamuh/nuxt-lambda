const { Nuxt } = require('nuxt')
const { config } = require('../config/')
const nuxtConfig = require('../nuxt.config.js')

nuxtConfig.dev = !(config.serverless.NODE_ENV === 'production')

const nuxt = new Nuxt(nuxtConfig)

module.exports = {
  nuxt,
  nuxtConfig
}
