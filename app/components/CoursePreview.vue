<script setup lang="ts">
const { title, lessons } = defineProps<{
  title: string;
  lessons: { completed: number; total: number };
}>();
</script>

<template>
  <div>
    <USkeleton class="aspect-video w-full" />

    <div class="flex gap-2 items-end">
      <span class="text-lg">{{ title }}</span>
      <span class="text-sm text-neutral-500">УРОКИ {{ lessons.completed }}/{{ lessons.total }}</span>
    </div>
  </div>
</template>
