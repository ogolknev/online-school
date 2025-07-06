<script setup lang="ts">
import { useAPI } from "~/services";

const route = useRoute();
const video = ref<Video | null>(null);

onMounted(async () => {
  video.value = (await useAPI().getVideo(route.params.id as string)) ?? null;
});
</script>

<template>
  <div
    class="grid grid-rows-[minmax(30%,1fr)_auto] gap-5 p-5 overflow-hidden max-w-200 mx-auto">
    <iframe
      class="size-auto rounded-lg w-full aspect-video"
      :src="video?.url?.replace('video/private', 'play/embed')"
      frameBorder="0"
      allow="clipboard-write; autoplay"
      webkitAllowFullScreen
      mozallowfullscreen
      allowFullScreen />

    <div>
      <div class="mb-5 flex justify-between">
        <h3 class="text-2xl">{{ video?.title }}</h3>
        <ULink class="text-neutral-500" @click="$router.push(`/courses/${video?.course?.documentId}`)">ПЕРЕЙТИ К КУРСУ</ULink>
      </div>

      <USeparator class="mb-5" />

      <p class="mb-5">{{video?.description}}</p>
    </div>
  </div>
</template>
