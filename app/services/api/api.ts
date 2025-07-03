import { useAPIClient } from "./client";
import apiLogin, { type LoginPayload } from "./login";

export function useAPI() {
  const {client, update} = useAPIClient()

  async function login(payload: LoginPayload) {
    try {
      const {jwt} = await apiLogin(payload, client)
      update({baseURL: useRuntimeConfig().public.apiBase, auth: jwt})
    } catch (err) {
      console.error(err)
    }
  }

  return {
    login
  }
}