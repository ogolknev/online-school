import { useAPIClient } from "./client";
import apiLogin, { type LoginPayload } from "./auth/login";
import { getAccessibleCourses as apiGetAccessibleCourses } from "./courses/get-accessible";
import { getAccessibleVideos as apiGetAccessibleVideos } from "./videos/get-accessible";

export function useAPI() {
  const { client, update } = useAPIClient();

  async function login(payload: LoginPayload) {
    const response = await apiLogin(payload, client);
    update({ baseURL: process.env.NUXT_PUBLIC_API_BASE ?? useRuntimeConfig().public.apiBase, authKey: response.jwt });

    return response
  }

  async function getAccessibleCourses() {
    return await apiGetAccessibleCourses(client);
  }

  async function getAccessibleVideos() {
    return await apiGetAccessibleVideos(client)
  }

  return {
    login,
    getAccessibleCourses,
    getAccessibleVideos
  };
}
