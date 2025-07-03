import { strapi } from "@strapi/client";

let apiClient = strapi({ baseURL: process.env.API_BASE_URL! });

export function useAPI() {

  return {
    
  }
}
