import { env } from "./tooling/env.ts";
import { createApp } from "./app.ts";

const app = createApp();

const closeGracefully = async (signal: NodeJS.Signals) => {
  app.log.info({ signal }, "Received signal to close");

  await app.close();

  app.log.info("Fastify app has been closed");
};
process.once("SIGTERM", closeGracefully);

await app.listen({ host: "0.0.0.0", port: env.PORT });
