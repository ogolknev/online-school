export const authMiddleware: APIClientMiddleware = async (response) => {

  if (response.status === 403) {
    useRouter().push('/auth')
  }

  return response
}