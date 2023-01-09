<template>
  <header class="px-2 py-1.5 bg-blue-500 text-white block sticky top-0 z-10">
    <div class="space-x-4 flex flex-row items-center flex-grow">
      <div>
        <button
          class="rounded flex items-center justify-center p-1 hover:bg-black hover:bg-opacity-20 active:bg-opacity-40 active:bg-black"
        >
          <i class="ph-dots-nine-bold text-xl"></i>
        </button>
      </div>
      <div>
        <img class="h-4" src="~/assets/img/header-logo.gif" alt="" />
      </div>
      <div
        class="space-x-4 flex flex-row items-center justify-between flex-grow"
      >
        <div class="space-x-4 flex flex-row items-center">
          <button
            class="text-sm h-8 px-2 py-2 flex flex-row items-center rounded hover:bg-black hover:bg-opacity-20 active:bg-black active:bg-opacity-40"
          >
            Workspaces
            <i class="ph-caret-down ml-2"></i>
          </button>
          <button
            class="text-sm h-8 px-2 py-2 flex flex-row items-center rounded hover:bg-black hover:bg-opacity-20 active:bg-black active:bg-opacity-40"
          >
            Recent
            <i class="ph-caret-down ml-2"></i>
          </button>
          <button
            class="text-sm h-8 px-2 py-2 flex flex-row items-center rounded hover:bg-black hover:bg-opacity-20 active:bg-black active:bg-opacity-40"
          >
            Starred
            <i class="ph-caret-down ml-2"></i>
          </button>
          <button
            class="text-sm h-8 px-2 py-2 flex flex-row items-center rounded hover:bg-black hover:bg-opacity-20 active:bg-black active:bg-opacity-40"
          >
            Templates
            <i class="ph-caret-down ml-2"></i>
          </button>
          <button
            class="text-sm h-8 px-2 py-2 flex flex-row items-center rounded bg-black bg-opacity-30 hover:bg-white hover:bg-opacity-20 active:bg-white active:bg-opacity-40"
          >
            Create
          </button>
        </div>

        <div class="relative text-white focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              class="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            class="py-2 text-sm text-white placeholder:text-white bg-white bg-opacity-10 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search..."
            autocomplete="off"
          />
        </div>
      </div>
      <div class="space-x-1 flex flex-row items-center justify-end">
        <button
          class="w-8 h-8 rounded-full flex justify-center items-center hover:bg-black hover:bg-opacity-20 active:bg-black active:bg-opacity-20"
        >
          <i class="ph-bell text-xl" />
        </button>
        <button
          class="w-8 h-8 rounded-full flex justify-center items-center hover:bg-black hover:bg-opacity-20 active:bg-black active:bg-opacity-20"
        >
          <i class="ph-question text-xl" />
        </button>
        <button
          class="w-8 h-8 rounded-full flex justify-center items-center hover:bg-black hover:bg-opacity-20 active:bg-black active:bg-opacity-20 overflow-hidden"
        >
          <div class="relative w-full h-full">
            <span
              class="absolute top-0 left-0 w-full h-full bg-contain bg-[url('https://trello-members.s3.amazonaws.com/5c820175e6693f22edabd6cd/dfe2170d2bae3f6ab7ac109c821e3988/50.png')]"
            />
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
