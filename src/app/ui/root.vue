<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header'
</script>

<template>
  <UApp>
    <div class="h-dvh w-dvw">
      <AppHeader />
      <main class="size-full w-8/10 max-w-250 mx-auto">
        <RouterView />
      </main>
    </div>
  </UApp>
</template>
