<template>
  <Teleport to="body">
    <transition :name="right ? 'slide-right' : 'slide-left'">
      <div
        v-if="modelValue"
        class="overlay z-50 min-h-screen overflow-y-auto bg-black/50 min-w-full fixed inset-0 pointer-events-auto"
      >
        <div
          class="navigation w-full h-full relative flex justify-end items-start"
          :class="{ 'flex-row': right, 'flex-row-reverse': !right }"
        >
          <button
            class="flex justify-center items-center p-1 m-3 border-white border rounded"
            @click="$emit('update:modelValue', false)"
          >
            <i class="ph-x text-md text-white"></i>
          </button>
          <aside
            class="bg-white h-full w-full transition-all translate-x-0"
            :class="[maxWidthClass]"
          >
            <slot />
          </aside>
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
  right: {
    type: Boolean,
    default: false,
  },
  maxWidthClass: {
    type: String,
    default: "max-w-md",
  },
});
defineEmits(["update:modelValue"]);
</script>

<style lang="css" scoped>
.slide-left-enter-active,
.slide-right-enter-active {
  transition: all 0.2s ease-out;
  opacity: 1;
}

.slide-left-enter-active .navigation,
.slide-right-enter-active .navigation {
  transition: all 0.2s ease-out;
}

.slide-left-enter-active .navigation {
  transform: translateX(-90%);
}
.slide-right-enter-active .navigation {
  transform: translateX(190%);
}

.slide-left-enter-to .navigation,
.slide-right-enter-to .navigation {
  transition: all 0.2s ease-out;
}
.slide-left-enter-to .navigation {
  transform: translateX(0%);
}
.slide-right-enter-to .navigation {
  transform: translateX(0%);
}

.slide-left-leave-active,
.slide-right-leave-active {
  transition: all 0.2s ease-out;
  opacity: 0;
}

.slide-left-leave-active .navigation,
.slide-right-leave-active .navigation {
  transition: all 0.2s ease-out;
}

.slide-left-leave-active .navigation {
  transform: translateX(-30%);
}

.slide-right-leave-active .navigation {
  transform: translateX(130%);
}
</style>
