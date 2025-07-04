export class APIClientFetch implements APIClient {
  async fetch(
    url: string,
    options?: {
      baseURL?: string;
      authKey?: string;
      headers?: HeadersInit;
      method?: HTTPMethod;
      body?: BodyInit;
    }
  ) {
    const { baseURL, authKey, method = "GET", body } = options ?? {};

    url = baseURL ?? this.baseURL + url;

    const headers = new Headers(options?.headers);

    if (!headers.has("Content-Type"))
      headers.set("Content-Type", "application/json");
    if (authKey || (this.authKey && headers.get("Authorization") !== ""))
      headers.set("Authorization", `Bearer ${authKey ?? this.authKey}`);
    else {
      headers.delete("Authorization");
    }

    let response = await fetch(url, { headers, method, body });

    this.middlewares?.forEach(async (m) => {
      response = await m(response) ?? response;
    });

    return response;
  }

  updateSettings(settings: APIClientSettings) {
    this.baseURL = settings.baseURL ?? this.baseURL;
    this.authKey = settings.authKey ?? this.authKey;
  }

  registerMiddleware(middleware: APIClientMiddleware) {
    this.middlewares = this.middlewares ?? new Set()
    this.middlewares.add(middleware)

    return {
      unregister: () => {
        this.middlewares?.delete(middleware)
      }
    }
  }

  baseURL: string;
  authKey?: string;
  middlewares?: Set<APIClientMiddleware>;

  constructor(options: { baseURL: string; authKey?: string }) {
    this.baseURL = options.baseURL;
    this.authKey = options.authKey;
  }
}