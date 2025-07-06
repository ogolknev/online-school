export async function getMe(client: APIClient) {
  try {
    const response = await client.fetch('/api/users/me?populate=student');

    if (!response.ok) throw new Error(response.statusText);

    const profile: User = (await response.json()).data;

    return profile;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err: unknown) {
  if (err instanceof Error) {
    throw new Error("Failed receive profile: " + err.message);
  } else {
    throw err;
  }
}