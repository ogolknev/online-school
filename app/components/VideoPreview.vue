<script setup lang='ts'>
const { title } = defineProps<{title: string}>()
</script>

<template>
  <div class="overflow-hidden grid grid-rows-[minmax(0,1fr)_auto] gap-2">
    <USkeleton class="aspect-video w-full" />

    <span class="text-lg">{{ title }}</span>
  </div>
</template>