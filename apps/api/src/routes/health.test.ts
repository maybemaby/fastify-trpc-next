import t from "tap";
import { createTestCaller } from "../utils/testCaller";

t.test("Health route", (t) => {
  t.test("Success", async (t) => {
    const caller = await createTestCaller();
    const res = await caller.health.health();

    t.ok(res.health);
    t.match(res, { health: "ok" });
  });

  t.end();
});
