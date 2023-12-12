<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BlurBox"
};
</script>

<style scoped>
.box {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: transparent;
  backdrop-filter: blur(10px);
  filter: blur(0);
  width: max-content;
  padding: 15px;
}
</style>