export async function getCourse(id: string, client: APIClient) {
  try {
    const response = await client.fetch(
      `/api/courses/${id}?populate[videos][populate][0]=preview&populate=preview`
    );

    if (!response.ok) throw new Error(response.statusText);

    const course: Course = (await response.json()).data;

    return course;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err: unknown) {
  if (err instanceof Error) {
    throw new Error("Failed receive course: " + err.message);
  } else {
    throw err;
  }
}