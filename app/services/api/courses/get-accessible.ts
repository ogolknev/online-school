export async function getAccessibleCourses(client: APIClient) {
  try {
    const response = await client.fetch("/users/me?populate[student][populate][0]=courses")

    if (!response.ok) throw new Error(response.statusText)

    const profile: User = await response.json()

    if (!profile.student) {
      throw new Error("profile.student not populated")
    }

    if (!profile.student.courses) {
      throw new Error("profile.student.courses not populated")
    }

    return profile.student.courses
  } catch (err) {
    if (err instanceof Error) {
      throw new Error("Failed receive accessible courses: " + err.message)
    } else {
      throw err
    }
  }
}