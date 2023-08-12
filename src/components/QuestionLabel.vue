<template>
  <div
    class="labelCard"
    :class="{ active: selected, clickable: clickable }"
    @click="clickable ? toggleLabel() : null"
  >
    <div class="labelText">{{ labelText }}</div>
  </div>
</template>

<script>
export default {
  emits: ["toggle-label"],
  props: {
    labelText: String,
    active: Boolean,
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    toggleLabel() {
      this.selected = !this.selected;
      this.$emit("toggle-label", this.labelText);
    },
  },
  created() {
    this.selected = this.active;
  },
  name: "QuestionLabel",
};
</script>

<style scoped>
.labelCard {
  border-radius: 1rem;
  background-color: lightgray;
  width: auto;
  max-width: max-content;
  margin: 2px;
}

.clickable:hover {
  background-color: lightgreen;
}

.active {
  background-color: lightgreen;
  color: #616e7f;
}

.labelText {
  font-size: 16px;
  margin: 20px;
}

.clickable {
  cursor: pointer;
}
</style>
