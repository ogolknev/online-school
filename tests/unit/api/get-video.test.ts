import { describe, expect, test } from "vitest";
import { useAPI } from "~/services";

describe("Test API", () => {
  test("Get video", async () => {
    await useAPI().login({ identifier: "test", password: "testtest" });

    const video = await useAPI().getVideo("m4wv2laswj7bdnrl8zv9v3ti");

    expect(video).toHaveProperty('url');
  });

  test("Get inaccessible video", async () => {
    await useAPI().login({ identifier: "test", password: "testtest" });

    const video = useAPI().getVideo("pwqmhfxxtaphb3xlmng8lqws");

    await expect(video).rejects.toThrow('Forbidden')
  })
});
