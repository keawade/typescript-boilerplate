import { default as Fastify } from "fastify";
import { logger } from "./tooling/logger.ts";

export const createApp = () => {
  const app = Fastify({ loggerInstance: logger });

  app.get("/health", (_req, reply) => {
    return reply.send({ status: "ok" });
  });

  app.get("/howdy", async (req, reply) => {
    const name =
      // TODO: Consider alternatives.
      //
      // Always going to be a string so not much point burning cycles just
      // validating "is string" but I do need to type narrow but I really don't
      // like casting, much less on every access.
      (req.query as Record<string, string | undefined>).name ?? "world";

    return reply.send({ message: `Howdy, ${name}!` });
  });

  return app;
};
