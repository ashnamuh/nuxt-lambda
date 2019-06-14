const { Builder } = require('nuxt')
const consola = require('consola')
const internalIp = require('internal-ip')
const { config } = require('../config/')
const app = require('./app')
const { nuxt, nuxtConfig } = require('./nuxt')

const port = config.server.port

const start = async () => {
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.listen(port)
  consola.ready({
    message: `Server listening on http://${internalIp.v4.sync()}:${port}`,
    badge: true
  })
}

start()
