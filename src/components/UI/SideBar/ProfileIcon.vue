<template>
  <div class="profile ms-3">
    <div class="text" style="font-weight: bold">Uni</div>
    <div class="text">{{ userName || "no user selected" }}</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "ProfilIcon",
  setup() {
    const store = useStore();

    const userName = computed(
      () => store.getters.userProfileName || "no user selected"
    );

    return {
      userName,
    };
  },
};
</script>

<style scoped>
.profile {
  margin-bottom: 2rem;
}
.text {
  font-size: x-large;
  color: whitesmoke;
  text-align: left;
}
</style>
