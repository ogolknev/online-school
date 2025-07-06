import { describe, expect, test } from "vitest";
import { useAPI } from "~/services";

describe("Test API", () => {
  test("Get course", async () => {
    await useAPI().login({ identifier: "test", password: "testtest" });

    const course = await useAPI().getCourse("jovkdbh8zsbaoln45ohrbl61");

    expect(course).toHaveProperty('videos');
    expect(course).toHaveProperty('preview')
  });

  test("Get inaccessible course", async () => {
    await useAPI().login({ identifier: "test", password: "testtest" });

    const course = await useAPI().getCourse("wqk3t9terdarh9ebw3vhb796");

    if (course?.videos) {
      expect(course.videos[0]).not.toHaveProperty('url')
    }

    expect(course).not.toBeUndefined()
  })
});
