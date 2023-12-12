<template>
  <div class="d-md-none">
    <mobile-side-bar>
      <slot></slot>
    </mobile-side-bar>
  </div>
  <div class="d-none d-md-block">
    <desktop-side-bar>
      <slot></slot>
    </desktop-side-bar>
  </div>
</template>

<script>
import MobileSideBar from "@/components/UI/SideBar/MobileSidebar.vue";
import DesktopSideBar from "@/components/UI/SideBar/DesktopSidebar.vue";

export default {
  name: "TheSideBar",
  components: { DesktopSideBar, MobileSideBar }
};
</script>

<style scoped>

</style>