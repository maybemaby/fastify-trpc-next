/* eslint-disable turbo/no-undeclared-env-vars */
import { httpBatchLink, loggerLink } from "@trpc/client";
import type { inferRouterInputs } from "@trpc/server";
import type { inferRouterOutputs } from "@trpc/server";
import { createTRPCNext } from "@trpc/next";
import superjson from "superjson";
import type fastify from "fastify";
import type { AppRouter } from "api/src/types";

function getBaseUrl() {
  if (typeof window !== "undefined")
    // browser should use relative path
    return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";
  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;
  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 5000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      },
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({ url: `${getBaseUrl()}/api` }),
      ],
    };
  },
  ssr: false,
});

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
