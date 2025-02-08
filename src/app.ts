import { default as Fastify } from "fastify";
import { logger } from "./tooling/logger.ts";

export const createApp = () => {
  const app = Fastify({ loggerInstance: logger });

  app.get("/", (_request, reply) => {
    return reply.send({ message: "Howdy, world!" });
  });

  return app;
};
