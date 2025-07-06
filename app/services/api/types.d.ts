declare interface APIClient {
  fetch(...args: Parameters<typeof fetch>): Promise<Response>;
  updateSettings(settings: APIClientSettings);
  registerMiddleware(middleware: APIClientMiddleware): {
    unregister: () => void;
  };
}

declare interface APIClientSettings {
  baseURL?: string;
  authKey?: string;
}

declare type APIClientMiddleware = (response: Response) => Promise<Response>;

declare type HTTPMethod = "GET" | "POST" | "DELETE" | "PATCH" | "PUT";

declare interface User {
  documentId: string;
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  student?: Student;
}

declare interface Student {
  documentId: string;
  name: string;
  courses?: Course[];
  user?: User;
}

declare interface Course {
  documentId: string;
  title: string;
  description: string;
  videos?: Video[];
  students?: Student[];
  preview?: Media;
}

declare interface Video {
  documentId: string;
  title: string;
  description?: string;
  url?: string;
  course?: Course;
  preview?: Media;
  order: number;
}

declare interface Media {
  url: string;
}
