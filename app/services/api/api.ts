
import apiLogin, { type LoginPayload } from "./auth/login";
import { useAPIClient } from "./client";
import { getAccessibleCourses as apiGetAccessibleCourses } from "./courses/get-accessible";
import { getAccessibleVideos as apiGetAccessibleVideos } from "./videos/get-accessible";
import { getVideo as apiGetVideo } from "./videos/get-one";
import { getCourse as apiGetCourse } from "./courses/get-one";
import { getMe as apiGetMe } from './profile/me'

export function useAPI() {
  const { client, update } = useAPIClient();

  async function login(payload: LoginPayload) {
    const response = await apiLogin(payload, client);
    update({ authKey: response.jwt });

    return response
  }
 
  async function getMe() {
    return await apiGetMe(client)
  }

  async function getCourse(id: string) {
    return await apiGetCourse(id, client)
  }

  async function getAccessibleCourses() {
    return await apiGetAccessibleCourses(client);
  }

  async function getVideo(id: string) {
    return await apiGetVideo(id, client)
  }

  async function getAccessibleVideos() {
    return await apiGetAccessibleVideos(client)
  }

  return {
    login,
    getMe,
    getCourse,
    getAccessibleCourses,
    getVideo,
    getAccessibleVideos
  };
}
