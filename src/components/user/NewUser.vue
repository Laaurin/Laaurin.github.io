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
      v-model="newUserName"
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
      newUserName: "",
    };
  },
  methods: {
    toggleAddingUser() {
      this.addingUser = !this.addingUser;
    },
    saveUser() {
      // Speichern Sie hier den Benutzer und die Logik für das Hinzufügen
      // Setzen Sie this.addingUser zurück, um zur Icon-Ansicht zurückzukehren.
      this.toggleAddingUser();
      // Der neue Benutzername ist in this.newUserName verfügbar.
      // Führen Sie hier den Speichervorgang aus.
      // Wenn der Vorgang abgeschlossen ist, können Sie den Zustand zurücksetzen.
      this.newUserName = "";
    },
    cancelUser() {
      this.newUserName = "";
      this.toggleAddingUser();
    },
  },
};
</script>

<style scoped></style>
