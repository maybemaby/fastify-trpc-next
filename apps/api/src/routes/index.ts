import { exampleRouter } from "./example";
import { healthRouter } from "./health";
import { router, _testRouter } from "./trpc";

export const appRouter = router({
  health: healthRouter,
  example: exampleRouter,
});

export const testRouter = _testRouter({
  health: healthRouter,
  example: exampleRouter,
});

export type AppRouter = typeof appRouter;
