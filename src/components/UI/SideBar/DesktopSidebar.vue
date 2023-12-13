<template>
  <div class="sidebar" :style="{width: sidebarWidth}">
    <div @click="toggle">
      <i class="bi bi-arrow-bar-right" v-if="collapsed"></i>
      <i class="bi bi-arrow-bar-left" v-else></i>
    </div>
    <profil-icon v-if="!collapsed"></profil-icon>
    <slot v-if="!collapsed"></slot>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ProfilIcon from "@/components/UI/SideBar/ProfileIcon.vue";

export default {
  name: "DesktopSideBar",
  components: { ProfilIcon },
  setup() {
    const store = useStore();
    const collapsed = ref(false);
    const sidebar_width = 250;
    const sidebar_width_collapsed = 38;
    const sidebarWidth = computed(() => `${collapsed.value ? sidebar_width_collapsed : sidebar_width}px`);
    const toggle = () => {
      collapsed.value = !collapsed.value;
      const a = sidebarWidth.value
      console.log(a)

      store.dispatch("setSidebarWidth", { sidebarWidth: a })
    }

    return {
      collapsed,
      sidebarWidth,
      toggle,
    };
  }
};
</script>

<style scoped>
  .sidebar {
    height: calc(100vh - 100px);
    background: linear-gradient(45deg, var(--secondary), var(--thrid));
    color: whitesmoke;
    float: left;
    position: fixed;
    z-index: 1;
    padding: 0.5rem;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
</style>