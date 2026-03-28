import { describe, it, expect } from "vitest";
import { createApp } from "../src/app.ts";

describe("GET /", () => {
  it("should return a howdy message", async () => {
    const app = await createApp();

    const actual = await app.inject({ method: "get", url: "/" });

    expect(actual.json()).toStrictEqual({ message: "Howdy, world!" });
  });
});
