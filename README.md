# nuxt-lambda

> Example project uploading nuxt project to aws lambda

## Build Setup

Make sure serverless can access your aws.

Follow [Serverless credentials guide](https://serverless.com/framework/docs/providers/aws/guide/credentials/)


``` bash
# copy example config to make your own config
$ cp config/config.example.js config/config.js

# install dependencies
$ npm install

# serve local dev server with hot reload
$ npm run dev

# build for production and launch local server
$ npm run build
$ npm start

# build and deploy to Lambda and Api gateway
$ npm run deploy

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org), [Serverless docs](https://serverless.com/) and [Aws lambda docs](https://aws.amazon.com/lambda/features/?nc1=h_ls).
