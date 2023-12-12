<template>
  <div class="sidebar" :style="{width: sidebarWidth}">
    <button @click="collapsed = !collapsed">collapse</button>
    <slot v-if="!collapsed"></slot>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "MobileSideBar",
  setup() {
    const collapsed = ref(false);
    const sidebar_width = 90;
    const sidebar_width_collapsed = 10;
    const sidebarWidth = computed(() => `${collapsed.value ? sidebar_width_collapsed : sidebar_width}%`)

    return {
      collapsed,
      sidebarWidth
    };
  }
};
</script>

<style scoped>
  .sidebar {
    height: 100%;
    width: 100%;
    backdrop-filter: blur(10px);
    filter: blur(0);
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