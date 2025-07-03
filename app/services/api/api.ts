import { useAPIClient } from "./client";
import apiLogin, { type LoginPayload } from "./login";
import { getAccessibleCourses as apiGetAccessibleCourses } from "./courses/get-accessible";

export function useAPI() {
  const { client, update } = useAPIClient();

  async function login(payload: LoginPayload) {
    const response = await apiLogin(payload, client);
    update({ baseURL: process.env.NUXT_PUBLIC_API_BASE!, auth: response.jwt });

    return response
  }

  async function getAccessibleCourses() {
    return await apiGetAccessibleCourses(client);
  }

  return {
    login,
    getAccessibleCourses,
  };
}
