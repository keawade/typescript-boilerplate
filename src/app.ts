import { default as Fastify } from "fastify";
import { logger } from "./tooling/logger.ts";

export const createApp = () => {
  const app = Fastify({ loggerInstance: logger });

  app.get("/health", (_req, reply) => {
    return reply.send({ status: "ok" });
  });

  app.get("/howdy", (_req, reply) => {
    return reply.send({ message: "Howdy, world!" });
  });

  return app;
};
