<script setup lang="ts">
const { video } = defineProps<{ video: Video }>();

const config = useRuntimeConfig();
const src = computed(() => {
  if (video.preview?.url) {
    return config.public.apiBase + video.preview?.url
  }
  return undefined
})
</script>

<template>
  <div class="overflow-hidden grid grid-rows-[minmax(0,1fr)_auto] gap-2">
    <UAvatar
      class="size-auto aspect-video w-full rounded-lg"
      :src
      icon="i-lucide-image" />
    <!-- <img class="aspect-video w-full" :src="config.public.apiBase + video.preview?.url"> -->

    <span class="text-lg">{{ video.title }}</span>
  </div>
</template>
