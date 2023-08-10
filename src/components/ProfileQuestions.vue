<template>
  <div class="profile-questions">
    <div class="filter-bar">
      <label for="filter">Filter by Label:</label>
      <select id="filter" v-model="selectedLabel">
        <option value="">All Labels</option>
        <option v-for="label in labels" :key="label" :value="label">
          {{ label }}
        </option>
      </select>
    </div>
    <div class="container questions-list">
      <div v-for="(question, index) in filteredQuestions" :key="index">
        <editable-question
          :question="question"
          :available-labels="labels"
          @edit="edit"
        ></editable-question>
      </div>
    </div>
  </div>
  <edit-question-window
    :question="questionInEdit"
    v-if="editQuestion"
    @cancel="editQuestion = false"
  ></edit-question-window>
</template>

<script>
import EditableQuestion from "@/components/EditableQuestion.vue";
import EditQuestionWindow from "@/components/EditQuestionWindow.vue";

export default {
  name: "ProfileQuestions",
  components: {
    EditQuestionWindow,
    EditableQuestion,
  },
  props: {
    questions: Array, // Array der Fragen
    labels: Array, // Array der verfügbaren Labels
  },
  data() {
    return {
      selectedLabel: "",
      editQuestion: false,
      questionInEdit: null,
    };
  },
  computed: {
    filteredQuestions() {
      if (!this.selectedLabel) {
        return this.questions; // Kein Filter ausgewählt, zeige alle Fragen
      }
      return this.questions.filter((question) =>
        question.questionLabels.includes(this.selectedLabel)
      );
    },
  },
  methods: {
    edit(question) {
      console.log("editing: ", question);
      this.questionInEdit = question;
      this.editQuestion = true;
    },
  },
};
</script>

<style scoped>
.profile-questions {
  margin-top: 20px;
}

.filter-bar {
  margin-bottom: 10px;
}

.questions-list {
  display: grid;
  grid-template-columns: 1fr; /* Eine Frage pro Zeile */
  gap: 20px;
}
</style>
