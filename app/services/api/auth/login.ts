export default async function (payload: LoginPayload, client: APIClient): Promise<LoginResponse> {
  const response = await client.fetch('/auth/local', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '',
    }
  })

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('Неверное имя пользователя или пароль')
    } else {
      throw new Error(response.statusText)
    }
  }

  return await response.json()
}

export type LoginPayload = {
  identifier: string
  password: string
}

type LoginResponse = {
  jwt: string,
  user: User
}