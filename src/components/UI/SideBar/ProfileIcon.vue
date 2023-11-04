<template>
  <div class="profile ms-3">
    <div class="text" style="font-weight: bold">{{uniName}}</div>
    <div class="text">{{ userName || "no user selected" }}</div>
    <button v-if="show" @click="buttonClick">change user</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "ProfilIcon",
  props: {
    "show": Boolean
  },
  emits: ["showUserSelection"],
  setup(props, { emit }) {
    const store = useStore();

    const userName = computed(
      () => store.getters.userProfileName || "no user selected"
    );

    const uniName = computed(
      () => store.getters.userUni || "no uni found"
    );

    const buttonClick = () => {
      emit("showUserSelection");
    };

    return {
      userName,
      uniName,
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
