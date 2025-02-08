import { describe, it } from "node:test";
import { default as assert } from "node:assert";
import { createApp } from "../src/app.ts";

describe("createApp", () => {
  it("should return a Fastify instance", async () => {
    const actual = createApp();

    assert.equal(
      actual.hasRoute({
        method: "get",
        url: "/",
      }),
      true,
    );
  });
});
