<script setup lang="ts"></script>

<template>
  <header
    class="sticky top-0 z-50 bg-neutral-800/50 backdrop-blur-2xl h-15 border-b border-neutral-700 flex items-center justify-between px-5">
    <h1 class="text-2xl font-bold font-serif" @click="$router.push('/')">
      ПАРИЖСКАЯ ШКОЛА СТИЛИСТОВ
    </h1>

    <UPopover>
      <UAvatar icon="i-lucide-user" />

      <template #content>
        <div class="p-10">

          dsafadsf
        </div>
      </template>
    </UPopover>
  </header>
</template>
