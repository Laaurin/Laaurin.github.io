<template>
  <div
    class="labelCard"
    :class="{ active: selected, clickable: clickable }"
    @click="clickable ? toggleLabel() : null"
  >
    <div class="labelText" :style="{ 'font-size': size === 'small' ? '12px' : '15px' }">{{ labelObject.label }}</div>
    <div
      v-if="deletable && selected && clickable"
      class="removeIcon"
      @click="deleteLabel(labelObject.id)"
    >
      <i class="bi bi-x"></i>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ref } from "vue";

export default {
  emits: ["toggle-label"],
  props: {
    labelObject: Object,
    active: Boolean,
    clickable: {
      type: Boolean,
      default: false,
    },
    deletable: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  setup(props, { emit }) {
    const selected = ref(props.active);
    const toggleLabel = () => {
      selected.value = !selected.value;
      emit("toggle-label", props.labelObject);
    };
    return {
      selected,
      toggleLabel,
    };
  },
  methods: {
    ...mapActions(["deleteLabel"]),
  },
  name: "QuestionLabel",
};
</script>

<style scoped>
.labelCard {
  user-select: none;
  cursor: default;
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
  background: linear-gradient(45deg, var(--primary), var(--primary-dark));
  color: whitesmoke;
}

.clickable {
  cursor: pointer;
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
