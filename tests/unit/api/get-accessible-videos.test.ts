import { describe, expect, test } from "vitest";
import { useAPI } from "~/services";

describe("Test API", () => {
  test('Get accessible videos', async () => {
    await useAPI().login({identifier: 'test', password: 'testtest'})

    const response = await useAPI().getAccessibleCourses()

    expect(response[0]).toHaveProperty('title')
  })
})