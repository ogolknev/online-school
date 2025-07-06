import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: "nuxt",
    env: {
      NUXT_PUBLIC_API_BASE: "http://localhost:1337",
    },
  },
});
