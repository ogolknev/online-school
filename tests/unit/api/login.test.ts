import { describe, expect, test } from "vitest";
import { useAPI } from "~/services";
import { useAPIClient } from "~/services/api/client";

describe("Test API", () => {

  test('Login with username', async () => {
    const response = await useAPI().login({identifier: 'test', password: 'testtest'})
    expect(response).toHaveProperty('jwt')

    useAPIClient().update({baseURL: process.env.NUXT_PUBLIC_API_BASE!})
  })
  
  test('Login with email', async () => {
    const response = await useAPI().login({identifier: 'test@test.test', password: 'testtest'})
    expect(response).toHaveProperty('jwt')

    useAPIClient().update({baseURL: process.env.NUXT_PUBLIC_API_BASE!})
  })

  test('Login with wrong credentials', () => {
    expect(async () => await useAPI().login({identifier: 'sdafdsasd', password: 'dafsadf'})).rejects.toThrow()

    useAPIClient().update({baseURL: process.env.NUXT_PUBLIC_API_BASE!})
  })

})