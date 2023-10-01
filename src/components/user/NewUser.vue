<template>
  <div v-if="!addingUser">
    <i
      style="font-size: 30px; cursor: pointer"
      class="bi bi-plus-circle"
      @click="toggleAddingUser"
    ></i>
  </div>
  <div v-else>
    <input
      v-model="user.name"
      placeholder="Enter user's name"
      @keydown.enter="saveUser"
    />
    <button @click="saveUser">Save</button>
    <button @click="cancelUser">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "NewUser",
  data() {
    return {
      addingUser: false,
      user: {
        name: "",
      },
    };
  },
  methods: {
    toggleAddingUser() {
      this.addingUser = !this.addingUser;
    },
    saveUser() {
      this.$store.dispatch("createNewUserProfile", this.user);
      this.toggleAddingUser();
      // Der neue Benutzername ist in this.newUserName verfügbar.
      // Führen Sie hier den Speichervorgang aus.
      // Wenn der Vorgang abgeschlossen ist, können Sie den Zustand zurücksetzen.
    },
    cancelUser() {
      this.newUserName = "";
      this.toggleAddingUser();
    },
  },
};
</script>

<style scoped></style>
