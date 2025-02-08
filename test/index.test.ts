import { describe, it } from "node:test";
import { default as assert } from "node:assert";
import { createApp } from "../src/app.ts";

describe("GET /", () => {
  it("should return a howdy message", async (testContext) => {
    const app = await createApp();

    testContext.after(async () => {
      app.close();
    });

    const actual = await app.inject({ method: "get", url: "/" });

    assert.deepEqual(actual.json(), { message: "Howdy, world!" });
  });
});
