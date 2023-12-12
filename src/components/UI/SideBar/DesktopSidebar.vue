<template>
  <div class="sidebar" :style="{width: sidebarWidth}">
    <button @click="collapsed = !collapsed">collapse</button>
    <slot></slot>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "DesktopSideBar",
  setup() {
    const collapsed = ref(false);
    const sidebar_width = 180;
    const sidebar_width_collapsed = 38;
    const sidebarWidth = computed(() => `${collapsed.value ? sidebar_width_collapsed : sidebar_width}px`)

    return {
      collapsed,
      sidebarWidth
    };
  }
};
</script>

<style scoped>
  .sidebar {
    background-color: #42b983;
    height: 90dvh;
    color: whitesmoke;
    float: left;
    position: fixed;
    z-index: 1;
    padding: 0.5rem;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
  }
</style>