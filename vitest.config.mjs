// @ts-check

import { defineConfig, defineProject } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      defineProject({
        test: {
          name: "unit",
          include: ["test/unit/**/*.test.ts"],
        },
      }),
      defineProject({
        test: {
          name: "integration",
          include: ["test/integration/**/*.test.ts"],
        },
      }),
    ],
  },
});
