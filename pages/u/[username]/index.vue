<template>
  <div class="block container mx-auto">
    <div class="mt-10 flex flex-row flex-grow gap-3">
      <aside class="w-72 block">
        <ul class="space-y-2 pb-2 w-full border-b border-b-gray-200">
          <li class="w-full">
            <button
              class="w-full py-1.5 px-2 text-start bg-blue-200 rounded text-sky-700 text-sm font-bold flex flex-row items-center"
              :to="`/u/${$route.params.username}/boards`"
            >
              <i class="ph-layout-fill text-lg mr-2"></i>
              Boards
            </button>
          </li>
          <li class="w-full">
            <button
              class="w-full py-1.5 px-2 text-start rounded text-gray-700 text-sm font-bold hover:bg-gray-800 hover:bg-opacity-10 flex flex-row items-center"
              :to="`/templates`"
            >
              <i class="ph-cards-fill text-lg mr-2"></i>
              Templates
            </button>
          </li>
          <li class="w-full">
            <button
              class="w-full py-1.5 px-2 text-start rounded text-gray-700 text-sm font-bold hover:bg-gray-800 hover:bg-opacity-10 flex flex-row items-center"
              :to="`/home`"
            >
              <i class="ph-house-fill text-lg mr-2"></i>
              Home
            </button>
          </li>
        </ul>
        <hr>
      </aside>
      <main class="w-full bg-red-800"></main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
