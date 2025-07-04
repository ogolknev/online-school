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
  name: string;
  courses?: Course[];
  user?: User;
}

declare interface Course {
  title: string;
  description: string;
  videos?: Video[];
  students?: Student[];
}

declare interface Video {
  title: string;
  url?: string;
  course?: Course[];
  preview?: string;
}
