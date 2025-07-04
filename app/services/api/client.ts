import { APIClientFetch } from "./client-fetch";

let apiClient: APIClient;

export function useAPIClient() {
  apiClient =
    apiClient ??
    new APIClientFetch({ baseURL: process.env.NUXT_PUBLIC_API_BASE ?? useRuntimeConfig().public.apiBase });

  return {
    client: apiClient,
    update: (...args: Parameters<typeof apiClient.updateSettings>) =>
      apiClient.updateSettings(...args),
    clean: () =>
      (apiClient = new APIClientFetch({
        baseURL: process.env.NUXT_PUBLIC_API_BASE ?? useRuntimeConfig().public.apiBase,
      })),
  };
}
