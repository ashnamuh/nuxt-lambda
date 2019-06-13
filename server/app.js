const express = require('express')
const { Nuxt } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')

const nuxt = new Nuxt(config)

const BASE_URL = '/dev'
const REGEXP_BASE_URL = new RegExp(`^${BASE_URL}`)
const BASE_URL_TO_BE_ADDED = BASE_URL.replace(/\/$/, '')
const buildPath = (originalPath) => {
  if (REGEXP_BASE_URL.test(originalPath) === true) {
    return originalPath
  }
  return `${BASE_URL_TO_BE_ADDED}${originalPath}`
}

const envMiddleware = (req, res, next) => {
  const originalUrl = req.url
  const envUrl = buildPath(originalUrl)
  req.url = envUrl
  next()
}

app.use(envMiddleware)

app.use(async (req, res, next) => {
  await nuxt.ready()
  nuxt.render(req, res, next)
})

module.exports = app
