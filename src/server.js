/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'], // an array of origins or 'ignore'
        headers: ['Authorization'], // an array of strings - 'Access-Control-Allow-Headers'
        exposedHeaders: ['Accept'], // an array of exposed headers - 'Access-Control-Expose-Headers',
        additionalExposedHeaders: ['Accept'], // an array of additional exposed headers
        maxAge: 60,
        credentials: true,
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
