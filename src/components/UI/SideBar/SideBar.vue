<template>
  <div class="sidebar shadow-lg">
    <profil-icon></profil-icon>
    <slot></slot>
  </div>
</template>

<script>
import ProfilIcon from "@/components/UI/SideBar/ProfileIcon.vue";

export default {
  name: "SideBar",
  components: { ProfilIcon },
};
</script>

<style scoped>
.sidebar {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #616e7f;
  font-size: 0.65em;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
