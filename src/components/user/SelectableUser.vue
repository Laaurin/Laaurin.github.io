<template>
  <div class="profile" @click="select">
    <i style="font-size: 50px" class="bi bi-person"></i>
    <p>{{ userName }}</p>
  </div>
</template>

<script>
export default {
  name: "SelectableUser",
  props: {
    userName: String,
  },
  emits: ["select"],
  methods: {
    select() {
      this.$emit("select");
    },
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontal zentrieren */
  justify-content: center;
  text-align: center; /* Zentriert den Text horizontal */
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  aspect-ratio: 1;
  height: 150px;
}
</style>
