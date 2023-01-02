import { exampleRouter } from "./example";
import { healthRouter } from "./health";
import { router } from "./trpc";

export const appRouter = router({
  health: healthRouter,
  example: exampleRouter,
});

export type AppRouter = typeof appRouter;
