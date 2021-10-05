# fastify-minio

a wrapper around minio-js for Fastify; with this plugin you can share the same minio client in every part of your server.

Under the hood [minio-js](https://github.com/minio/minio-js) is used as a client, the ``options`` that you pass to `register` will be passed to the MinIo client.

## Install
```
npm i fastify-minio --save
```
## Usage
Add it to your project with `register` and you are done!
You can access the MinIo client via `fastify.minio`.

```js
'use strict'

const fastify = require('fastify')()

fastify.register(require('fastify-minio'), {
    endPoint: 'play.min.io',
    port: 9000,
    useSSL: true,
    accessKey: 'Q3AM3UQ867SPQQA43P2F',
    secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
})
```

## License

Licensed under [MIT](./LICENSE).
