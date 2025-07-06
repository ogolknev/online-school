<script setup lang="ts">
const { course } = defineProps<{
  course: Course
}>();

const config = useRuntimeConfig();
const src = computed(() => {
  if (course.preview?.url) {
    return config.public.apiBase + course.preview?.url
  }
  return undefined
})
</script>

<template>
  <div>
    <UAvatar class="size-auto aspect-video w-full rounded-lg" :src />

    <div class="flex gap-2 items-end">
      <span class="text-lg">{{ course.title }}</span>
      <span class="text-sm text-neutral-500">{{ course.videos?.length ?? 0 }} УРОКОВ</span>
    </div>
  </div>
</template>
