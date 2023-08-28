<template>
  <button @click="handleClick" class="base-button">
    <i :class="iconClass"></i>
    <span>{{ label }}</span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    iconClass: String,
    label: String,
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
