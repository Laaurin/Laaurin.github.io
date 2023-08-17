<template>
  <div
    class="labelCard"
    :class="{ active: selected, clickable: clickable }"
    @click="clickable ? toggleLabel() : null"
  >
    <div class="labelText">{{ labelObject.label }}</div>
    <div v-if="selected && clickable" class="removeIcon" @click="removeLabel">
      <i class="bi bi-x"></i>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["toggle-label", "remove-label"],
  props: {
    labelObject: Object,
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
      this.$emit("toggle-label", this.labelObject);
    },
    removeLabel(event) {
      event.stopPropagation(); // Stop the click event from reaching the parent div
      this.$emit("remove-label", this.labelObject);
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
  position: relative; /* Needed for positioning the remove icon */
  border-radius: 1rem;
  background-color: lightgray;
  width: auto;
  max-width: max-content;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Align text and icon horizontally */
}

.active {
  background-color: lightgreen;
  color: #616e7f;
}

.labelText {
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
}

.removeIcon {
  position: absolute;
  top: -5px;
  right: -7px;
  font-size: 12px;
  cursor: pointer;
  opacity: 0; /* Initially hide the icon */
  transition: opacity 0.3s ease-in-out; /* Add a transition effect */
}

.labelCard:hover .removeIcon {
  opacity: 1; /* Show the icon on hover */
}
</style>
