export default async function (payload: LoginPayload, client: APIClient): Promise<LoginResponse> {
  const response = await client.fetch('/auth/local', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) throw new Error('Failed log in: ' + response.statusText)
  
  return await response.json()
}

export type LoginPayload = {
  identifier: string
  password: string
}

type LoginResponse = {
  jwt: string
}