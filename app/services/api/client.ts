import { strapi } from "@strapi/client";

let apiClient: APIClient;

export function useAPIClient() {

  apiClient = apiClient ?? strapi({ baseURL: process.env.NUXT_PUBLIC_API_BASE! })

  return {
    client: apiClient,
    update: (...args: Parameters<typeof strapi>) => {
      const config = args[0]
      apiClient = strapi(config)
    }
  }
}


