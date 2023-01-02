import { FastifyServerOptions } from "fastify";

interface IConfig {
  logger: FastifyServerOptions["logger"];
}

// Define configs here based on NODE_ENV = "development" | "testing" | "production"
export const config: Record<string, IConfig> = {
  development: {
    logger: {
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "yyyy-mm-dd HH:MM:ss.l",
        },
      },
      level: "debug",
    },
  },
  production: {
    logger: {
      serializers: {
        req(req) {
          return {
            method: req.method,
            url: req.url,
          };
        },
      },
      level: "info",
      transport: {
        targets: [
          {
            target: "pino/file",
            level: "info",
            options: {
              destination: `./logs/production.log`,
              mkdir: true,
            },
          },
        ],
      },
    },
  },
  testing: { logger: false },
};
