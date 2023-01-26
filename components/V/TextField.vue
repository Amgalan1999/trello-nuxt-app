<template>
  <div class="mb-6">
    <div class="relative">
      <div
        v-if="showSlot('prepend')"
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <slot name="prepend" />
      </div>

      <input
        v-bind="$attrs"
        :value="modelValue"
        class="outline-none block w-full px-2 py-2.5 rounded text-sm placeholder:text-gray-400 placeholder:font-thin transition-all"
        :class="{
          'border border-gray-300 focus:border-primary hover:border-black':
            errors.length == 0 && outlined,
          'shadow-md': solo,
          'bg-gray-100': filled,
          'border border-error focus:border-error': errors.length,
          'pl-9': showSlot('prepend'),
          ...$attrs.class,
        }"
        :style="{ paddingRight: appendWidth }"
        @input="
          $emit('update:modelValue', $event.target.value),
            validate($event.target.value)
        "
      />
      <div
        v-if="showSlot('append')"
        ref="append"
        class="absolute right-2 inset-y-0 flex items-center"
      >
        <slot name="append" />
      </div>
    </div>
    <div class="mt-2 text-sm flex flex-row items-start justify-between">
      <p
        v-if="Array.isArray(errors) && errors.length"
        class="text-sm text-error transition-all"
      >
        {{ errors[0] }}
      </p>
      <span v-if="counter" class="ml-auto text-gray-400 text-xs"
        >{{ modelValue.length }}/{{ counter }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
const props = defineProps({
  modelValue: String || Number,
  outlined: {
    type: Boolean,
    default: false,
  },
  solo: {
    type: Boolean,
    default: false,
  },
  filled: {
    type: Boolean,
    default: false,
  },
  counter: {
    type: Number,
    default: 0,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Array,
    default: [],
  },
});
defineEmits(["update:modelValue"]);

const slots = useSlots();
const showSlot = (value) => {
  return !!slots[value];
};

const append = ref("");
let appendWidth = ref("8px");

onMounted(() => {
  if (showSlot("append") && append?.value?.clientWidth)
    appendWidth = `${append.value.clientWidth + 16}px`;
});

var errors = reactive([]);

const validate = (value) => {
  let results = [];
  (props.rules || []).forEach((rule) => {
    let result = rule(value);
    if (result !== true) results.push(result);
  });

  errors = results;
};
</script>

<style lang="scss" scoped></style>
