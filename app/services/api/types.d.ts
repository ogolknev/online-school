declare interface APIClient {
  fetch(...args: Parameters<typeof fetch>): Promise<Response>
}