<template>
  <div class="profile ms-3">
    <div class="text" style="font-weight: bold">KAZGUU University</div>
    <div class="text">{{ userName || "no user selected" }}</div>
    <button @click="buttonClick">change user</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "ProfilIcon",
  emits: ["showUserSelection"],
  setup(props, { emit }) {
    const store = useStore();

    const userName = computed(
      () => store.getters.userProfileName || "no user selected"
    );

    const buttonClick = () => {
      emit("showUserSelection");
    };

    return {
      userName,
      buttonClick,
    };
  },
};
</script>

<style scoped>
.profile {
  margin-bottom: 0.5rem;
}
.text {
  font-size: x-large;
  color: whitesmoke;
  text-align: left;
}
</style>
