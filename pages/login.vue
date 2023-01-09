<template>
  <div>
    <div class="py-10">
      <img
        src="~/assets/img/trello-logo-blue.svg"
        alt="Trello"
        class="mx-auto max-h-11"
      />
    </div>
    <section>
      <div class="max-w-md mx-auto">
        <div class="px-10 py-6 bg-white shadow-md rounded-sm">
          <h1 class="text-center text-slate-500 mb-6 mt-3 font-bold">
            Log in to Trello
          </h1>
          <div>
            <div class="mb-6">
              <input
                type="text"
                name="email"
                class="outline-none block w-full px-2 py-2.5 text-sm rounded-sm bg-gray-50 border placeholder:text-gray-400 placeholder:font-thin border-gray-300 focus:border-blue-500 transition-all"
                inputmode="email"
                autocomplete="username"
                autofocus="autofocus"
                spellcheck="false"
                autocorrect="off"
                placeholder="Enter email"
                @keypress.enter="$refs.password.focus()"
              />
              <p
                :class="{ hidden: !message }"
                class="mt-2 text-sm text-green-600 transition-all"
              >
                <span class="font-medium">Well done!</span> Some success
                message.
              </p>
            </div>
            <div class="mb-6">
              <div class="relative">
                <input
                  ref="password"
                  type="password"
                  name="password"
                  class="outline-none block w-full px-2 py-2.5 text-sm rounded-sm bg-gray-50 border placeholder:text-gray-400 placeholder:font-thin border-gray-300 focus:border-blue-500 transition-all"
                  inputmode="email"
                  autocomplete="username"
                  autofocus="autofocus"
                  spellcheck="false"
                  autocorrect="off"
                  placeholder="Enter password"
                />
                <button class="absolute"></button>
              </div>
              <p
                :class="{ hidden: !message }"
                class="mt-2 text-sm text-green-600 transition-all"
              >
                <span class="font-medium">Well done!</span> Some success
                message.
              </p>
            </div>
            <button
              type="button"
              class="w-full flex flex-row items-center justify-center px-6 py-2.5 mb-6 bg-blue-600 text-white font-bold text-sm leading-tight capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Continue
            </button>
          </div>
        </div>
        <ul class="my-6 text-xs text-center block">
          <li class="list-none inline-block">
            <NuxtLink href="" target="_blank" class="text-blue-500"
              >Privacy Policy</NuxtLink
            >
          </li>
          <li
            class="list-none inline-block before:content-['\2022'] before:mx-3 before:text-blue-500"
          >
            <NuxtLink href="" target="_blank" class="text-blue-500"
              >Terms of Service</NuxtLink
            >
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
