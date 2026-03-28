import { z } from "zod";
import { logger } from "./logger.ts";

const envSchema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"]),
  PORT: z.coerce.number().default(3000),

  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"])
    .default("info"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  logger.fatal(
    { error: z.flattenError(parsedEnv.error) },
    "Invalid environment variables",
  );

  throw new Error("Invalid environment variables");
}

logger.info(
  { variables: Object.keys(parsedEnv.data) },
  "Validated environment variables",
);

export const env = parsedEnv.data;
