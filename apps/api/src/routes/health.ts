import { publicProcedure, router } from "./trpc";

export const healthRouter = router({
  health: publicProcedure.query(({ ctx }) => {
    ctx.req.log.info("Health check");
    return {
      health: "ok",
    };
  }),
});
