<template>
  <div class="labelCard new-label" @click="startEditing">
    <div class="labelText" v-if="!editing">New Label +</div>
    <input
      v-if="editing"
      type="text"
      v-model="label"
      @keydown.enter="saveNewLabel"
      @keydown.esc="cancelEditing"
      @blur="cancelEditing"
      ref="input"
    />
  </div>
</template>

<script>
export default {
  emits: ["new-label"],
  data() {
    return {
      editing: false,
      label: "",
    };
  },
  methods: {
    startEditing() {
      this.editing = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    saveNewLabel() {
      if (this.label.trim() !== "" && this.label.trim().length < 15) {
        this.$emit("new-label", {
          label: this.label,
          id: new Date().getTime().toString(),
        });
        this.editing = false;
        this.label = "";
      }
    },
    cancelEditing() {
      this.editing = false;
      this.label = "";
    },
  },
};
</script>

<style scoped>
.labelCard {
  border-radius: 1rem;
  background-color: transparent;
  width: auto;
  max-width: max-content;
  margin: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 24px; /* Festgelegte Höhe für das data */
  padding: 0 10px; /* Innenabstand für das data */
}

.new-label {
  border: 1px dashed #ccc;
}

.labelText {
  font-size: 14px;
  color: #616e7f;
}

input[type="text"] {
  flex: 1;
  font-size: 14px;
  border: none;
  background-color: transparent;
  outline: none;
  color: #616e7f;
  max-width: 50px; /* Hier kannst du die maximale Breite anpassen */
  margin-left: 10px;
  margin-right: 10px;
  padding: 0; /* Kein Innenabstand für das Eingabefeld */
  height: 24px; /* Festgelegte Höhe für das Eingabefeld */
}
</style>
