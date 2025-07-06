<script setup lang="ts">
import { useAPI } from "~/services";

const config = useRuntimeConfig();

const route = useRoute();
const course = ref<Course | null>(null);

const videos = computed(() => {
  return course.value?.videos?.slice().sort((a, b) => a.order - b.order);
});

const src = computed(() => {
  if (course.value?.preview?.url) {
    return config.public.apiBase + course.value.preview?.url;
  }
  return undefined;
});

onMounted(async () => {
  course.value = (await useAPI().getCourse(route.params.id as string)) ?? null;

  console.log(course.value?.preview);
});

const open = ref(false);
</script>

<template>
  <div
    class="grid grid-rows-[minmax(30%,1fr)_auto] gap-5 p-5 overflow-hidden max-w-200 mx-auto">
    <UAvatar class="size-auto rounded-lg w-full aspect-video" :src />

    <div>
      <div class="mb-5 flex justify-between">
        <h1 class="page-heading">{{ course?.title }}</h1>
        <span class="text-neutral-500">{{ course?.videos?.length }} УРОКА</span>
      </div>

      <USeparator class="mb-5" />

      <p class="mb-5">{{ course?.description }}</p>

      <div class="flex justify-end fixed bottom-5 right-5">
        <UButton
          size="xl"
          label="Перейти"
          trailing-icon="lucide:arrow-right"
          @click="open = true" />
      </div>
    </div>

    <USlideover v-model:open="open">
      <template #body>
        <VideoPreview
          v-for="video of videos"
          :key="video.documentId"
          :video
          @click="$router.push(`/videos/${video.documentId}`)" />
      </template>
    </USlideover>
  </div>
</template>
