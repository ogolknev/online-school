import { describe, expect, test } from "vitest";
import { useAPI } from "~/services";

describe("Test API", () => {

  test('Login with username', async () => {
    const response = await useAPI().login({identifier: 'test', password: 'testtest'})
    expect(response).toHaveProperty('jwt')
  })
  
  test('Login with email', async () => {
    const response = await useAPI().login({identifier: 'test@test.test', password: 'testtest'})
    expect(response).toHaveProperty('jwt')
  })

  test('Login with wrong credentials', async () => {
    await expect(async () => await useAPI().login({identifier: 'sdafdsasd', password: 'dafsadf'})).rejects.toThrow('Неверное имя пользователя или пароль')
  })
})