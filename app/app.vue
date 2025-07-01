<script setup lang='ts'>
onMounted(() => {
  if (import.meta.dev) {
    const devtools: HTMLElement | null = document.querySelector('nuxt-devtools-frame');

    if (devtools) {
      devtools.style.position = 'absolute';
      devtools.style.left = '50%';
      devtools.style.bottom = '8px';
    }
  }
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>