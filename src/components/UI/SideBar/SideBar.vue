<template>
  <div class="sidebar shadow-lg">
    <profil-icon
      class="mb-5"
      style="position: relative"
      @showUserSelection="showUserSelection = true"
    ></profil-icon>
    <slot></slot>
  </div>
  <user-selection
    v-if="showUserSelection"
    @user-selected="showUserSelection = false"
  ></user-selection>
</template>

<script>
import ProfilIcon from "@/components/UI/SideBar/ProfileIcon.vue";
import UserSelection from "@/components/user/UserSelection.vue";

export default {
  name: "SideBar",
  components: { UserSelection, ProfilIcon },

  data() {
    return {
      showUserSelection: this.$store.getters.userProfileId === null,
      changeUser: false,
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 100%;
  height: calc(100dvh - 100px);
  background: #616e7f;
  font-size: 0.65em;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
