import { describe, expect, test } from "vitest";
import { useAPI } from "~/services";
import { useAPIClient } from "~/services/api/client";

describe("Test API", () => {
  test("Get accessible videos without login", async () => {
    useAPIClient().clean();

    await expect(
      async () => await useAPI().getAccessibleVideos()
    ).rejects.toThrow('Forbidden');
  });

  test("Get accesible videos", async () => {
    await useAPI().login({ identifier: "test", password: "testtest" });

    const response = await useAPI().getAccessibleVideos();

    expect(response[0]).toHaveProperty("title");
  });
});
