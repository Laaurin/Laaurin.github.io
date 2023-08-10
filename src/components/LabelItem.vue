<template>
  <div
    class="label-box"
    :class="{ 'label-item': true, active: selected }"
    @click="toggleSelection"
  >
    {{ labelName }}
  </div>
</template>

<script>
export default {
  props: {
    labelName: String,
  },
  emits: ["toggle-label"],
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    toggleSelection() {
      this.selected = !this.selected;
      this.$emit("toggle-label", this.labelName);
    },
  },
};
</script>

<style scoped>
.label-item {
  display: inline-block;
  padding: 6px 12px;
  margin: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 0.5rem;
}

.label-item.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.label-box {
  user-select: none;
}
</style>
