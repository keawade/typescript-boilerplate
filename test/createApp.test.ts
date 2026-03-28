import { describe, it, expect } from "vitest";
import { createApp } from "../src/app.ts";

describe("createApp", () => {
  it("should return a Fastify instance", async () => {
    const actual = createApp();

    expect(
      actual.hasRoute({
        method: "get",
        url: "/",
      }),
    ).toBe(true);
  });
});
