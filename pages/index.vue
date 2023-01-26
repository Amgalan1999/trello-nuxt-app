<template>
  <div>
    <button type="button" @click="open = !open">asdfas</button>
    <v-navigation-drawer v-model="open" right maxWidthClass="max-w-[600px]">
      hi
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
