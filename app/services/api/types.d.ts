declare interface APIClient {
  fetch(...args: Parameters<typeof fetch>): Promise<Response>
}

declare interface User {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
  student?: Student
}

declare interface Student {
  name: string,
  courses?: Course[],
  user?: User,
}

declare interface Course {
  title: string,
  description: string,
  videos?: Video[],
  students?: Student[],
}

declare interface Video {
  title: string,
  url?: string,
  courses?: Course[]
}