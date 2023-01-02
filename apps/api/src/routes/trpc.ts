import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
import { Context, InnerContext } from "./context";

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter({ shape }) {
    return shape;
  },
});

const testT = initTRPC.context<InnerContext>().create({
  transformer: SuperJSON,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const _testRouter = testT.router;
export const router = t.router;
export const publicProcedure = t.procedure;