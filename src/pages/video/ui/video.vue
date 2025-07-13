<script setup lang="ts">
import { useVideoStore, type Video } from '@/entities/video'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const videoStore = useVideoStore()
const route = useRoute()

const video = ref<Video>()
const url = computed(() => video.value?.url?.replace('video/private', 'play/embed'))

onMounted(async () => {
  video.value = await videoStore.get(route.params.id as string)
})
</script>

<template>
  <div class="space-y-5">
    <iframe
      class="size-auto rounded-lg w-full aspect-video"
      :src="url"
      frameBorder="0"
      allow="clipboard-write; autoplay"
      webkitAllowFullScreen
      mozallowfullscreen
      allowFullScreen
    />

    <div class="space-y-5">
      <div class="flex justify-between">
        <h3 class="text-xl md:text-2xl">{{ video?.title }}</h3>
        <ULink
          class="text-neutral-500"
          @click="$router.push(`/courses/${video?.course?.documentId}`)"
          >ПЕРЕЙТИ К КУРСУ</ULink
        >
      </div>

      <USeparator />

      <p>{{ video?.description }}</p>
    </div>
  </div>
</template>
