<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        ref="modal-backdrop"
        v-if="modelValue"
        class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
        @click.stop="
          persistent ? (effect = true) : $emit('update:modelValue', false)
        "
      >
        <button class="absolute top-4 right-4">
          <i class="ph-x" @click.stop="$emit('update:modelValue', false)" />
        </button>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-start justify-center text-center"
        >
          <div
            class="shadow-xl w-full transition ease-in-out"
            :class="[maxWidth, effect ? 'scale-[1.02]' : 'scale-100']"
            role="dialog"
            ref="modal"
            @click.stop="null"
          >
            {{ $attrs }}
            <slot />
          </div>
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
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  persistent: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: String,
    default: "max-w-[98%]",
  },
});
defineEmits(["update:modelValue"]);

const modal = ref(null);
let effect = ref(false);

modal?.value?.addEventListener("transitionend", () => {
  console.log("transition end");
});

watch(effect, (newValue, oldValue) => {
  if (newValue) {
    setTimeout(() => {
      effect.value = false;
    }, 100);
  }
});
</script>

<style scoped></style>
