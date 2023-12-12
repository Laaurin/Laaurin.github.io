<template>
  <div v-if="!addingUser" class="profile">
    <i
      style="font-size: 30px; cursor: pointer; color: whitesmoke"
      class="bi bi-plus-circle"
      @click="toggleAddingUser"
    ></i>
  </div>
  <div v-else>
    <div class="input-group mb-3" style="display: flex; align-items: center; justify-content: center;">
      <input
        v-model="name"
        class="form-control"
        placeholder="Enter user's name"
        @keydown.enter="saveUser"
      />
      <button class="btn btn-primary" style="background-color: var(--primary); border-color: var(--primary)" @click="saveUser">Save</button>
      <button class="btn btn-secondary" @click="cancelUser">Cancel</button>
    </div>
  </div>
</template>



<script>
export default {
  name: "NewUser",
  data() {
    return {
      addingUser: false,
      name: "",
    };
  },
  methods: {
    toggleAddingUser() {
      this.addingUser = !this.addingUser;
    },
    saveUser() {
      this.$store.dispatch("createNewUserProfile", { name: this.name });
      this.name = "";
      this.toggleAddingUser();
    },
    cancelUser() {
      this.name = "";
      this.toggleAddingUser();
    },
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  aspect-ratio: 1;
  height: 150px;
}
</style>
