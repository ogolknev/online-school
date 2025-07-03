<script setup lang="ts">
import { useAPI } from './services';

onMounted(async () => {
  await nextTick()

  if (import.meta.dev) {
    const devtools: HTMLElement | null = document.querySelector(
      "nuxt-devtools-frame"
    );

    console.log()

    if (devtools) {
      devtools.style.position = "absolute";
      devtools.style.left = "50%";
      devtools.style.bottom = "8px";
    }
  }

  await useAPI().login({identifier: 'ogolknevnv', password: '12092021'})
  console.log(await useAPI().getAccessibleCourses())
});
</script>

<template>
  <UApp>
    <AppHeader />
    <NuxtPage />
  </UApp>
</template>
