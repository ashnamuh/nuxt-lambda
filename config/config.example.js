module.exports = {
  serverless: {
    stage: 'dev',
    NODE_ENV: process.env.NODE_ENV || 'development'
  },
  server: {
    port: 3002,
    host: '0.0.0.0'
  },
  api: {
    url: 'http://localhost:8080'
  }
}
