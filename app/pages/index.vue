<script setup lang="ts"></script>

<template>
  <div class="size-full px-5">
    <section id="videos" class="mb-10">
      <h2 class="section-heading mb-5">Ваши уроки</h2>

      <div
        class="flex gap-2 overflow-y-auto max-w-full scrollbar-hidden scroll-smooth">
        <VideoPreview
          v-for="n in 30"
          :key="n"
          class="w-80 rounded shrink-0"
          :title="`Video #${n}`" />
      </div>
    </section>

    <section id="accessible-courser">
      <h2 class="section-heading mb-5">Ваши курсы</h2>

      <div
        class="flex gap-2 overflow-y-auto max-w-full scrollbar-hidden scroll-smooth">
        <CoursePreview
          v-for="n in 30"
          :key="n"
          class="w-100 rounded shrink-0"
          :title="`Course #${n}`"
          :lessons="{ completed: 2, total: 15 }" />
      </div>
    </section>
  </div>
</template>
