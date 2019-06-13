const awsServerlessExpress = require('aws-serverless-express')
const binaryMimeTypes = require('./binaryMimeTypes')
const app = require('./app')

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)

module.exports.render = (event, context, callback) => {
  awsServerlessExpress.proxy(server, event, context)
}
