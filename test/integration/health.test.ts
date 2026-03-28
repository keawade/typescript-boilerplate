import { describe, expect, it } from "vitest";

describe("/health", () => {
  it("should return a healthy status", async () => {
    const response = await fetch("http://localhost:3000/health");

    expect(await response.json()).toStrictEqual({ status: "ok" });
  });
});
