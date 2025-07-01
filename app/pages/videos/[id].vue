<script setup lang='ts'>

const route = useRoute()

</script>

<template>
  <div class="grid grid-rows-[minmax(30%,1fr)_auto] gap-5 p-5 overflow-hidden max-w-200 mx-auto">
    <UAvatar class="size-auto rounded-lg w-full aspect-video"/>

    <div>
      <div class="mb-5 flex justify-between">
        <h3 class="text-2xl">Урок {{ route.params.id }} - {имя}</h3>
        <ULink class="text-neutral-500">ПЕРЕЙТИ К КУРСУ</ULink>
      </div>

      <USeparator class="mb-5" />
      
      <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque repellat impedit? Ipsam sunt facilis eos consectetur? Ducimus amet mollitia pariatur perspiciatis voluptates ut, dolore iste dolorem officiis ipsum natus.</p>
    </div>
  </div>
</template>