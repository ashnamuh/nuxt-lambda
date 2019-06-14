const serverless = {
  stage: 'prod',
  warmup: true, // whether enable lambda function warm up
  NODE_ENV: process.env.NODE_ENV || 'development'
}

const server = {
  port: 3002,
  baseUrl: `/${serverless.stage}/`
}

module.exports = {
  serverless,
  server
}
