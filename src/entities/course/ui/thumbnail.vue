<script setup lang="ts">
import type { Course } from '../model/interface'

const { course } = defineProps<{ course: Course }>()
</script>

<template>
  <div>
    <UAvatar :src="course.preview?.url" class="size-auto aspect-video w-full rounded-lg" />

    <h3 class="mt-1">{{ course.title }}</h3>
  </div>
</template>
