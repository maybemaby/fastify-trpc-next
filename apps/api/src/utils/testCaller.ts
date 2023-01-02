import { testRouter } from "../routes";
import { createContextInner } from "../routes/context";

export const createTestCaller = async () => {
  const ctx = await createContextInner();
  return testRouter.createCaller(ctx);
};
