import { APIClientFetch } from "./client-fetch";
import { API_BASE, JWT_STORAGE_KEY } from "./consts";
import { authMiddleware } from "./middleware";

let apiClient: APIClient;

export function useAPIClient() {
  apiClient = apiClient ?? createAPIClient();

  return {
    client: apiClient,
    update: (...args: Parameters<typeof apiClient.updateSettings>) => {
      apiClient.updateSettings(...args);
      if (args[0].authKey) localStorage.setItem(JWT_STORAGE_KEY, args[0].authKey)
    },
    middleware: (...args: Parameters<typeof apiClient.registerMiddleware>) => {
      return apiClient.registerMiddleware(...args);
    },
    clean: () => (apiClient = createAPIClient()),
  };
}

function createAPIClient() {
  const jwt = localStorage.getItem(JWT_STORAGE_KEY);

  const client = new APIClientFetch({
    baseURL: API_BASE,
    authKey: jwt ?? undefined,
  });

  client.registerMiddleware(authMiddleware);

  return client;
}
