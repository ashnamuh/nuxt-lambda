const serverless = {
  stage: 'prod',
  warmup: true,
  NODE_ENV: process.env.NODE_ENV || 'development'
}

const server = {
  port: 3002,
  host: '0.0.0.0',
  baseUrl: `/${serverless.stage}/`
}

module.exports = {
  serverless,
  server
}
