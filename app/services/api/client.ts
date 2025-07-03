let apiClient: APIClient;

export function useAPIClient() {
  apiClient =
    apiClient ??
    new APIClientFetch({ baseURL: process.env.NUXT_PUBLIC_API_BASE! });

  return {
    client: apiClient,
    update: (...args: Parameters<typeof apiClient.updateSettings>) =>
      apiClient.updateSettings(...args),
  };
}

class APIClientFetch implements APIClient {
  fetch(
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
    if (authKey || this.authKey && headers.get('Authorization') !== '')
      headers.set("Authorization", `Bearer ${authKey ?? this.authKey}`);
    else {
      headers.delete('Authorization')
    }

    const response = fetch(url, { headers, method, body });

    return response;
  }

  updateSettings(settings: APIClientSettings) {
    this.baseURL = settings.baseURL ?? this.baseURL;
    this.authKey = settings.authKey ?? this.authKey;
  }

  baseURL: string;
  authKey?: string;

  constructor(options: { baseURL: string; authKey?: string }) {
    this.baseURL = options.baseURL;
    this.authKey = options.authKey;
  }
}
