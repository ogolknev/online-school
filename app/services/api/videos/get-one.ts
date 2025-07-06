export async function getVideo(id: string, client: APIClient) {
  try {
    const response = await client.fetch(
      `/api/videos/${id}/url?populate[0]=course&populate[1]=preview`
    );

    if (!response.ok) throw new Error(response.statusText);

    const video: Video = await response.json();

    if (!video?.course) {
      throw new Error("video.course not populated");
    }

    return video;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err: unknown) {
  if (err instanceof Error) {
    throw new Error("Failed receive video: " + err.message);
  } else {
    throw err;
  }
}
