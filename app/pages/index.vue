<script setup lang="ts">
import { useAPI } from "~/services";

const videos = ref<Video[]>([]);
const courses = ref<Course[]>([]);

const videosSorted = computed(() => {
  return videos.value.slice().sort((a, b) => a.order - b.order);
});

onMounted(async () => {
  videos.value = await useAPI().getAccessibleVideos();
  courses.value = await useAPI().getAccessibleCourses();
});
</script>

<template>
  <div class="size-full px-5">
    <section id="videos" class="my-10">
      <h2 class="section-heading mb-5">Ваши уроки</h2>

      <div
        class="flex gap-2 overflow-y-auto max-w-full scrollbar-hidden scroll-smooth">
        <VideoPreview
          v-for="video in videosSorted"
          :key="video.title"
          class="w-80 rounded shrink-0"
          :video
          @click="$router.push(`/videos/${video.documentId}`)" />
      </div>
    </section>

    <section id="accessible-courser">
      <h2 class="section-heading mb-5">Ваши курсы</h2>

      <div
        class="flex gap-2 overflow-y-auto max-w-full scrollbar-hidden scroll-smooth">
        <CoursePreview
          v-for="course in courses"
          :key="course.documentId"
          class="w-100 rounded shrink-0"
          :course @click="$router.push(`/courses/${course.documentId}`)"/>
      </div>
    </section>
  </div>
</template>
