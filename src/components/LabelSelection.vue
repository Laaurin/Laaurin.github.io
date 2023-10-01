<template>
  <div class="label-list">
    <div
      class="label-wrapper"
      v-for="(labelObject, index) in displayLabels"
      :key="index"
    >
      <QuestionLabel
        :label-object="labelObject"
        :clickable="true"
        @toggle-label="toggleLabel"
      ></QuestionLabel>
    </div>
    <div class="label-wrapper">
      <new-label @new-label="addLabel"></new-label>
    </div>
  </div>
</template>

<script>
import NewLabel from "@/components/label/NewLabel.vue";

export default {
  name: "LabelSelection",
  components: { NewLabel },
  methods: {
    addLabel(labelObject) {
      //this.teamLabels.push(labelObject);
      this.addedLabels.push(labelObject);
    },

    async saveNewLabelsToTeam() {
      console.log("adding labels...");
      for (const labelObject of this.addedLabels) {
        const id = await this.$store.dispatch(
          "addNewLabelToTeamLabels",
          labelObject.label
        );
        const index = this.questionLabels.findIndex(
          (label) => label.label === labelObject.label
        );

        if (index !== -1) {
          // Aktualisiere die ID des Labels
          this.questionLabels[index].id = id;
        }
      }
    },

    toggleLabel(labelName) {
      if (this.questionLabels.includes(labelName)) {
        this.questionLabels = this.questionLabels.filter(
          (label) => label !== labelName
        );
      } else {
        this.questionLabels.push(labelName);
      }
    },
  },
};
</script>

<style scoped>
.label-list {
  display: flex;
  flex-wrap: wrap; /* Labels in mehreren Zeilen anzeigen */
  align-items: center; /* Vertikal ausrichten */
  margin-top: 10px; /* Abstand oben */
}

.label-wrapper {
  margin-right: 10px; /* Abstand zwischen den Labels */
}
</style>
