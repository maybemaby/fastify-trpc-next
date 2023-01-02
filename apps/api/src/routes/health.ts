import { publicProcedure, router } from "./trpc";

export const healthRouter = router({
  health: publicProcedure.query(({ ctx }) => {
    return {
      health: "ok",
    };
  }),
});
