<template>
  <div class="labelCard" :class="{ active: selected }" @click="toggleLabel">
    <div class="labelText">{{ labelText }}</div>
  </div>
</template>

<script>
export default {
  emits: ["toggle-label"],
  props: {
    labelText: String,
    active: Boolean,
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    toggleLabel() {
      this.$emit("toggle-label");
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
  background-color: lightgreen;
  width: auto;
  max-width: max-content;
}

.active {
  background-color: orange;
  color: #616e7f;
}

.labelText {
  margin: 20px;
}
</style>
