import { env } from "./tooling/env.ts";
import { createApp } from "./app.ts";

const app = createApp();

const closeGracefully = async (signal: NodeJS.Signals) => {
  app.log.info(`Received signal to terminate: ${signal}`);

  await app.close();

  // await other things we should cleanup nicely
  process.kill(process.pid, signal);
};
process.once("SIGINT", closeGracefully);
process.once("SIGTERM", closeGracefully);

await app.listen({ host: "0.0.0.0", port: env.PORT });
