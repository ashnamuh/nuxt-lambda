const config = require('./config')

// for serverless.yml
const serverlessConfig = () => { // eslint-disable-line
  return config.serverless
}

module.exports = {
  config,
  serverlessConfig
}
