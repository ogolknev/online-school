export async function getAccessibleVideos(client: APIClient) {
  try {
    const response = await client.fetch('/videos/accessible?populate=course')

    if (!response.ok) throw new Error(response.statusText)

    const videos: Video[] = (await response.json()).videos

    if (videos.length && !videos[0]?.course) {
      throw new Error('video.course not populated')
    }

    return videos
  } catch (err) {
    handleError(err)
  }

  return []
}

function handleError(err: unknown) {
  if (err instanceof Error) {
    throw new Error("Failed receive accessible videos: " + err.message)
  } else {
    throw err
  }
}