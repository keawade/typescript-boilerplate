import { describe, expect, it } from "vitest";

describe("/howdy", () => {
  it("should say howdy to the world", async () => {
    const response = await fetch("http://localhost:3000/howdy");

    expect(await response.json()).toStrictEqual({ message: "Howdy, world!" });
  });

  it.each(["Sally", "Bob", "folks"])(
    'should say howdy to "%s"',
    async (name) => {
      const response = await fetch(`http://localhost:3000/howdy?name=${name}`);

      expect(await response.json()).toStrictEqual({
        message: `Howdy, ${name}!`,
      });
    },
  );
});
