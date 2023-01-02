import fastify, { FastifyServerOptions } from "fastify";
import sensible from "@fastify/sensible";

export const build = (opts?: FastifyServerOptions) => {
  const app = fastify(opts);

  app.register(sensible);
  return app;
};
