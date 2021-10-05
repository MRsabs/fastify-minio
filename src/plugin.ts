import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';
import * as Minio from 'minio';

const fastifyMinio: FastifyPluginCallback<Minio.ClientOptions> = (
  fastify,
  options,
  next,
) => {
  try {
    const minioClient = new Minio.Client(options);
    fastify.decorate('minio', minioClient);
    next();
  } catch (error) {
    next(error as Error);
  }
};

export default fp(fastifyMinio, {
  name: 'fastify-minio',
});

declare module 'fastify' {
  interface FastifyInstance {
    minio: Minio.Client;
  }
}
