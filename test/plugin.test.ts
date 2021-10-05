import fastify from 'fastify';
import tap from 'tap';
import fastifyMinio from '../src/plugin';

const app = fastify();
app.register(fastifyMinio);
app.ready((err) => {
  tap.ok(err);
});

const app1 = fastify();
app1.register(fastifyMinio, {
  endPoint: 'play.min.io',
  port: 9000,
  useSSL: true,
  accessKey: 'Q3AM3UQ867SPQQA43P2F',
  secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
});
app1.ready((err) => {
  tap.notOk(err);
});
