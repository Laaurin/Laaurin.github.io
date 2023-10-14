<template>
  <p class="filter-title text-center">Filter By Label</p>
  <div class="label-container mb-3">
    <div v-for="labelObject in teamLabels" :key="labelObject.id">
      <question-label
        :label-object="labelObject"
        :active="isActive(labelObject)"
        :clickable="true"
        :deletable="false"
        @toggle-label="toggleLabel(labelObject)"
      ></question-label>
    </div>
  </div>
  <hr style="color: whitesmoke" />
  <p class="filter-title text-center">Filter By Type</p>
  <div class="label-container">
    <div v-for="type in questionTypes" :key="type">
      <question-label
        :label-object="{ label: type, id: type }"
        :active="isActive(type)"
        :clickable="true"
        :deletable="false"
        @toggle-label="toggleType(type)"
      ></question-label>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import QuestionLabel from "@/components/label/QuestionLabel.vue";

export default {
  name: "QuestionFilter",
  emits: ["questionsFiltered"],
  components: { QuestionLabel },
  setup(props, { emit }) {
    const store = useStore();
    const teamLabels = computed(() => {
      return store.getters.getTeamLabels;
    });
    const teamQuestions = computed(() => {
      return store.getters.getTeamQuestions;
    });
    const questionTypes = ref(["multiple-choice", "flash-card"]);
    const selectedLabels = ref([]);
    const selectedTypes = ref([]);
    const filteredQuestions = ref(store.getters.getTeamQuestions);

    const addQuestionsWithSelectedLabels = (questions) => {
      // Filtern Sie Fragen, die mindestens eines der ausgewählten Labels haben
      filteredQuestions.value = questions.filter((question) => {
        return selectedLabels.value.every((label) =>
          question.questionLabels.some(
            (otherLabel) => otherLabel.id === label.id
          )
        );
      });
      console.log(filteredQuestions);
      emit("questionsFiltered", filteredQuestions.value);
    };

    const addQuestionsWithSelectedTypes = (questions) => {
      filteredQuestions.value = questions.filter((question) => {
        console.log(question);
        return selectedTypes.value.every((type) => question.type === type);
      });
      emit("questionsFiltered", filteredQuestions.value);
    };

    const isActive = (otherLabelObject) => {
      return selectedLabels.value.some(
        (labelObject) => labelObject.id === otherLabelObject.id
      );
    };

    const toggle = (otherLabelObject, labelList) => {
      const labelExists = labelList.some(
        (label) => label.id === otherLabelObject.id
      );
      if (labelExists) {
        labelList = labelList.filter(
          (labelObject) => labelObject.id !== otherLabelObject.id
        );
      } else {
        labelList.push(otherLabelObject);
      }
      return labelList;
    };

    const toggleType = (otherType) => {
      const typeExists = selectedTypes.value.some((type) => type === otherType);
      if (typeExists) {
        selectedTypes.value = selectedTypes.value.filter(
          (type) => type !== otherType
        );
        addQuestionsWithSelectedTypes(teamQuestions.value);
        addQuestionsWithSelectedLabels(filteredQuestions.value);
      } else {
        selectedTypes.value.push(otherType);
        addQuestionsWithSelectedTypes(filteredQuestions.value);
      }
    };

    const toggleLabel = (otherLabelObject) => {
      const labelExists = selectedLabels.value.some(
        (label) => label.id === otherLabelObject.id
      );
      if (labelExists) {
        selectedLabels.value = selectedLabels.value.filter(
          (labelObject) => labelObject.id !== otherLabelObject.id
        );
        addQuestionsWithSelectedLabels(teamQuestions.value);
        addQuestionsWithSelectedTypes(filteredQuestions.value);
      } else {
        selectedLabels.value.push(otherLabelObject);
        addQuestionsWithSelectedLabels(filteredQuestions.value);
      }
    };

    return {
      teamLabels,
      teamQuestions,
      questionTypes,
      selectedLabels,
      selectedTypes,
      isActive,
      toggle,
      toggleLabel,
      toggleType,
    };
  },
};
</script>

<style scoped>
.label-container {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  flex-wrap: wrap; /* Labels in mehreren Zeilen anzeigen, wenn der Platz nicht ausreicht */
  gap: 5px; /* Abstand zwischen den Labels anpassen */
}

.filter-title {
  color: whitesmoke;
  font-size: medium;
}
</style>
