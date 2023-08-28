<template>
  <div class="options-button" @click="toggleMenu">
    <i class="bi bi-three-dots-vertical"></i>
    <div v-if="showMenu" class="options-menu">
      <div class="menu-item" @click="handleOption('edit-labels')">
        Edit Labels
      </div>
      <div class="menu-item" @click="handleOption('edit-questions')">
        Edit Questions
      </div>
      <!-- Weitere Optionen hier hinzufügen -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    handleOption(option) {
      this.$emit("select-option", option);
      this.showMenu = false;
    },
  },
};
</script>

<style scoped>
.options-button {
  position: relative;
  cursor: pointer;
}

.options-menu {
  position: absolute;
  top: 0; /* Verwende top: 0; um es an der gleichen Höhe wie der Button zu platzieren */
  /* Verschiebe das Menü nach rechts */
  margin-right: 8px; /* Optional: Füge etwas Abstand zwischen Button und Menü hinzu */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.menu-item {
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: #f5f5f5;
}
</style>
