<script setup lang='ts'>

const route = useRoute()

</script>

<template>
  <div class="grid grid-rows-[minmax(30%,1fr)_auto] gap-5 p-5 overflow-hidden max-w-200 mx-auto">
    <UAvatar class="size-auto rounded-lg w-full aspect-video"/>

    <div>
      <div class="mb-5 flex justify-between">
        <h1 class="page-heading">Course #{{ route.params.id }}</h1>
        <span class="text-neutral-500">23 УРОКА</span>
      </div>

      <USeparator class="mb-5" />
      
      <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam vitae libero eaque, esse dolorum eos totam quidem obcaecati maiores deserunt accusamus tempore amet laboriosam ratione aperiam optio aut. Similique itaque autem illo pariatur temporibus illum odit, magni sequi quia, accusamus molestiae et! Atque doloribus magni nostrum quam libero quo harum deleniti repellendus doloremque consequuntur repellat omnis fuga vero eaque nesciunt, dolore numquam illo quibusdam similique maiores, modi fugiat inventore laborum nam. Libero facilis praesentium nesciunt in porro necessitatibus est sapiente amet voluptas quod, eius quidem, nemo cupiditate obcaecati debitis reiciendis. Cum doloribus accusamus fugiat voluptatum blanditiis, dignissimos sint mollitia inventore iusto vitae ducimus culpa nam sunt eligendi tempore perspiciatis rem praesentium consequuntur, non, cumque consequatur repellat sequi natus? Ipsa molestias repellendus dignissimos numquam error quidem recusandae aliquid, facere culpa et dolore hic nulla incidunt vitae vel omnis cum delectus eligendi iusto dolorem voluptatibus enim veritatis provident! Iure excepturi veniam nemo labore sunt! Sint quibusdam mollitia nemo odio! Natus debitis, non ipsa est, deleniti incidunt ratione obcaecati officiis in adipisci placeat! Debitis veniam iste aliquam labore quis quos enim beatae, distinctio commodi! Suscipit, ratione veritatis alias consectetur eveniet accusamus voluptatem ab deserunt voluptas iste adipisci maxime minus dolorem totam velit!</p>
    
      <div class="flex justify-end fixed bottom-5 right-5">
        <UButton size="xl" label="Перейти" trailing-icon="lucide:arrow-right" />
      </div>
    </div>
  </div>
</template>