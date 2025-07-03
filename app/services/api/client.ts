import { strapi } from "@strapi/client";

let apiClient: APIClient;

export function useAPIClient() {

  console.log(useRuntimeConfig().public.apiBase)

  apiClient = apiClient ?? strapi({ baseURL: useRuntimeConfig().public.apiBase })

  return {
    client: apiClient,
    update: (...args: Parameters<typeof strapi>) => {
      const config = args[0]
      apiClient = strapi(config)
    }
  }
}


