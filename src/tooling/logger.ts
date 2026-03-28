import type { FastifyBaseLogger } from "fastify";
import { pino, type LoggerOptions } from "pino";

const createLoggerOptions = (
  nodeEnvironment: string | undefined,
): LoggerOptions => {
  switch (nodeEnvironment) {
    case "development":
      return {
        level: process.env.LOG_LEVEL ?? "info",
        transport: {
          target: "pino-pretty",
          options: {
            translateTime: "HH:MM:ss Z",
            ignore: "pid,hostname",
          },
        },
      };

    case "production":
    default:
      return {
        level: process.env.LOG_LEVEL ?? "info",
      };
  }
};

const pinoInstance = pino(createLoggerOptions(process.env.NODE_ENV));

export const logger: FastifyBaseLogger = pinoInstance;
