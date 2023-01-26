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
            Sign up for your account
          </h1>
          <div>
            <v-text-field
              v-model="email"
              placeholder="Enter email"
              type="text"
              name="password"
              inputmode="email"
              autocomplete="username"
              autofocus="autofocus"
              spellcheck="false"
              autocorrect="off"
              :outlined="true"
              :solo="false"
              :filled="false"
              :counter="0"
              :clearable="true"
              :rules="[(v) => !!v || 'Required']"
            />
            <v-text-field
              v-model="password"
              :outlined="true"
              type="password"
              name="password"
              placeholder="Enter password"
            ></v-text-field>
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

<script setup>
const email = ref("");
const password = ref("");
</script>

<style lang="scss" scoped></style>
