<template>
  <Teleport to="body">
    <transition
      enter="transition-all ease-in duration-300 transform"
      enterFrom="opacity-0 -translate-y-12"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-out duration-300 transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-12"
    >
      <div
        v-if="modelValue"
        class="absolute top-4 left-1/2 -translate-x-1/2 max-w-sm w-full rounded bg-success text-white text-sm p-4"
      >
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row items-center">
            <i class="ph-warning-fill text-xl"></i>
            <div class="ml-4"><slot /></div>
          </div>
          <button
            class="transition ease-in-out flex justify-center items-center rounded-full w-8 h-8 hover:bg-white/25"
            @click="$emit('update:modelValue', false)"
          >
            <i class="ph-x"></i>
          </button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
let props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  timeout: {
    type: Number,
    default: 5000,
  },
});
const emit = defineEmits(["update:modelValue"]);

const snackbar = computed(() => props.modelValue);

watch(snackbar, (value) => {
  if (value == true)
    setTimeout(() => {
      emit("update:modelValue", false);
    }, props.timeout);
});
</script>

<style lang="scss" scoped></style>
